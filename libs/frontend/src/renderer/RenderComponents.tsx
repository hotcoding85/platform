import { Popover } from 'antd'
import React, { ReactNode } from 'react'
import { useRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'
import { builderDrawerState } from '../../../../apps/web/src/builder/drawer/Builder-drawer'
import { BuilderHandlerProps } from '../../../../apps/web/src/builder/drawer/Builder-handlers'
import { NodeA, NodeI } from '../../../modules/graph/src/core/domain/node/Node'
import { elementParameterFactory } from './elementFactory'
import { useUpdateVertexMutation } from '@codelab/generated'

const hasChildren = (node: NodeI) => {
  return !!node.children?.length
}

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)
const createWithPopover = (children: ReactNode) => {
  return React.createElement(
    Popover,
    {
      key: uuidv4(),
      content,
    },
    children,
  )
}

export const RenderChildren = (
  node: NodeA,
  renderProps: object = {},
  handlers: BuilderHandlerProps,
): ReactNode | Array<ReactNode> => {
  return node.children.map((child: NodeA) => {
    // TODO: remove any cast
    const [Child, props] = elementParameterFactory({
      ...child,
      handlers,
    }) as any

    return (
      <Child key={child.id} {...props} className="Builder-node">
        {hasChildren(child)
          ? RenderChildren(
              child,
              props,
              handlers,
              // child.nextRenderProps(oldRenderProps)
            )
          : null}
      </Child>
    )
  })
}

export const RenderComponents = (node: NodeA) => {
  const [builderDrawer, setBuilderDrawer] = useRecoilState(builderDrawerState)
  const updateVertexMutation = useUpdateVertexMutation()
  const { type } = node
  const handlers: BuilderHandlerProps = {
    setBuilderDrawer,
    updateVertexMutation,
  }
  const [RootComponent, props] = elementParameterFactory({
    type,
    props: node.props,
    handlers,
  }) as any

  return (
    <RootComponent {...props}>
      {RenderChildren(node, {}, handlers)}
    </RootComponent>
  )
}