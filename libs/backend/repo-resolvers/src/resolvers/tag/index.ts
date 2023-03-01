import { withReadTransactionResolver } from '@codelab/backend/infra/adapter/neo4j'
import type { IResolvers } from '@graphql-tools/utils'
import { tagDescendants } from './tag.resolver'

export const tagResolver: IResolvers = {
  Mutation: {},
  Query: {},
  Tag: {
    descendants: withReadTransactionResolver(tagDescendants),
  },
}