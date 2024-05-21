import { endpointConfig } from '@codelab/backend/infra/core'
import type { FactoryProvider } from '@nestjs/common'
import type { ConfigType } from '@nestjs/config'
import { GraphQLClient } from 'graphql-request'
import type { GraphQLClientResponse } from 'graphql-request/build/esm/types'

const GRAPHQL_CLIENT_PROVIDER = 'GRAPHQL_CLIENT_PROVIDER'

export const GraphqlClientProvider: FactoryProvider<GraphQLClient> = {
  inject: [endpointConfig.KEY],
  provide: GRAPHQL_CLIENT_PROVIDER,
  useFactory: (config: ConfigType<typeof endpointConfig>) => {
    const graphqlClient = new GraphQLClient(config.apiAuthority, {
      errorPolicy: 'all',
      responseMiddleware: (
        response: Error | GraphQLClientResponse<unknown>,
      ) => {
        if (response instanceof Error) {
          console.error(response)
        }
      },
    })

    return graphqlClient
  },
}