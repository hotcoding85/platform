import { PropsData, TypeKind } from '@codelab/shared/abstract/core'
import { render } from '@testing-library/react'
import React from 'react'
import { renderPipeline } from './renderPipeline'
import { renderPropsPipe } from './renderPropsPipe'
import {
  componentToRender,
  elementToRender,
  endPipe,
  EndPipeOutput,
  treeToRender,
} from './test'
import { RenderContext } from './types'

const defaultContext = {
  tree: treeToRender,
  render: renderPipeline,
  reactRender: React.createElement,
} as RenderContext

const initialProps: PropsData = {
  renderText: {
    typeKind: TypeKind.RenderPropsType,
    id: componentToRender.id,
  },
  text: 'a random text to render',
}

describe('RenderPropsPipe', () => {
  it('should transform props to a react component function when typeKind is RenderPropsType ', async () => {
    const { props } = renderPropsPipe(endPipe)(
      elementToRender,
      defaultContext,
      initialProps,
    ) as EndPipeOutput

    const { renderText: RenderFn } = props
    const { findByText } = render(React.createElement(RenderFn, {}))

    expect(await findByText(initialProps.text)).toBeInTheDocument()
  })
})