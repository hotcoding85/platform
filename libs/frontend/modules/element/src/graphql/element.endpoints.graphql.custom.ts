import * as Types from '@codelab/shared/abstract/codegen'
import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
// eslint-disable @nrwl/nx/enforce-module-boundaries
import { UpdateElementsDocument } from './element.endpoints.graphql.gen'

export type BatchUpdateElementsMutationVariables = Array<{
  where?: Types.InputMaybe<Types.ElementWhere>
  update?: Types.InputMaybe<Types.ElementUpdateInput>
}>

export type UpdateElementsMutation = any

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>

export const getSdk = (client: GraphQLClient) => {
  return {
    BatchUpdateElements(
      variables: BatchUpdateElementsMutationVariables = [],
      requestHeaders?: Dom.RequestInit['headers'],
    ) {
      client.batchRequests<any>(
        variables.map((variable) => ({
          document: UpdateElementsDocument,
          variable,
        })),
        {
          ...requestHeaders,
        },
      )
    },
  }
}