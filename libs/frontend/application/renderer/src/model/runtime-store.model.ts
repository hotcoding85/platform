import {
  getRendererService,
  type IRuntimeActionModel,
  type IRuntimeStoreDTO,
  type IRuntimeStoreModel,
  runtimeStoreRef,
} from '@codelab/frontend/abstract/application'
import type { IStoreModel } from '@codelab/frontend/abstract/domain'
import { actionRef, isAtomRef } from '@codelab/frontend/abstract/domain'
import { propSafeStringify } from '@codelab/frontend/domain/prop'
import { IPropData, IRef } from '@codelab/shared/abstract/core'
import type { Maybe } from '@codelab/shared/abstract/types'
import { Nullable } from '@codelab/shared/abstract/types'
import keys from 'lodash/keys'
import { computed, observable, reaction, set, toJS } from 'mobx'
import type { ObjectMap, Ref } from 'mobx-keystone'
import {
  idProp,
  Model,
  model,
  modelAction,
  objectMap,
  prop,
} from 'mobx-keystone'
import { RuntimeActionModel } from './runtime-action.model'

const create = (dto: IRuntimeStoreDTO) => new RuntimeStoreModel(dto)

@model('@codelab/RuntimeStore')
export class RuntimeStoreModel
  extends Model(() => ({
    id: idProp,
    runtimeActions: prop<ObjectMap<IRuntimeActionModel>>(() => objectMap([])),
    runtimeProviderStore: prop<Maybe<Ref<IRuntimeStoreModel>>>(),
    store: prop<Ref<IStoreModel>>(),
  }))
  implements IRuntimeStoreModel
{
  static create = create

  @computed
  get jsonString() {
    return propSafeStringify({
      refs: this.refs,
      state: this.state,
    })
  }

  @computed
  get refKeys(): Array<string> {
    const elementTree =
      this.store.current.page?.maybeCurrent ||
      this.store.current.component?.maybeCurrent

    const elements = elementTree?.elements || []

    return elements
      .filter((element) => isAtomRef(element.renderType))
      .map(({ slug }) => slug)
  }

  @computed
  get renderer() {
    return this.renderService.activeRenderer?.current
  }

  @computed
  get runtimeActionsList() {
    const actions = [...this.runtimeActions.values()]

    return this.store.current.actions.map((action) => {
      const found = actions.find((existing) => existing.action.id === action.id)

      if (found) {
        return found
      }

      const runtimeAction = RuntimeActionModel.create({
        action: actionRef(action.id),
        runtimeStore: runtimeStoreRef(this.id),
      })

      this.runtimeActions.set(runtimeAction.id, runtimeAction)

      return runtimeAction
    })
  }

  refs = observable.object<IPropData>({})

  /**
   * Keep this updated within `onAttachedToRootStore`
   */
  @observable
  state: IPropData = {}

  @modelAction
  createEmptyRefs(refKeys: Array<string>) {
    refKeys.forEach((key: string) => {
      this.registerRef(key, null)
    })
  }

  @modelAction
  deleteUnusedRefs() {
    keys(this.refs).forEach((key) => {
      if (!this.refKeys.includes(key)) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this.refs[key]
      }
    })
  }

  @modelAction
  registerRef(key: string, current: Nullable<HTMLElement>) {
    set(this.refs, { [key]: { current } })
  }

  @modelAction
  runtimeAction(action: IRef) {
    const foundAction = this.runtimeActionsList.find(
      (runtimeAction) => runtimeAction.action.id === action.id,
    )

    return (
      foundAction || this.runtimeProviderStore?.current.runtimeAction(action)
    )
  }

  onAttachedToRootStore() {
    const disposer = reaction(
      () => this.store.maybeCurrent?.api.maybeCurrent?.defaultValues,
      (defaultValues) => {
        this.state = defaultValues || {}
      },
      { fireImmediately: true },
    )

    return () => {
      disposer()
    }
  }

  @computed
  private get renderService() {
    return getRendererService(this)
  }
}
