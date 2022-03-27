import { TypeKind } from '@codelab/shared/abstract/core'
import { _async, _await, idProp, prop } from 'mobx-keystone'
import { TypeFragment } from '../graphql'
import { updateTypeApi, UpdateTypeInput } from './apis/type.api'

export interface IBaseType {
  typeKind: TypeKind
  id: string
  name: string

  updateFromFragment: (fragment: TypeFragment) => void
}

// Using ExtendedModel with a BaseType produced a weird error that I couldn't figure out.
// This is a workaround - just call this when defining a type model as the props object
export const baseTypeProps = <TKind extends TypeKind>(kind: TKind) =>
  ({
    id: idProp,
    name: prop<string>(),
    typeKind: prop<TKind>(() => kind),
  } as const)

export const baseUpdateFromFragment = function (
  self: IBaseType,
  type: TypeFragment,
) {
  self.name = type.name
}
