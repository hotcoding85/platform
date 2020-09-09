/**
 * There are 3 types of traversal orders for a Tree data structure:
 *
 * (1) In-order
 * (2) Pre-order
 * (3) Post-order
 *
 * For building a DOM from React components, we want to use post-order. Check `Traversal.spec.ts` for an example.
 */
import { Props } from '@codelab/shared/interface'
import { reduce } from 'lodash'
import { curry } from 'ramda'
import { Node } from '../../../node/src/base/Node'
import { NodeIteratee, TreeSubTreeContext } from '../tree/Tree.i'
import { NodeInterface } from '../../../node/src/base/Node.i'

/**
 * Curried function allows us to first initialize the treeWalker with an iteratee.
 *
 * The reduce loop then passes the remaining arguments.
 *
 * @param parent - Parent `Node` of current iteratee
 */
export const treeWalker = curry(
  (
    parent: Node,
    nodeIteratee: NodeIteratee<TreeSubTreeContext, Node>,
    subTreeContext: TreeSubTreeContext, // prev (reduce arg)
    child: Node, // curr (reduce arg)
    index: number, // index (reduce arg)
  ) => {
    if (parent && !parent?.id) {
      throw Error('id missing from parent')
    }

    const newSubTreeContext: TreeSubTreeContext = nodeIteratee(
      { ...subTreeContext, parent },
      child,
      index,
    )

    if (!Node.hasChildren<Node>(child)) {
      return newSubTreeContext
    }

    // At junctions of tree, returns when all children appended
    return reduce<Node, TreeSubTreeContext>(
      child.children,
      treeWalker<TreeSubTreeContext, Node>(
        newSubTreeContext.prev,
        nodeIteratee,
      ),
      newSubTreeContext,
    )
  },
)

export interface TraversalOrder<P extends Props = {}> {
  (node: NodeInterface<P>, iteratee: (node: NodeInterface<P>) => void)
}

export interface TraversalIteratee<P extends Props = {}> {
  (node: NodeInterface<P>): void
}

export function traversePostOrder<P extends Props = {}>(
  node: NodeInterface<P>,
  iteratee: TraversalIteratee<P>,
) {
  node.children.forEach((child) => {
    traversePostOrder<P>(child, iteratee)
  })

  iteratee(node)
}

export function traversePreOrder<P extends Props = {}>(
  node: NodeInterface<P>,
  iteratee: TraversalIteratee<P>,
) {
  if (!node) {
    return
  }

  iteratee(node)

  node.children.forEach((child) => {
    traversePreOrder(child, iteratee)
  })
}
