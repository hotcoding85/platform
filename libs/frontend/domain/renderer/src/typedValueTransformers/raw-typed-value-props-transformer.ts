import type { TypedValue } from '@codelab/frontend/abstract/core'
import { ITypeKind } from '@codelab/shared/abstract/core'
import { ExtendedModel, model } from 'mobx-keystone'
import type { ITypedValueTransformer } from '../abstract/i-typed-value-transformer'
import { BaseRenderPipe } from '../renderPipes/render-pipe.base'

/**
 * Transforms props with the following format.
 * Use as a fallback if other transformers are not applicable
 *
 *     {
 *        [$propName]: {
 *          type: $typeId,
 *          value: $value,
 *        },
 *     }
 *
 *     into :
 *
 *     {
 *        [$propName] : $value
 *     }
 */
@model('@codelab/RawTypedValuePropsTransformer')
export class RawTypedValuePropsTransformer
  extends ExtendedModel(BaseRenderPipe, {})
  implements ITypedValueTransformer
{
  public readonly handledKinds: ReadonlySet<ITypeKind> = new Set([
    ITypeKind.ActionType,
    ITypeKind.AppType,
    ITypeKind.ArrayType,
    ITypeKind.EnumType,
    ITypeKind.ElementType,
    ITypeKind.InterfaceType,
    ITypeKind.LambdaType,
    ITypeKind.CodeMirrorType,
    ITypeKind.PageType,
    ITypeKind.PrimitiveType,
  ])

  canHandleTypeKind(kind: ITypeKind): boolean {
    return this.handledKinds.has(kind)
  }

  canHandleValue(value: TypedValue<unknown>): boolean {
    return true
  }

  public transform(props: TypedValue<unknown>) {
    if (!props.value) {
      return props
    }

    return props.value
  }
}