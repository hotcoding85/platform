import { omit, reduce } from 'lodash'
import React, { FunctionComponent, ReactElement, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
// eslint-disable-next-line import/no-cycle
import { isSingleRenderPropValue } from '../../props/src/libs/Props.guards'
import {
  buildCtx,
  buildProps,
  filterRenderProps,
  isLeafRenderPropValue,
  renderPropsFilter,
} from '@codelab/core/props'
import {
  HasChildren,
  Node,
  NodeA,
  NodeCreate,
  NodeTypeLiteral,
  nodeTypeLiterals,
} from '@codelab/shared/interface/node'
import { Props } from '@codelab/shared/interface/props'

/**
 * Node is instantiated during Tree traversal
 */
export class NodeEntity<
  T extends NodeTypeLiteral = NodeTypeLiteral,
  P extends Props = {}
> implements NodeA<T, P> {
  public Component: FunctionComponent<any> = () => null

  public id: string

  public type: T

  public parent?: Node<T, P>

  public children: Array<Node<T, P>> = []

  // eslint-disable-next-line react/static-property-placement
  public props: P

  /**
   * The class Node & the codec Node should be kept separate. Node is the container for behavior, while codec Node holds the shape of the data
   */
  public data: NodeCreate<T, P>

  public renderProps: Props = {}

  /**
   * Can take just ID, but fills out other fields
   */
  constructor(node: NodeCreate<T, P>) {
    const { props, id, type } = node

    if (!type || !nodeTypeLiterals.includes(type)) {
      throw new Error(`${type} is not a valid Node type`)
    }

    this.data = node
    this.type = type
    this.props = (props ?? {}) as P
    this.id = id ?? uuidv4()
  }

  get key(): React.Key {
    return (this.props.key as React.Key) ?? this.id
  }

  public addChild(child: Node<T, P>) {
    this.children.push(child)
    child.addParent(this)
  }

  public addParent(parent: Node<T, P>) {
    this.parent = parent
  }

  static hasChildren<N extends HasChildren<N>>(node: N) {
    return !!node.children?.length
  }

  /**
   * Check children assigned from json structure
   */
  public hasChildren() {
    return !!this.children.length
  }

  public get leafRenderProps() {
    return filterRenderProps(this.parent?.props, 'leaf') ?? {}
  }

  public get parentRenderProps() {
    return filterRenderProps(this.parent?.props, 'single') ?? {}
  }

  get mergedProps() {
    this.props = { ...this.props, ...this.leafRenderProps }

    return {
      key: this.key,
      ...this.props,
      ...this.parentRenderProps,
    }
  }

  public get context() {
    return buildCtx(this.props)
  }

  render(
    Component: any,
    props: Props,
    children: ReactNode,
    hasRootChildren: boolean,
  ): ReactElement {
    return this.hasChildren() || hasRootChildren ? (
      <Component {...props}>{children}</Component>
    ) : (
      <Component {...props} />
    )
  }

  /**
   * For current node/component, build a React tree comprising of current parent & all children.
   *
   * Allow recursive building of React tree from the bottom up.
   *
   * Children passed from root tree component
   *
   * const Component = Tree.render(data)
   *
   * ```
   * <Component>{jsxChildren}</Component>
   * ```
   */
  public Children(
    rootChildren: ReactNode,
    renderProps: Props,
    ctx: any,
  ): ReactNode | Array<ReactNode> {
    const children = reduce<NodeEntity<T, P>, Array<ReactNode>>(
      this.children as Array<NodeEntity<T, P>>,
      (Components: Array<ReactNode>, child: NodeEntity) => {
        const { Component: Child, key, props, context } = child

        // console.debug(`${this.type} -> ${child.type}`, props)

        let newCtx = context

        if (isLeafRenderPropValue(ctx)) {
          newCtx = { ...newCtx, ...ctx }
        } else if (isSingleRenderPropValue(ctx)) {
          newCtx = { ...newCtx, ...omit(ctx, '__type') }
        }

        const evaluatedProps = buildProps(
          { ...props, ctx: newCtx },
          renderProps,
        )

        const newRenderProps = renderPropsFilter(evaluatedProps)

        let ChildComponent: ReactNode = rootChildren ? (
          <Child key={key} {...evaluatedProps}>
            {rootChildren}
          </Child>
        ) : (
          <Child key={key} {...evaluatedProps} />
        )

        if (child.hasChildren()) {
          ChildComponent = (
            <Child key={key} {...evaluatedProps}>
              {child.Children(rootChildren, newRenderProps, newCtx)}
            </Child>
          )
        }

        return [...Components, ChildComponent]
      },
      [],
    )

    return React.Children.count(children) === 1 ? children[0] : children
  }
}
