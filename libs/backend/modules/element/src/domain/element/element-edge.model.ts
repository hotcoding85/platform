import { Edge } from '@codelab/shared/abstract/core'
import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType({ description: 'An edge between two element nodes' })
export class ElementEdge implements Edge {
  @Field({ description: 'The id of the source Element/Component' })
  declare source: string

  @Field({ description: 'The id of the target Element/Component' })
  declare target: string

  @Field(() => Int, { nullable: true })
  declare order?: number

  constructor({ source, target, order }: ElementEdge) {
    this.source = source
    this.target = target
    this.order = order
  }
}