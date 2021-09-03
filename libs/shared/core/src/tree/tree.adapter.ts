import { Edge, Graph, Vertex } from '@codelab/shared/abstract/core'
import { DataNode } from 'antd/lib/tree'
import cytoscape, { SingularElementArgument } from 'cytoscape'
import { getEdgeOrder } from '../cytoscape/edge'
import { getElementData } from '../cytoscape/element'
import { edgeId } from '../graph/edge'

type ElementPredicate<TElement = SingularElementArgument> = (
  element: TElement,
) => boolean

export type Predicate = (node: any) => boolean

export const filterPredicate =
  (guard: Predicate) => (node: SingularElementArgument) =>
    guard(getElementData(node))

/**
 * The TreeAdapter implements the Graph port interface. Think of the GraphQL server data as the contract, and we're adapting to that.
 */
export abstract class TreeAdapter<TVertex extends Vertex, TEdge extends Edge> {
  protected readonly cy: cytoscape.Core

  root: TVertex

  /**
   * This is the default predicate used for searching, can be overridden.
   */
  predicate: Predicate = () => true

  constructor(
    graph?: Graph<TVertex, TEdge> | null,
    extractEdgeId?: (edge: TEdge) => string,
  ) {
    const vertices = graph?.vertices ?? []
    const edges = graph?.edges ?? []
    const parentsMap = new Map<string, string>()

    edges.forEach((edge) => {
      parentsMap.set(edge.target, edge.source)
    })

    this.cy = cytoscape({
      headless: true,
      elements: {
        nodes: vertices.map((v) => ({
          data: { ...v, id: v.id, data: v, parent: parentsMap.get(v.id) },
        })),
        edges: edges.map((e) => ({
          data: {
            ...e,
            source: e.source,
            target: e.target,
            id: extractEdgeId ? extractEdgeId(e) : edgeId(e),
          },
        })),
      },
    })

    this.root = this.cy.elements().roots().map<TVertex>(getElementData)[0]
  }

  /**
   * Get all elements in cytoscape according to the predicate
   *
   * @param predicate filters the type of element
   */
  private getAllElements<TElement = TVertex>(predicate: ElementPredicate) {
    return this.cy
      .elements()
      .filter(filterPredicate(predicate))
      .map<TElement>(getElementData)
  }

  getPathFromRoot(elementId: string) {
    const path = this.cy.elements().aStar({
      root: `#${this.cy.elements().roots().first().id()}`,
      directed: true,
      goal: `#${elementId}`,
    })

    return {
      found: path.found,
      path: path.path.map((e) => e.id()),
    }
  }

  /**
   * Allows child class to override antd tree node mapping behavior
   */
  protected antdNodeMapper(element: TVertex): DataNode {
    return {
      ...element,
      key: element.id,
      title: element.name,
    }
  }

  /**
   * @param predicate
   */
  getAntdTree() {
    const root = this.cy.elements().roots().first()
    let tree: DataNode | null = null
    const nodes: Record<string, DataNode> = {}
    const nodeOrder: Record<string, number> = {}

    this.cy.elements().breadthFirstSearch({
      root,
      visit: (visitedNode, edge) => {
        const element = getElementData(visitedNode)
        const order = getEdgeOrder(edge)
        const node = this.antdNodeMapper(element)

        nodes[element.id] = node
        nodeOrder[element.id] = order

        if (!this.predicate(element)) {
          return
        }

        if (tree === null) {
          tree = node
        }

        if (edge) {
          const parent = edge.source()
          const parentNode = nodes[parent.id()]
          const existingChildren = parentNode.children

          parentNode.children = Array.isArray(existingChildren)
            ? [...existingChildren, node].sort(
                (a, b) => nodeOrder[a.key] - nodeOrder[b.key],
              )
            : [node]
        }
      },
    })

    return tree as unknown as DataNode
  }

  getAllNodes<TElement = TVertex>(predicate: ElementPredicate = () => true) {
    return this.cy
      .elements()
      .filter(filterPredicate(this.predicate ?? predicate))
      .map<TElement>(getElementData)
  }

  /**
   * Get the element by id
   *
   * @param elementId element id
   * @param predicate optional predicate
   */
  getElement<TElement = TVertex>(
    elementId: string,
    predicate: ElementPredicate = () => true,
  ) {
    return this.cy
      .getElementById(elementId)
      .filter(filterPredicate(this.predicate ?? predicate))
      .first()
      .map<TElement>(getElementData)[0]
  }

  getParent<TElement = TVertex>(
    elementId: string,
    predicate: ElementPredicate = () => true,
  ) {
    return this.cy
      .getElementById(elementId)
      .incomers()
      .nodes()
      .filter(filterPredicate(this.predicate ?? predicate))
      .first()
      .map<TElement>(getElementData)[0]
  }

  getRoot<TElement = TVertex>() {
    return this.cy.elements().roots().map<TElement>(getElementData)[0]
  }

  getChildren<TElement = TVertex>(
    elementId: string,
    predicate: ElementPredicate = () => true,
  ) {
    return this.cy
      .getElementById(elementId)
      .outgoers()
      .edges()
      .sort((a, b) => getEdgeOrder(a) - getEdgeOrder(b))
      .targets()
      .filter(filterPredicate(this.predicate ?? predicate))
      .map<TElement>(getElementData)
  }

  findElementFrom<TElement = TVertex>(
    elementId: string,
    predicate: ElementPredicate,
  ): TElement | undefined {
    return this.cy
      .getElementById(elementId)
      .outgoers()
      .nodes()
      .filter(filterPredicate(this.predicate ?? predicate))
      .first()
      .map<TElement>(getElementData)[0]
  }

  getNodeById<TElement = TVertex>(
    id: string,
    predicate: ElementPredicate = () => true,
  ) {
    return this.cy
      .elements()
      .filter(filterPredicate(this.predicate ?? predicate))
      .getElementById(id)
      .first()
      .map<TElement>(getElementData)[0]
  }

  getDescendants<TElement = TVertex>(
    elementId: string,
    predicate: ElementPredicate = () => true,
  ) {
    return this.cy
      .getElementById(elementId)
      .descendants()
      .filter(filterPredicate(this.predicate ?? predicate))
      .map<TElement>(getElementData)
  }

  getOrderInParent(elementId: string) {
    return this.cy
      .getElementById(elementId)
      .incomers()
      .edges()
      .first()
      .map(getEdgeOrder)[0]
  }
}