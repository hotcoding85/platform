import {
  IBaseTypeVertex,
  TypeKind,
  Vertex,
} from '@codelab/shared/abstract/core'
import { Field, ID, InterfaceType, registerEnumType } from '@nestjs/graphql'

registerEnumType(TypeKind, { name: 'TypeKind' })

@InterfaceType({ isAbstract: true })
export class Type<TTypeKind extends TypeKind>
  implements Vertex, IBaseTypeVertex<TTypeKind>
{
  /**
   * Added to satisfy context between generated types & these models
   */
  __typename: `${TTypeKind}`

  @Field(() => TypeKind)
  typeKind: TTypeKind

  @Field(() => ID)
  declare id: string

  @Field()
  declare name: string

  constructor(typeKind: TTypeKind) {
    this.typeKind = typeKind
    this.__typename = `${typeKind}` as const
  }
}