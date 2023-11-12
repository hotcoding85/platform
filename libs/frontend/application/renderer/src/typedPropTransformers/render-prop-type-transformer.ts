import type { ITypedPropTransformer } from '@codelab/frontend/abstract/application'
import type {
  IFieldModel,
  IPageNode,
  TypedProp,
} from '@codelab/frontend/abstract/domain'
import {
  extractTypedPropValue,
  isElement,
} from '@codelab/frontend/abstract/domain'
import { hasStateExpression } from '@codelab/frontend/application/shared/core'
import { Prop } from '@codelab/frontend/domain/prop'
import type { IPropData } from '@codelab/shared/abstract/core'
import { ExtendedModel, model } from 'mobx-keystone'
import { v4 } from 'uuid'
import { BaseRenderPipe } from '../renderPipes'

/**
 * Transforms props from the following format:
 * {
 *   [$propName]: {
 *     type: '<id of a type with kind RenderPropType>',
 *     value: '$componentId'
 *   }
 * }
 *
 * into:
 * {
 *   [$propName]: <(...args) => ReactNode - A function that renders the component with id: $componentId>
 * }
 */

const matchPropsToFields = (
  fields: Array<IFieldModel> = [],
  props: Array<object>,
): IPropData =>
  props.reduce(
    (acc, val, index) =>
      fields[index]?.key
        ? { ...acc, [fields[index]?.key as string]: val }
        : acc,
    {},
  )

@model('@codelab/RenderPropTypeTransformer')
export class RenderPropTypeTransformer
  extends ExtendedModel(BaseRenderPipe, {})
  implements ITypedPropTransformer
{
  public transform(prop: TypedProp, node: IPageNode) {
    const { expressionTransformer } = this.renderer
    const propValue = extractTypedPropValue(prop)

    if (!propValue) {
      return ''
    }

    if (hasStateExpression(propValue) && expressionTransformer.initialized) {
      return expressionTransformer.transpileAndEvaluateExpression(propValue)
    }

    const component = this.componentDomainService.components.get(propValue)
    const fields = component?.api.current.fields
    // can't return prop object because it will be passed as React Child, which will throw an error
    const fallback = ''

    if (!component) {
      console.error('Component not found')

      return fallback
    }

    const runtimeNode = isElement(node)
      ? this.rendererService.runtimeElement(node)
      : this.rendererService.runtimeContainerNode(node)

    if (!runtimeNode) {
      console.error('Runtime node not found')

      return fallback
    }

    // spread is required to access all args not just the first one
    return (...renderPropArgs: Array<object>) => {
      // match props to fields by order first to first and so on.
      const props = matchPropsToFields(fields, renderPropArgs)

      const runtimeComponent =
        runtimeNode.runtimeProps?.addRuntimeComponentModel(component)

      if (!runtimeComponent) {
        console.error('Unable to create runtime component')

        return fallback
      }

      runtimeComponent.runtimeProps?.setOverrideProps(
        Prop.create({
          data: JSON.stringify(props),
          id: v4(),
        }),
      )

      return runtimeComponent.render
    }
  }
}