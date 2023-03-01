import { withReadTransactionResolver } from '@codelab/backend/infra/adapter/neo4j'
import type { IResolvers } from '@graphql-tools/utils'
import { baseTypes } from './query'

export const typeResolver: IResolvers = {
  Mutation: {},
  Query: {
    baseTypes: withReadTransactionResolver(baseTypes),
  },
}