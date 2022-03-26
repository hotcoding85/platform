import { IResolvers } from '@graphql-tools/utils'
import { withRxTransaction } from '../abstract/withRxTransaction'
import { tagGraphs } from './tag.resolvers'

export const tagResolver: IResolvers = {
  Mutation: {},
  Query: {
    tagGraphs: withRxTransaction(tagGraphs),
  },
}