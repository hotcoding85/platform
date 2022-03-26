import * as Types from '@codelab/shared/abstract/codegen-v2'

import {
  TypeBase_AppType_Fragment,
  TypeBase_ArrayType_Fragment,
  TypeBase_ElementType_Fragment,
  TypeBase_EnumType_Fragment,
  TypeBase_InterfaceType_Fragment,
  TypeBase_LambdaType_Fragment,
  TypeBase_MonacoType_Fragment,
  TypeBase_PageType_Fragment,
  TypeBase_PrimitiveType_Fragment,
  TypeBase_ReactNodeType_Fragment,
  TypeBase_RenderPropsType_Fragment,
  TypeBase_UnionType_Fragment,
} from './TypeBase.fragment.v2.1.graphql.gen'
import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import { gql } from 'graphql-tag'
import { TypeBaseFragmentDoc } from './TypeBase.fragment.v2.1.graphql.gen'
export type UnionTypeWithInnerTypesFragment = {
  typesOfUnionType: Array<
    | TypeBase_AppType_Fragment
    | TypeBase_ArrayType_Fragment
    | TypeBase_ElementType_Fragment
    | TypeBase_EnumType_Fragment
    | TypeBase_InterfaceType_Fragment
    | TypeBase_LambdaType_Fragment
    | TypeBase_MonacoType_Fragment
    | TypeBase_PageType_Fragment
    | TypeBase_PrimitiveType_Fragment
    | TypeBase_ReactNodeType_Fragment
    | TypeBase_RenderPropsType_Fragment
    | TypeBase_UnionType_Fragment
  >
} & UnionTypeFragment

export type UnionTypeFragment = {
  typesOfUnionType: Array<
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
  >
} & TypeBase_UnionType_Fragment

export const UnionTypeFragmentDoc = gql`
  fragment UnionType on UnionType {
    ...TypeBase
    typesOfUnionType {
      id
    }
  }
`
export const UnionTypeWithInnerTypesFragmentDoc = gql`
  fragment UnionTypeWithInnerTypes on UnionType {
    ...UnionType
    typesOfUnionType {
      ... on TypeBase {
        ...TypeBase
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {}
}
export type Sdk = ReturnType<typeof getSdk>