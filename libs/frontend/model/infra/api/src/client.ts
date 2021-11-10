import { GraphQLClient } from 'graphql-request'
import type { RequestInit } from 'graphql-request/dist/types.dom'

const API_ROUTE = '/api/graphql'
let client: GraphQLClient | undefined

export const getGraphQLClient = (options?: RequestInit | null) => {
  if (!client) {
    client = new GraphQLClient(API_ROUTE, options ?? undefined)
  }

  return client
}
