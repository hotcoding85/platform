import * as Types from '@codelab/shared/abstract/codegen'

import {
  BaseType_ActionType_Fragment,
  BaseType_AppType_Fragment,
  BaseType_ArrayType_Fragment,
  BaseType_CodeMirrorType_Fragment,
  BaseType_ElementType_Fragment,
  BaseType_EnumType_Fragment,
  BaseType_InterfaceType_Fragment,
  BaseType_LambdaType_Fragment,
  BaseType_PageType_Fragment,
  BaseType_PrimitiveType_Fragment,
  BaseType_ReactNodeType_Fragment,
  BaseType_RenderPropType_Fragment,
  BaseType_RichTextType_Fragment,
  BaseType_UnionType_Fragment,
} from './base-type.fragment.graphql.gen'
import { GraphQLClient, RequestOptions } from 'graphql-request'
import { gql } from 'graphql-tag'
import { BaseTypeFragmentDoc } from './base-type.fragment.graphql.gen'
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders']
export type AppTypeFragment = BaseType_AppType_Fragment

export const AppTypeFragmentDoc = gql`
  fragment AppType on AppType {
    ...BaseType
  }
  ${BaseTypeFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {}
}
export type Sdk = ReturnType<typeof getSdk>
