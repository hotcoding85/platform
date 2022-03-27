import { TypeKind } from '@codelab/shared/abstract/core'
import { mergeProps } from '@codelab/shared/utils'
import { mapValues } from 'lodash'
import React from 'react'
import { getPropsByTypeKind, transformPropsToComponentFn } from '../utils'
import { RenderPipeFactory } from './types'

/**
 * Transforms the React node props
 */
export const reactNodePipe: RenderPipeFactory =
  (next) => (element, context, props) => {
    const reactNodeProps = getPropsByTypeKind(
      props,
      TypeKind.ReactNodeType,
      context.typesById,
    )

    const transformedProps = transformPropsToComponentFn(
      reactNodeProps,
      context,
      props,
    )

    const components = mapValues(transformedProps, (RenderedComponent) =>
      React.createElement(RenderedComponent, {}),
    )

    return next(element, context, mergeProps(props, components))
  }
