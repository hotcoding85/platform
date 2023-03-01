import type { IBaseType, IUserRef } from '@codelab/backend/abstract/core'
import type { ITypeKind } from '@codelab/shared/abstract/core'

export abstract class BaseType implements IBaseType {
  id: string

  name: string

  kind: ITypeKind

  __typename?: `${ITypeKind}`

  owner: IUserRef

  constructor({ id, name, kind, __typename, owner }: IBaseType) {
    this.id = id
    this.name = name
    this.kind = kind
    this.owner = owner
    this.__typename = __typename
  }

  assertCreateFailed<Model>(data: Array<Model>) {
    if (!data[0]) {
      throw new Error('Create failed')
    }

    return data[0]
  }
}