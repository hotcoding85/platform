import type {
  IComponentModel,
  IPageModel,
} from '@codelab/frontend/abstract/domain'
import type { Maybe, Nullable } from '@codelab/shared/abstract/types'
import type { AnyModel, Ref } from 'mobx-keystone'
import type { ReactElement } from 'react'
import type { IRuntimeModelRef } from '../runtime.model.interface'
import type { IRuntimeElementModel } from '../runtime-element'
import type { IRuntimeComponentPropModel } from '../runtime-prop'
import type { IRuntimeStoreModel } from '../runtime-store'

/**
 * Represents runtime model for IPageModel or IComponentModel
 */
export interface IRuntimeContainerNodeModel extends AnyModel {
  /**
   * If runtime component is created by child mapper this sets child index
   * this could be different from the child render index if element has children
   * other than ones created by child mapper
   */
  childMapperIndex: Maybe<number>
  /**
   * Exposed for external use by other models and to preserve structure
   */
  containerNode: Ref<IComponentModel> | Ref<IPageModel>
  id: string
  /**
   * Exposed for external use by other models and to preserve structure
   */
  parent?: IRuntimeModelRef

  render: Nullable<ReactElement>
  // runtimeProps is available when containerNode is component
  runtimeProps?: IRuntimeComponentPropModel
  runtimeRootElement: IRuntimeElementModel
  runtimeStore: IRuntimeStoreModel

  setChildMapperIndex(index: number): void
}
