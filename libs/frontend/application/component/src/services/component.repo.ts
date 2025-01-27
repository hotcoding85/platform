import type { IComponentRepository } from '@codelab/frontend/abstract/application'
import type { IComponentModel } from '@codelab/frontend/abstract/domain'
import type {
  ComponentOptions,
  ComponentUniqueWhere,
  ComponentWhere,
} from '@codelab/shared/abstract/codegen'
import { _async, _await, Model, model, modelFlow } from 'mobx-keystone'
import { componentApi } from './component.api'

@model('@codelab/ComponentRepository')
export class ComponentRepository
  extends Model({})
  implements IComponentRepository
{
  @modelFlow
  add = _async(function* (
    this: ComponentRepository,
    component: IComponentModel,
  ) {
    const {
      createComponents: { components },
    } = yield* _await(
      componentApi.CreateComponents({ input: component.toCreateInput() }),
    )

    return components[0]!
  })

  @modelFlow
  delete = _async(function* (
    this: ComponentRepository,
    components: Array<IComponentModel>,
  ) {
    const {
      deleteComponents: { nodesDeleted },
    } = yield* _await(
      componentApi.DeleteComponents({
        delete: {
          api: {},
          props: {},
          store: {},
        },
        where: { id_IN: components.map((component) => component.id) },
      }),
    )

    return nodesDeleted
  })

  @modelFlow
  find = _async(function* (
    this: ComponentRepository,
    where: ComponentWhere,
    options?: ComponentOptions,
  ) {
    return yield* _await(componentApi.GetComponents({ options, where }))
  })

  @modelFlow
  findOne = _async(function* (
    this: ComponentRepository,
    where: ComponentUniqueWhere,
  ) {
    return (yield* _await(this.find(where))).items[0]
  })

  @modelFlow
  update = _async(function* (
    this: ComponentRepository,
    component: IComponentModel,
  ) {
    const { id, name } = component

    const {
      updateComponents: { components },
    } = yield* _await(
      componentApi.UpdateComponents({
        update: {
          name,
        },
        where: { id },
      }),
    )

    return components[0]!
  })
}
