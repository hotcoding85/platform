export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date and time, represented as an ISO-8601 string */
  DateTime: string
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: Record<string, any>
}

export type AnyType =
  | AppType
  | ArrayType
  | ElementType
  | EnumType
  | InterfaceType
  | LambdaType
  | MonacoType
  | PageType
  | PrimitiveType
  | RenderPropsType
  | UnionType

export type App = {
  __typename?: 'App'
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<Array<Maybe<User>>>
  ownerAggregate?: Maybe<AppUserOwnerAggregationSelection>
  ownerConnection: AppOwnerConnection
  pages?: Maybe<Array<Maybe<Page>>>
  pagesAggregate?: Maybe<AppPagePagesAggregationSelection>
  pagesConnection: AppPagesConnection
}

export type AppOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type AppOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

export type AppOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<AppOwnerConnectionSort>>
  where?: InputMaybe<AppOwnerConnectionWhere>
}

export type AppPagesArgs = {
  options?: InputMaybe<PageOptions>
  where?: InputMaybe<PageWhere>
}

export type AppPagesAggregateArgs = {
  where?: InputMaybe<PageWhere>
}

export type AppPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<AppPagesConnectionSort>>
  where?: InputMaybe<AppPagesConnectionWhere>
}

export type AppAggregateSelection = {
  __typename?: 'AppAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type AppConnectInput = {
  owner?: InputMaybe<Array<AppOwnerConnectFieldInput>>
  pages?: InputMaybe<Array<AppPagesConnectFieldInput>>
}

export type AppConnectOrCreateInput = {
  owner?: InputMaybe<Array<AppOwnerConnectOrCreateFieldInput>>
  pages?: InputMaybe<Array<AppPagesConnectOrCreateFieldInput>>
}

export type AppConnectOrCreateWhere = {
  node: AppUniqueWhere
}

export type AppConnectWhere = {
  node: AppWhere
}

export type AppCreateInput = {
  name: Scalars['String']
  owner?: InputMaybe<AppOwnerFieldInput>
  pages?: InputMaybe<AppPagesFieldInput>
}

export type AppDeleteInput = {
  owner?: InputMaybe<Array<AppOwnerDeleteFieldInput>>
  pages?: InputMaybe<Array<AppPagesDeleteFieldInput>>
}

export type AppDisconnectInput = {
  owner?: InputMaybe<Array<AppOwnerDisconnectFieldInput>>
  pages?: InputMaybe<Array<AppPagesDisconnectFieldInput>>
}

export type AppOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more AppSort objects to sort Apps by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<AppSort>>>
}

export type AppOwnerAggregateInput = {
  AND?: InputMaybe<Array<AppOwnerAggregateInput>>
  OR?: InputMaybe<Array<AppOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<AppOwnerNodeAggregationWhereInput>
}

export type AppOwnerConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>
  where?: InputMaybe<UserConnectWhere>
}

export type AppOwnerConnectOrCreateFieldInput = {
  onCreate: AppOwnerConnectOrCreateFieldInputOnCreate
  where: UserConnectOrCreateWhere
}

export type AppOwnerConnectOrCreateFieldInputOnCreate = {
  node: UserCreateInput
}

export type AppOwnerConnection = {
  __typename?: 'AppOwnerConnection'
  edges: Array<AppOwnerRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type AppOwnerConnectionSort = {
  node?: InputMaybe<UserSort>
}

export type AppOwnerConnectionWhere = {
  AND?: InputMaybe<Array<AppOwnerConnectionWhere>>
  OR?: InputMaybe<Array<AppOwnerConnectionWhere>>
  node?: InputMaybe<UserWhere>
  node_NOT?: InputMaybe<UserWhere>
}

export type AppOwnerCreateFieldInput = {
  node: UserCreateInput
}

export type AppOwnerDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>
  where?: InputMaybe<AppOwnerConnectionWhere>
}

export type AppOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>
  where?: InputMaybe<AppOwnerConnectionWhere>
}

export type AppOwnerFieldInput = {
  connect?: InputMaybe<Array<AppOwnerConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<AppOwnerConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<AppOwnerCreateFieldInput>>
}

export type AppOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AppOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<AppOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type AppOwnerRelationship = {
  __typename?: 'AppOwnerRelationship'
  cursor: Scalars['String']
  node: User
}

export type AppOwnerUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>
}

export type AppOwnerUpdateFieldInput = {
  connect?: InputMaybe<Array<AppOwnerConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<AppOwnerConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<AppOwnerCreateFieldInput>>
  delete?: InputMaybe<Array<AppOwnerDeleteFieldInput>>
  disconnect?: InputMaybe<Array<AppOwnerDisconnectFieldInput>>
  update?: InputMaybe<AppOwnerUpdateConnectionInput>
  where?: InputMaybe<AppOwnerConnectionWhere>
}

export type AppPagePagesAggregationSelection = {
  __typename?: 'AppPagePagesAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<AppPagePagesNodeAggregateSelection>
}

export type AppPagePagesNodeAggregateSelection = {
  __typename?: 'AppPagePagesNodeAggregateSelection'
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type AppPagesAggregateInput = {
  AND?: InputMaybe<Array<AppPagesAggregateInput>>
  OR?: InputMaybe<Array<AppPagesAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<AppPagesNodeAggregationWhereInput>
}

export type AppPagesConnectFieldInput = {
  connect?: InputMaybe<Array<PageConnectInput>>
  where?: InputMaybe<PageConnectWhere>
}

export type AppPagesConnectOrCreateFieldInput = {
  onCreate: AppPagesConnectOrCreateFieldInputOnCreate
  where: PageConnectOrCreateWhere
}

export type AppPagesConnectOrCreateFieldInputOnCreate = {
  node: PageCreateInput
}

export type AppPagesConnection = {
  __typename?: 'AppPagesConnection'
  edges: Array<AppPagesRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type AppPagesConnectionSort = {
  node?: InputMaybe<PageSort>
}

export type AppPagesConnectionWhere = {
  AND?: InputMaybe<Array<AppPagesConnectionWhere>>
  OR?: InputMaybe<Array<AppPagesConnectionWhere>>
  node?: InputMaybe<PageWhere>
  node_NOT?: InputMaybe<PageWhere>
}

export type AppPagesCreateFieldInput = {
  node: PageCreateInput
}

export type AppPagesDeleteFieldInput = {
  delete?: InputMaybe<PageDeleteInput>
  where?: InputMaybe<AppPagesConnectionWhere>
}

export type AppPagesDisconnectFieldInput = {
  disconnect?: InputMaybe<PageDisconnectInput>
  where?: InputMaybe<AppPagesConnectionWhere>
}

export type AppPagesFieldInput = {
  connect?: InputMaybe<Array<AppPagesConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<AppPagesConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<AppPagesCreateFieldInput>>
}

export type AppPagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AppPagesNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<AppPagesNodeAggregationWhereInput>>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type AppPagesRelationship = {
  __typename?: 'AppPagesRelationship'
  cursor: Scalars['String']
  node: Page
}

export type AppPagesUpdateConnectionInput = {
  node?: InputMaybe<PageUpdateInput>
}

export type AppPagesUpdateFieldInput = {
  connect?: InputMaybe<Array<AppPagesConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<AppPagesConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<AppPagesCreateFieldInput>>
  delete?: InputMaybe<Array<AppPagesDeleteFieldInput>>
  disconnect?: InputMaybe<Array<AppPagesDisconnectFieldInput>>
  update?: InputMaybe<AppPagesUpdateConnectionInput>
  where?: InputMaybe<AppPagesConnectionWhere>
}

export type AppRelationInput = {
  owner?: InputMaybe<Array<AppOwnerCreateFieldInput>>
  pages?: InputMaybe<Array<AppPagesCreateFieldInput>>
}

/** Fields to sort Apps by. The order in which sorts are applied is not guaranteed when specifying many fields in one AppSort object. */
export type AppSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

/** Allows picking a app from the list of apps */
export type AppType = TypeBase & {
  __typename?: 'AppType'
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<AppTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
}

/** Allows picking a app from the list of apps */
export type AppTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a app from the list of apps */
export type AppTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/** Allows picking a app from the list of apps */
export type AppTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type AppTypeAggregateSelection = {
  __typename?: 'AppTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type AppTypeConnectInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type AppTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type AppTypeCreateInput = {
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
}

export type AppTypeDeleteInput = {
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type AppTypeDisconnectInput = {
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export type AppTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more AppTypeSort objects to sort AppTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<AppTypeSort>>>
}

export type AppTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<AppTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<AppTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<AppTypeOwnerNodeAggregationWhereInput>
}

export type AppTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AppTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<AppTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type AppTypeRelationInput = {
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort AppTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one AppTypeSort object. */
export type AppTypeSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type AppTypeUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type AppTypeUserOwnerAggregationSelection = {
  __typename?: 'AppTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<AppTypeUserOwnerNodeAggregateSelection>
}

export type AppTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'AppTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type AppTypeWhere = {
  AND?: InputMaybe<Array<AppTypeWhere>>
  OR?: InputMaybe<Array<AppTypeWhere>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<AppTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type AppUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>
}

export type AppUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<Array<AppOwnerUpdateFieldInput>>
  pages?: InputMaybe<Array<AppPagesUpdateFieldInput>>
}

export type AppUserOwnerAggregationSelection = {
  __typename?: 'AppUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<AppUserOwnerNodeAggregateSelection>
}

export type AppUserOwnerNodeAggregateSelection = {
  __typename?: 'AppUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type AppWhere = {
  AND?: InputMaybe<Array<AppWhere>>
  OR?: InputMaybe<Array<AppWhere>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<AppOwnerAggregateInput>
  ownerConnection?: InputMaybe<AppOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<AppOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
  pages?: InputMaybe<PageWhere>
  pagesAggregate?: InputMaybe<AppPagesAggregateInput>
  pagesConnection?: InputMaybe<AppPagesConnectionWhere>
  pagesConnection_NOT?: InputMaybe<AppPagesConnectionWhere>
  pages_NOT?: InputMaybe<PageWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayType = TypeBase & {
  __typename?: 'ArrayType'
  graph: TypeGraph
  id: Scalars['ID']
  itemType?: Maybe<Array<TypeBase>>
  itemTypeConnection: ArrayTypeItemTypeConnection
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<ArrayTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeItemTypeArgs = {
  options?: InputMaybe<QueryOptions>
  where?: InputMaybe<TypeBaseWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeItemTypeConnectionArgs = {
  where?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type ArrayTypeAggregateSelection = {
  __typename?: 'ArrayTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type ArrayTypeConnectInput = {
  itemType?: InputMaybe<Array<ArrayTypeItemTypeConnectFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type ArrayTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type ArrayTypeCreateInput = {
  itemType?: InputMaybe<ArrayTypeItemTypeFieldInput>
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
}

export type ArrayTypeDeleteInput = {
  itemType?: InputMaybe<Array<ArrayTypeItemTypeDeleteFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type ArrayTypeDisconnectInput = {
  itemType?: InputMaybe<Array<ArrayTypeItemTypeDisconnectFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export type ArrayTypeItemTypeConnectFieldInput = {
  connect?: InputMaybe<TypeBaseConnectInput>
  where?: InputMaybe<TypeBaseConnectWhere>
}

export type ArrayTypeItemTypeConnection = {
  __typename?: 'ArrayTypeItemTypeConnection'
  edges: Array<ArrayTypeItemTypeRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ArrayTypeItemTypeConnectionWhere = {
  AND?: InputMaybe<Array<ArrayTypeItemTypeConnectionWhere>>
  OR?: InputMaybe<Array<ArrayTypeItemTypeConnectionWhere>>
  node?: InputMaybe<TypeBaseWhere>
  node_NOT?: InputMaybe<TypeBaseWhere>
}

export type ArrayTypeItemTypeCreateFieldInput = {
  node: TypeBaseCreateInput
}

export type ArrayTypeItemTypeDeleteFieldInput = {
  delete?: InputMaybe<TypeBaseDeleteInput>
  where?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
}

export type ArrayTypeItemTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeBaseDisconnectInput>
  where?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
}

export type ArrayTypeItemTypeFieldInput = {
  connect?: InputMaybe<Array<ArrayTypeItemTypeConnectFieldInput>>
  create?: InputMaybe<Array<ArrayTypeItemTypeCreateFieldInput>>
}

export type ArrayTypeItemTypeRelationship = {
  __typename?: 'ArrayTypeItemTypeRelationship'
  cursor: Scalars['String']
  node: TypeBase
}

export type ArrayTypeItemTypeUpdateConnectionInput = {
  node?: InputMaybe<TypeBaseUpdateInput>
}

export type ArrayTypeItemTypeUpdateFieldInput = {
  connect?: InputMaybe<Array<ArrayTypeItemTypeConnectFieldInput>>
  create?: InputMaybe<Array<ArrayTypeItemTypeCreateFieldInput>>
  delete?: InputMaybe<Array<ArrayTypeItemTypeDeleteFieldInput>>
  disconnect?: InputMaybe<Array<ArrayTypeItemTypeDisconnectFieldInput>>
  update?: InputMaybe<ArrayTypeItemTypeUpdateConnectionInput>
  where?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
}

export type ArrayTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more ArrayTypeSort objects to sort ArrayTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<ArrayTypeSort>>>
}

export type ArrayTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<ArrayTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<ArrayTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<ArrayTypeOwnerNodeAggregationWhereInput>
}

export type ArrayTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArrayTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<ArrayTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type ArrayTypeRelationInput = {
  itemType?: InputMaybe<Array<ArrayTypeItemTypeCreateFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort ArrayTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ArrayTypeSort object. */
export type ArrayTypeSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type ArrayTypeUpdateInput = {
  itemType?: InputMaybe<Array<ArrayTypeItemTypeUpdateFieldInput>>
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type ArrayTypeUserOwnerAggregationSelection = {
  __typename?: 'ArrayTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<ArrayTypeUserOwnerNodeAggregateSelection>
}

export type ArrayTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'ArrayTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type ArrayTypeWhere = {
  AND?: InputMaybe<Array<ArrayTypeWhere>>
  OR?: InputMaybe<Array<ArrayTypeWhere>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  itemTypeConnection?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
  itemTypeConnection_NOT?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<ArrayTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type Atom = {
  __typename?: 'Atom'
  api: InterfaceType
  apiAggregate?: Maybe<AtomInterfaceTypeApiAggregationSelection>
  apiConnection: AtomApiConnection
  id: Scalars['ID']
  name: Scalars['String']
  tags?: Maybe<Array<Scalars['String']>>
  type: AtomType
}

export type AtomApiArgs = {
  options?: InputMaybe<InterfaceTypeOptions>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type AtomApiAggregateArgs = {
  where?: InputMaybe<InterfaceTypeWhere>
}

export type AtomApiConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<AtomApiConnectionSort>>
  where?: InputMaybe<AtomApiConnectionWhere>
}

export type AtomAggregateSelection = {
  __typename?: 'AtomAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type AtomApiAggregateInput = {
  AND?: InputMaybe<Array<AtomApiAggregateInput>>
  OR?: InputMaybe<Array<AtomApiAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<AtomApiNodeAggregationWhereInput>
}

export type AtomApiConnectFieldInput = {
  connect?: InputMaybe<InterfaceTypeConnectInput>
  where?: InputMaybe<InterfaceTypeConnectWhere>
}

export type AtomApiConnectOrCreateFieldInput = {
  onCreate: AtomApiConnectOrCreateFieldInputOnCreate
  where: InterfaceTypeConnectOrCreateWhere
}

export type AtomApiConnectOrCreateFieldInputOnCreate = {
  node: InterfaceTypeCreateInput
}

export type AtomApiConnection = {
  __typename?: 'AtomApiConnection'
  edges: Array<AtomApiRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type AtomApiConnectionSort = {
  node?: InputMaybe<InterfaceTypeSort>
}

export type AtomApiConnectionWhere = {
  AND?: InputMaybe<Array<AtomApiConnectionWhere>>
  OR?: InputMaybe<Array<AtomApiConnectionWhere>>
  node?: InputMaybe<InterfaceTypeWhere>
  node_NOT?: InputMaybe<InterfaceTypeWhere>
}

export type AtomApiCreateFieldInput = {
  node: InterfaceTypeCreateInput
}

export type AtomApiDeleteFieldInput = {
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  where?: InputMaybe<AtomApiConnectionWhere>
}

export type AtomApiDisconnectFieldInput = {
  disconnect?: InputMaybe<InterfaceTypeDisconnectInput>
  where?: InputMaybe<AtomApiConnectionWhere>
}

export type AtomApiFieldInput = {
  connect?: InputMaybe<AtomApiConnectFieldInput>
  connectOrCreate?: InputMaybe<AtomApiConnectOrCreateFieldInput>
  create?: InputMaybe<AtomApiCreateFieldInput>
}

export type AtomApiNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AtomApiNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<AtomApiNodeAggregationWhereInput>>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type AtomApiRelationship = {
  __typename?: 'AtomApiRelationship'
  cursor: Scalars['String']
  node: InterfaceType
}

export type AtomApiUpdateConnectionInput = {
  node?: InputMaybe<InterfaceTypeUpdateInput>
}

export type AtomApiUpdateFieldInput = {
  connect?: InputMaybe<AtomApiConnectFieldInput>
  connectOrCreate?: InputMaybe<AtomApiConnectOrCreateFieldInput>
  create?: InputMaybe<AtomApiCreateFieldInput>
  delete?: InputMaybe<AtomApiDeleteFieldInput>
  disconnect?: InputMaybe<AtomApiDisconnectFieldInput>
  update?: InputMaybe<AtomApiUpdateConnectionInput>
  where?: InputMaybe<AtomApiConnectionWhere>
}

export type AtomConnectInput = {
  api?: InputMaybe<AtomApiConnectFieldInput>
}

export type AtomConnectOrCreateInput = {
  api?: InputMaybe<AtomApiConnectOrCreateFieldInput>
}

export type AtomConnectOrCreateWhere = {
  node: AtomUniqueWhere
}

export type AtomConnectWhere = {
  node: AtomWhere
}

export type AtomCreateInput = {
  api?: InputMaybe<AtomApiFieldInput>
  name: Scalars['String']
  tags?: InputMaybe<Array<Scalars['String']>>
  type: AtomType
}

export type AtomDeleteInput = {
  api?: InputMaybe<AtomApiDeleteFieldInput>
}

export type AtomDisconnectInput = {
  api?: InputMaybe<AtomApiDisconnectFieldInput>
}

export type AtomInterfaceTypeApiAggregationSelection = {
  __typename?: 'AtomInterfaceTypeApiAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<AtomInterfaceTypeApiNodeAggregateSelection>
}

export type AtomInterfaceTypeApiNodeAggregateSelection = {
  __typename?: 'AtomInterfaceTypeApiNodeAggregateSelection'
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type AtomOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more AtomSort objects to sort Atoms by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<AtomSort>>>
}

export type AtomRelationInput = {
  api?: InputMaybe<AtomApiCreateFieldInput>
}

/** Fields to sort Atoms by. The order in which sorts are applied is not guaranteed when specifying many fields in one AtomSort object. */
export type AtomSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  type?: InputMaybe<SortDirection>
}

export enum AtomType {
  AntDesignAffix = 'AntDesignAffix',
  AntDesignAlert = 'AntDesignAlert',
  AntDesignAnchor = 'AntDesignAnchor',
  AntDesignAnchorLink = 'AntDesignAnchorLink',
  AntDesignAutoComplete = 'AntDesignAutoComplete',
  AntDesignAvatar = 'AntDesignAvatar',
  AntDesignBackTop = 'AntDesignBackTop',
  AntDesignBadge = 'AntDesignBadge',
  AntDesignBreadcrumb = 'AntDesignBreadcrumb',
  AntDesignBreadcrumbItem = 'AntDesignBreadcrumbItem',
  AntDesignButton = 'AntDesignButton',
  AntDesignCalendar = 'AntDesignCalendar',
  AntDesignCard = 'AntDesignCard',
  AntDesignCardGrid = 'AntDesignCardGrid',
  AntDesignCardMeta = 'AntDesignCardMeta',
  AntDesignCarousel = 'AntDesignCarousel',
  AntDesignCascader = 'AntDesignCascader',
  AntDesignCheckbox = 'AntDesignCheckbox',
  AntDesignCollapse = 'AntDesignCollapse',
  AntDesignCollapsePanel = 'AntDesignCollapsePanel',
  AntDesignComment = 'AntDesignComment',
  AntDesignConfigProvider = 'AntDesignConfigProvider',
  AntDesignDatePicker = 'AntDesignDatePicker',
  AntDesignDescriptions = 'AntDesignDescriptions',
  AntDesignDescriptionsItem = 'AntDesignDescriptionsItem',
  AntDesignDivider = 'AntDesignDivider',
  AntDesignDrawer = 'AntDesignDrawer',
  AntDesignDropdown = 'AntDesignDropdown',
  AntDesignEmpty = 'AntDesignEmpty',
  AntDesignForm = 'AntDesignForm',
  AntDesignFormItem = 'AntDesignFormItem',
  AntDesignFormItemHook = 'AntDesignFormItemHook',
  AntDesignFormList = 'AntDesignFormList',
  AntDesignGridCol = 'AntDesignGridCol',
  AntDesignGridRow = 'AntDesignGridRow',
  AntDesignIcon = 'AntDesignIcon',
  AntDesignImage = 'AntDesignImage',
  AntDesignInput = 'AntDesignInput',
  AntDesignInputNumber = 'AntDesignInputNumber',
  AntDesignLayout = 'AntDesignLayout',
  AntDesignLayoutContent = 'AntDesignLayoutContent',
  AntDesignLayoutFooter = 'AntDesignLayoutFooter',
  AntDesignLayoutHeader = 'AntDesignLayoutHeader',
  AntDesignLayoutSider = 'AntDesignLayoutSider',
  AntDesignList = 'AntDesignList',
  AntDesignListItem = 'AntDesignListItem',
  AntDesignListItemMeta = 'AntDesignListItemMeta',
  AntDesignMapper = 'AntDesignMapper',
  AntDesignMentions = 'AntDesignMentions',
  AntDesignMentionsOption = 'AntDesignMentionsOption',
  AntDesignMenu = 'AntDesignMenu',
  AntDesignMenuItem = 'AntDesignMenuItem',
  AntDesignMenuItemGroup = 'AntDesignMenuItemGroup',
  AntDesignMenuSubMenu = 'AntDesignMenuSubMenu',
  AntDesignModal = 'AntDesignModal',
  AntDesignPageContainer = 'AntDesignPageContainer',
  AntDesignPageHeader = 'AntDesignPageHeader',
  AntDesignPagination = 'AntDesignPagination',
  AntDesignPopconfirm = 'AntDesignPopconfirm',
  AntDesignPopover = 'AntDesignPopover',
  AntDesignProgress = 'AntDesignProgress',
  AntDesignProvider = 'AntDesignProvider',
  AntDesignRadio = 'AntDesignRadio',
  AntDesignRadioGroup = 'AntDesignRadioGroup',
  AntDesignRate = 'AntDesignRate',
  AntDesignRenderComponent = 'AntDesignRenderComponent',
  AntDesignRenderContainer = 'AntDesignRenderContainer',
  AntDesignResult = 'AntDesignResult',
  AntDesignRglContainer = 'AntDesignRglContainer',
  AntDesignRglItem = 'AntDesignRglItem',
  AntDesignRglResponsiveContainer = 'AntDesignRglResponsiveContainer',
  AntDesignSelect = 'AntDesignSelect',
  AntDesignSelectOption = 'AntDesignSelectOption',
  AntDesignSkeleton = 'AntDesignSkeleton',
  AntDesignSlider = 'AntDesignSlider',
  AntDesignSpace = 'AntDesignSpace',
  AntDesignSpin = 'AntDesignSpin',
  AntDesignStatistic = 'AntDesignStatistic',
  AntDesignSteps = 'AntDesignSteps',
  AntDesignStepsStep = 'AntDesignStepsStep',
  AntDesignSwitch = 'AntDesignSwitch',
  AntDesignTable = 'AntDesignTable',
  AntDesignTabs = 'AntDesignTabs',
  AntDesignTabsTabPane = 'AntDesignTabsTabPane',
  AntDesignTag = 'AntDesignTag',
  AntDesignTimePicker = 'AntDesignTimePicker',
  AntDesignTimeline = 'AntDesignTimeline',
  AntDesignTimelineItem = 'AntDesignTimelineItem',
  AntDesignTooltip = 'AntDesignTooltip',
  AntDesignTransfer = 'AntDesignTransfer',
  AntDesignTree = 'AntDesignTree',
  AntDesignTreeNode = 'AntDesignTreeNode',
  AntDesignTreeSelect = 'AntDesignTreeSelect',
  AntDesignTypography = 'AntDesignTypography',
  AntDesignTypographyParagraph = 'AntDesignTypographyParagraph',
  AntDesignTypographyText = 'AntDesignTypographyText',
  AntDesignTypographyTitle = 'AntDesignTypographyTitle',
  AntDesignUpload = 'AntDesignUpload',
  HookGraphqlMutation = 'HookGraphqlMutation',
  HookGraphqlQuery = 'HookGraphqlQuery',
  HookQueryConfig = 'HookQueryConfig',
  HookQueryLambda = 'HookQueryLambda',
  HookQueryPage = 'HookQueryPage',
  HookQueryPages = 'HookQueryPages',
  HookRecoilState = 'HookRecoilState',
  HookRouter = 'HookRouter',
  HtmlA = 'HtmlA',
  HtmlArea = 'HtmlArea',
  HtmlAside = 'HtmlAside',
  HtmlAudio = 'HtmlAudio',
  HtmlBase = 'HtmlBase',
  HtmlBr = 'HtmlBr',
  HtmlButton = 'HtmlButton',
  HtmlCanvas = 'HtmlCanvas',
  HtmlCode = 'HtmlCode',
  HtmlDList = 'HtmlDList',
  HtmlData = 'HtmlData',
  HtmlDatalist = 'HtmlDatalist',
  HtmlDetails = 'HtmlDetails',
  HtmlDialog = 'HtmlDialog',
  HtmlDiv = 'HtmlDiv',
  HtmlEm = 'HtmlEm',
  HtmlEmbed = 'HtmlEmbed',
  HtmlFieldset = 'HtmlFieldset',
  HtmlFont = 'HtmlFont',
  HtmlFooter = 'HtmlFooter',
  HtmlForm = 'HtmlForm',
  HtmlFrame = 'HtmlFrame',
  HtmlFrameset = 'HtmlFrameset',
  HtmlH1 = 'HtmlH1',
  HtmlH2 = 'HtmlH2',
  HtmlH3 = 'HtmlH3',
  HtmlH4 = 'HtmlH4',
  HtmlH5 = 'HtmlH5',
  HtmlH6 = 'HtmlH6',
  HtmlHead = 'HtmlHead',
  HtmlHeader = 'HtmlHeader',
  HtmlHr = 'HtmlHr',
  HtmlI = 'HtmlI',
  HtmlIframe = 'HtmlIframe',
  HtmlImage = 'HtmlImage',
  HtmlInput = 'HtmlInput',
  HtmlLabel = 'HtmlLabel',
  HtmlLegend = 'HtmlLegend',
  HtmlLi = 'HtmlLi',
  HtmlLink = 'HtmlLink',
  HtmlMain = 'HtmlMain',
  HtmlMap = 'HtmlMap',
  HtmlMeta = 'HtmlMeta',
  HtmlMeter = 'HtmlMeter',
  HtmlNav = 'HtmlNav',
  HtmlOList = 'HtmlOList',
  HtmlObject = 'HtmlObject',
  HtmlOptgroup = 'HtmlOptgroup',
  HtmlOption = 'HtmlOption',
  HtmlOutput = 'HtmlOutput',
  HtmlP = 'HtmlP',
  HtmlParam = 'HtmlParam',
  HtmlPicture = 'HtmlPicture',
  HtmlPre = 'HtmlPre',
  HtmlProgress = 'HtmlProgress',
  HtmlQuote = 'HtmlQuote',
  HtmlS = 'HtmlS',
  HtmlSection = 'HtmlSection',
  HtmlSelect = 'HtmlSelect',
  HtmlSmall = 'HtmlSmall',
  HtmlSource = 'HtmlSource',
  HtmlSpan = 'HtmlSpan',
  HtmlStrong = 'HtmlStrong',
  HtmlStyle = 'HtmlStyle',
  HtmlSub = 'HtmlSub',
  HtmlSup = 'HtmlSup',
  HtmlTable = 'HtmlTable',
  HtmlTableCaption = 'HtmlTableCaption',
  HtmlTableCell = 'HtmlTableCell',
  HtmlTableCol = 'HtmlTableCol',
  HtmlTableRow = 'HtmlTableRow',
  HtmlTemplate = 'HtmlTemplate',
  HtmlTextarea = 'HtmlTextarea',
  HtmlTime = 'HtmlTime',
  HtmlTitle = 'HtmlTitle',
  HtmlTrack = 'HtmlTrack',
  HtmlUList = 'HtmlUList',
  HtmlVideo = 'HtmlVideo',
  MuiAccordion = 'MuiAccordion',
  MuiAccordionActions = 'MuiAccordionActions',
  MuiAccordionDetails = 'MuiAccordionDetails',
  MuiAccordionSummary = 'MuiAccordionSummary',
  MuiAlert = 'MuiAlert',
  MuiAlertTitle = 'MuiAlertTitle',
  MuiAppBar = 'MuiAppBar',
  MuiAutocomplete = 'MuiAutocomplete',
  MuiAvatar = 'MuiAvatar',
  MuiAvatarGroup = 'MuiAvatarGroup',
  MuiBackdrop = 'MuiBackdrop',
  MuiBackdropUnstyled = 'MuiBackdropUnstyled',
  MuiBadge = 'MuiBadge',
  MuiBadgeUnstyled = 'MuiBadgeUnstyled',
  MuiBottomNavigation = 'MuiBottomNavigation',
  MuiBottomNavigationAction = 'MuiBottomNavigationAction',
  MuiBox = 'MuiBox',
  MuiBreadcrumbs = 'MuiBreadcrumbs',
  MuiButton = 'MuiButton',
  MuiButtonBase = 'MuiButtonBase',
  MuiButtonGroup = 'MuiButtonGroup',
  MuiButtonUnstyled = 'MuiButtonUnstyled',
  MuiCalendarPicker = 'MuiCalendarPicker',
  MuiCalendarPickerSkeleton = 'MuiCalendarPickerSkeleton',
  MuiCard = 'MuiCard',
  MuiCardActionArea = 'MuiCardActionArea',
  MuiCardActions = 'MuiCardActions',
  MuiCardContent = 'MuiCardContent',
  MuiCardHeader = 'MuiCardHeader',
  MuiCardMedia = 'MuiCardMedia',
  MuiCheckbox = 'MuiCheckbox',
  MuiChip = 'MuiChip',
  MuiCircularProgress = 'MuiCircularProgress',
  MuiClickAwayListener = 'MuiClickAwayListener',
  MuiClockPicker = 'MuiClockPicker',
  MuiCollapse = 'MuiCollapse',
  MuiContainer = 'MuiContainer',
  MuiCssBaseline = 'MuiCssBaseline',
  MuiDataGrid = 'MuiDataGrid',
  MuiDatePicker = 'MuiDatePicker',
  MuiDateRangePicker = 'MuiDateRangePicker',
  MuiDateRangePickerDay = 'MuiDateRangePickerDay',
  MuiDateTimePicker = 'MuiDateTimePicker',
  MuiDesktopDatePicker = 'MuiDesktopDatePicker',
  MuiDesktopDateRangePicker = 'MuiDesktopDateRangePicker',
  MuiDesktopDateTimePicker = 'MuiDesktopDateTimePicker',
  MuiDesktopTimePicker = 'MuiDesktopTimePicker',
  MuiDialog = 'MuiDialog',
  MuiDialogActions = 'MuiDialogActions',
  MuiDialogContent = 'MuiDialogContent',
  MuiDialogContentText = 'MuiDialogContentText',
  MuiDialogTitle = 'MuiDialogTitle',
  MuiDivider = 'MuiDivider',
  MuiDrawer = 'MuiDrawer',
  MuiFab = 'MuiFab',
  MuiFade = 'MuiFade',
  MuiFilledInput = 'MuiFilledInput',
  MuiFormControl = 'MuiFormControl',
  MuiFormControlLabel = 'MuiFormControlLabel',
  MuiFormControlUnstyled = 'MuiFormControlUnstyled',
  MuiFormGroup = 'MuiFormGroup',
  MuiFormHelperText = 'MuiFormHelperText',
  MuiFormLabel = 'MuiFormLabel',
  MuiGlobalStyles = 'MuiGlobalStyles',
  MuiGrid = 'MuiGrid',
  MuiGridColDef = 'MuiGridColDef',
  MuiGrow = 'MuiGrow',
  MuiHidden = 'MuiHidden',
  MuiIcon = 'MuiIcon',
  MuiIconButton = 'MuiIconButton',
  MuiImageList = 'MuiImageList',
  MuiImageListItem = 'MuiImageListItem',
  MuiImageListItemBar = 'MuiImageListItemBar',
  MuiInput = 'MuiInput',
  MuiInputAdornment = 'MuiInputAdornment',
  MuiInputBase = 'MuiInputBase',
  MuiInputLabel = 'MuiInputLabel',
  MuiLinearProgress = 'MuiLinearProgress',
  MuiLink = 'MuiLink',
  MuiList = 'MuiList',
  MuiListItem = 'MuiListItem',
  MuiListItemAvatar = 'MuiListItemAvatar',
  MuiListItemButton = 'MuiListItemButton',
  MuiListItemIcon = 'MuiListItemIcon',
  MuiListItemSecondaryAction = 'MuiListItemSecondaryAction',
  MuiListItemText = 'MuiListItemText',
  MuiListSubheader = 'MuiListSubheader',
  MuiLoadingButton = 'MuiLoadingButton',
  MuiMasonry = 'MuiMasonry',
  MuiMasonryItem = 'MuiMasonryItem',
  MuiMenu = 'MuiMenu',
  MuiMenuItem = 'MuiMenuItem',
  MuiMenuList = 'MuiMenuList',
  MuiMobileDatePicker = 'MuiMobileDatePicker',
  MuiMobileDateRangePicker = 'MuiMobileDateRangePicker',
  MuiMobileDateTimePicker = 'MuiMobileDateTimePicker',
  MuiMobileStepper = 'MuiMobileStepper',
  MuiMobileTimePicker = 'MuiMobileTimePicker',
  MuiModal = 'MuiModal',
  MuiModalUnstyled = 'MuiModalUnstyled',
  MuiMonthPicker = 'MuiMonthPicker',
  MuiNativeSelect = 'MuiNativeSelect',
  MuiNoSsr = 'MuiNoSsr',
  MuiOutlinedInput = 'MuiOutlinedInput',
  MuiPagination = 'MuiPagination',
  MuiPaginationItem = 'MuiPaginationItem',
  MuiPaper = 'MuiPaper',
  MuiPickersDay = 'MuiPickersDay',
  MuiPopover = 'MuiPopover',
  MuiPopper = 'MuiPopper',
  MuiPortal = 'MuiPortal',
  MuiRadio = 'MuiRadio',
  MuiRadioGroup = 'MuiRadioGroup',
  MuiRating = 'MuiRating',
  MuiScopedCssBaseline = 'MuiScopedCssBaseline',
  MuiSelect = 'MuiSelect',
  MuiSkeleton = 'MuiSkeleton',
  MuiSlide = 'MuiSlide',
  MuiSlider = 'MuiSlider',
  MuiSliderUnstyled = 'MuiSliderUnstyled',
  MuiSnackbar = 'MuiSnackbar',
  MuiSnackbarContent = 'MuiSnackbarContent',
  MuiSpeedDial = 'MuiSpeedDial',
  MuiSpeedDialAction = 'MuiSpeedDialAction',
  MuiSpeedDialIcon = 'MuiSpeedDialIcon',
  MuiStack = 'MuiStack',
  MuiStaticDatePicker = 'MuiStaticDatePicker',
  MuiStaticDateRangePicker = 'MuiStaticDateRangePicker',
  MuiStaticDateTimePicker = 'MuiStaticDateTimePicker',
  MuiStaticTimePicker = 'MuiStaticTimePicker',
  MuiStep = 'MuiStep',
  MuiStepButton = 'MuiStepButton',
  MuiStepConnector = 'MuiStepConnector',
  MuiStepContent = 'MuiStepContent',
  MuiStepIcon = 'MuiStepIcon',
  MuiStepLabel = 'MuiStepLabel',
  MuiStepper = 'MuiStepper',
  MuiSvgIcon = 'MuiSvgIcon',
  MuiSwipeableDrawer = 'MuiSwipeableDrawer',
  MuiSwitch = 'MuiSwitch',
  MuiSwitchUnstyled = 'MuiSwitchUnstyled',
  MuiTab = 'MuiTab',
  MuiTabContext = 'MuiTabContext',
  MuiTabList = 'MuiTabList',
  MuiTabPanel = 'MuiTabPanel',
  MuiTabScrollButton = 'MuiTabScrollButton',
  MuiTable = 'MuiTable',
  MuiTableBody = 'MuiTableBody',
  MuiTableCell = 'MuiTableCell',
  MuiTableContainer = 'MuiTableContainer',
  MuiTableFooter = 'MuiTableFooter',
  MuiTableHead = 'MuiTableHead',
  MuiTablePagination = 'MuiTablePagination',
  MuiTableRow = 'MuiTableRow',
  MuiTableSortLabel = 'MuiTableSortLabel',
  MuiTabs = 'MuiTabs',
  MuiTextField = 'MuiTextField',
  MuiTextareaAutosize = 'MuiTextareaAutosize',
  MuiTimePicker = 'MuiTimePicker',
  MuiTimeline = 'MuiTimeline',
  MuiTimelineConnector = 'MuiTimelineConnector',
  MuiTimelineContent = 'MuiTimelineContent',
  MuiTimelineDot = 'MuiTimelineDot',
  MuiTimelineItem = 'MuiTimelineItem',
  MuiTimelineOppositeContent = 'MuiTimelineOppositeContent',
  MuiTimelineSeparator = 'MuiTimelineSeparator',
  MuiToggleButton = 'MuiToggleButton',
  MuiToggleButtonGroup = 'MuiToggleButtonGroup',
  MuiToolbar = 'MuiToolbar',
  MuiTooltip = 'MuiTooltip',
  MuiTreeItem = 'MuiTreeItem',
  MuiTreeView = 'MuiTreeView',
  MuiTypography = 'MuiTypography',
  MuiUnstableTrapFocus = 'MuiUnstableTrapFocus',
  MuiYearPicker = 'MuiYearPicker',
  MuiZoom = 'MuiZoom',
  Query = 'Query',
  ReactFragment = 'ReactFragment',
  State = 'State',
  Text = 'Text',
  TextList = 'TextList',
}

export type AtomUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
}

export type AtomUpdateInput = {
  api?: InputMaybe<AtomApiUpdateFieldInput>
  name?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Array<Scalars['String']>>
  type?: InputMaybe<AtomType>
}

export type AtomWhere = {
  AND?: InputMaybe<Array<AtomWhere>>
  OR?: InputMaybe<Array<AtomWhere>>
  api?: InputMaybe<InterfaceTypeWhere>
  apiAggregate?: InputMaybe<AtomApiAggregateInput>
  apiConnection?: InputMaybe<AtomApiConnectionWhere>
  apiConnection_NOT?: InputMaybe<AtomApiConnectionWhere>
  api_NOT?: InputMaybe<InterfaceTypeWhere>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Array<Scalars['String']>>
  tags_INCLUDES?: InputMaybe<Scalars['String']>
  tags_NOT?: InputMaybe<Array<Scalars['String']>>
  tags_NOT_INCLUDES?: InputMaybe<Scalars['String']>
  type?: InputMaybe<AtomType>
  type_IN?: InputMaybe<Array<InputMaybe<AtomType>>>
  type_NOT?: InputMaybe<AtomType>
  type_NOT_IN?: InputMaybe<Array<InputMaybe<AtomType>>>
}

export type CreateAppTypesMutationResponse = {
  __typename?: 'CreateAppTypesMutationResponse'
  appTypes: Array<AppType>
  info: CreateInfo
}

export type CreateAppsMutationResponse = {
  __typename?: 'CreateAppsMutationResponse'
  apps: Array<App>
  info: CreateInfo
}

export type CreateArrayTypesMutationResponse = {
  __typename?: 'CreateArrayTypesMutationResponse'
  arrayTypes: Array<ArrayType>
  info: CreateInfo
}

export type CreateAtomsMutationResponse = {
  __typename?: 'CreateAtomsMutationResponse'
  atoms: Array<Atom>
  info: CreateInfo
}

export type CreateCreateInfosMutationResponse = {
  __typename?: 'CreateCreateInfosMutationResponse'
  createInfos: Array<CreateInfo>
  info: CreateInfo
}

export type CreateDeleteFieldResponsesMutationResponse = {
  __typename?: 'CreateDeleteFieldResponsesMutationResponse'
  deleteFieldResponses: Array<DeleteFieldResponse>
  info: CreateInfo
}

export type CreateEdgesMutationResponse = {
  __typename?: 'CreateEdgesMutationResponse'
  edges: Array<Edge>
  info: CreateInfo
}

export type CreateElementTypesMutationResponse = {
  __typename?: 'CreateElementTypesMutationResponse'
  elementTypes: Array<ElementType>
  info: CreateInfo
}

export type CreateElementsMutationResponse = {
  __typename?: 'CreateElementsMutationResponse'
  elements: Array<Element>
  info: CreateInfo
}

export type CreateEnumTypeValuesMutationResponse = {
  __typename?: 'CreateEnumTypeValuesMutationResponse'
  enumTypeValues: Array<EnumTypeValue>
  info: CreateInfo
}

export type CreateEnumTypesMutationResponse = {
  __typename?: 'CreateEnumTypesMutationResponse'
  enumTypes: Array<EnumType>
  info: CreateInfo
}

export type CreateImportAtomsMutationResponsesMutationResponse = {
  __typename?: 'CreateImportAtomsMutationResponsesMutationResponse'
  importAtomsMutationResponses: Array<ImportAtomsMutationResponse>
  info: CreateInfo
}

export type CreateInfo = {
  __typename?: 'CreateInfo'
  bookmark?: Maybe<Scalars['String']>
  nodesCreated: Scalars['Int']
  relationshipsCreated: Scalars['Int']
}

export type CreateInfoAggregateSelection = {
  __typename?: 'CreateInfoAggregateSelection'
  bookmark: StringAggregateSelection
  count: Scalars['Int']
  nodesCreated: IntAggregateSelection
  relationshipsCreated: IntAggregateSelection
}

export type CreateInfoCreateInput = {
  bookmark?: InputMaybe<Scalars['String']>
  nodesCreated: Scalars['Int']
  relationshipsCreated: Scalars['Int']
}

export type CreateInfoOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more CreateInfoSort objects to sort CreateInfos by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<CreateInfoSort>>>
}

/** Fields to sort CreateInfos by. The order in which sorts are applied is not guaranteed when specifying many fields in one CreateInfoSort object. */
export type CreateInfoSort = {
  bookmark?: InputMaybe<SortDirection>
  nodesCreated?: InputMaybe<SortDirection>
  relationshipsCreated?: InputMaybe<SortDirection>
}

export type CreateInfoUpdateInput = {
  bookmark?: InputMaybe<Scalars['String']>
  nodesCreated?: InputMaybe<Scalars['Int']>
  relationshipsCreated?: InputMaybe<Scalars['Int']>
}

export type CreateInfoWhere = {
  AND?: InputMaybe<Array<CreateInfoWhere>>
  OR?: InputMaybe<Array<CreateInfoWhere>>
  bookmark?: InputMaybe<Scalars['String']>
  bookmark_CONTAINS?: InputMaybe<Scalars['String']>
  bookmark_ENDS_WITH?: InputMaybe<Scalars['String']>
  bookmark_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  bookmark_NOT?: InputMaybe<Scalars['String']>
  bookmark_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  bookmark_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  bookmark_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  bookmark_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  bookmark_STARTS_WITH?: InputMaybe<Scalars['String']>
  nodesCreated?: InputMaybe<Scalars['Int']>
  nodesCreated_GT?: InputMaybe<Scalars['Int']>
  nodesCreated_GTE?: InputMaybe<Scalars['Int']>
  nodesCreated_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  nodesCreated_LT?: InputMaybe<Scalars['Int']>
  nodesCreated_LTE?: InputMaybe<Scalars['Int']>
  nodesCreated_NOT?: InputMaybe<Scalars['Int']>
  nodesCreated_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  relationshipsCreated?: InputMaybe<Scalars['Int']>
  relationshipsCreated_GT?: InputMaybe<Scalars['Int']>
  relationshipsCreated_GTE?: InputMaybe<Scalars['Int']>
  relationshipsCreated_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  relationshipsCreated_LT?: InputMaybe<Scalars['Int']>
  relationshipsCreated_LTE?: InputMaybe<Scalars['Int']>
  relationshipsCreated_NOT?: InputMaybe<Scalars['Int']>
  relationshipsCreated_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type CreateInterfaceTypesMutationResponse = {
  __typename?: 'CreateInterfaceTypesMutationResponse'
  info: CreateInfo
  interfaceTypes: Array<InterfaceType>
}

export type CreateLambdaTypesMutationResponse = {
  __typename?: 'CreateLambdaTypesMutationResponse'
  info: CreateInfo
  lambdaTypes: Array<LambdaType>
}

export type CreateMonacoTypesMutationResponse = {
  __typename?: 'CreateMonacoTypesMutationResponse'
  info: CreateInfo
  monacoTypes: Array<MonacoType>
}

export type CreatePageTypesMutationResponse = {
  __typename?: 'CreatePageTypesMutationResponse'
  info: CreateInfo
  pageTypes: Array<PageType>
}

export type CreatePagesMutationResponse = {
  __typename?: 'CreatePagesMutationResponse'
  info: CreateInfo
  pages: Array<Page>
}

export type CreatePrimitiveTypesMutationResponse = {
  __typename?: 'CreatePrimitiveTypesMutationResponse'
  info: CreateInfo
  primitiveTypes: Array<PrimitiveType>
}

export type CreateReactNodeTypesMutationResponse = {
  __typename?: 'CreateReactNodeTypesMutationResponse'
  info: CreateInfo
  reactNodeTypes: Array<ReactNodeType>
}

export type CreateRenderPropsTypesMutationResponse = {
  __typename?: 'CreateRenderPropsTypesMutationResponse'
  info: CreateInfo
  renderPropsTypes: Array<RenderPropsType>
}

export type CreateTagEdgesMutationResponse = {
  __typename?: 'CreateTagEdgesMutationResponse'
  info: CreateInfo
  tagEdges: Array<TagEdge>
}

export type CreateTagsMutationResponse = {
  __typename?: 'CreateTagsMutationResponse'
  info: CreateInfo
  tags: Array<Tag>
}

export type CreateTypeReferencesMutationResponse = {
  __typename?: 'CreateTypeReferencesMutationResponse'
  info: CreateInfo
  typeReferences: Array<TypeReference>
}

export type CreateUnionTypesMutationResponse = {
  __typename?: 'CreateUnionTypesMutationResponse'
  info: CreateInfo
  unionTypes: Array<UnionType>
}

export type DateTimeAggregateSelection = {
  __typename?: 'DateTimeAggregateSelection'
  max?: Maybe<Scalars['DateTime']>
  min?: Maybe<Scalars['DateTime']>
}

export type DeleteFieldInput = {
  interfaceId: Scalars['ID']
  key: Scalars['String']
}

export type DeleteFieldResponse = {
  __typename?: 'DeleteFieldResponse'
  deletedEdgesCount: Scalars['Int']
}

export type DeleteFieldResponseAggregateSelection = {
  __typename?: 'DeleteFieldResponseAggregateSelection'
  count: Scalars['Int']
  deletedEdgesCount: IntAggregateSelection
}

export type DeleteFieldResponseCreateInput = {
  deletedEdgesCount: Scalars['Int']
}

export type DeleteFieldResponseOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more DeleteFieldResponseSort objects to sort DeleteFieldResponses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<DeleteFieldResponseSort>>>
}

/** Fields to sort DeleteFieldResponses by. The order in which sorts are applied is not guaranteed when specifying many fields in one DeleteFieldResponseSort object. */
export type DeleteFieldResponseSort = {
  deletedEdgesCount?: InputMaybe<SortDirection>
}

export type DeleteFieldResponseUpdateInput = {
  deletedEdgesCount?: InputMaybe<Scalars['Int']>
}

export type DeleteFieldResponseWhere = {
  AND?: InputMaybe<Array<DeleteFieldResponseWhere>>
  OR?: InputMaybe<Array<DeleteFieldResponseWhere>>
  deletedEdgesCount?: InputMaybe<Scalars['Int']>
  deletedEdgesCount_GT?: InputMaybe<Scalars['Int']>
  deletedEdgesCount_GTE?: InputMaybe<Scalars['Int']>
  deletedEdgesCount_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  deletedEdgesCount_LT?: InputMaybe<Scalars['Int']>
  deletedEdgesCount_LTE?: InputMaybe<Scalars['Int']>
  deletedEdgesCount_NOT?: InputMaybe<Scalars['Int']>
  deletedEdgesCount_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type DeleteInfo = {
  __typename?: 'DeleteInfo'
  bookmark?: Maybe<Scalars['String']>
  nodesDeleted: Scalars['Int']
  relationshipsDeleted: Scalars['Int']
}

/** Simplest implementation of an IEdge with no additional fields */
export type Edge = IEdge & {
  __typename?: 'Edge'
  source: Scalars['String']
  target: Scalars['String']
}

export type EdgeAggregateSelection = {
  __typename?: 'EdgeAggregateSelection'
  count: Scalars['Int']
  source: StringAggregateSelection
  target: StringAggregateSelection
}

export type EdgeCreateInput = {
  source: Scalars['String']
  target: Scalars['String']
}

export type EdgeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more EdgeSort objects to sort Edges by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<EdgeSort>>>
}

/** Fields to sort Edges by. The order in which sorts are applied is not guaranteed when specifying many fields in one EdgeSort object. */
export type EdgeSort = {
  source?: InputMaybe<SortDirection>
  target?: InputMaybe<SortDirection>
}

export type EdgeUpdateInput = {
  source?: InputMaybe<Scalars['String']>
  target?: InputMaybe<Scalars['String']>
}

export type EdgeWhere = {
  AND?: InputMaybe<Array<EdgeWhere>>
  OR?: InputMaybe<Array<EdgeWhere>>
  source?: InputMaybe<Scalars['String']>
  source_CONTAINS?: InputMaybe<Scalars['String']>
  source_ENDS_WITH?: InputMaybe<Scalars['String']>
  source_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  source_NOT?: InputMaybe<Scalars['String']>
  source_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  source_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  source_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  source_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  source_STARTS_WITH?: InputMaybe<Scalars['String']>
  target?: InputMaybe<Scalars['String']>
  target_CONTAINS?: InputMaybe<Scalars['String']>
  target_ENDS_WITH?: InputMaybe<Scalars['String']>
  target_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  target_NOT?: InputMaybe<Scalars['String']>
  target_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  target_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  target_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  target_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  target_STARTS_WITH?: InputMaybe<Scalars['String']>
}

export type Element = {
  __typename?: 'Element'
  children?: Maybe<Array<Element>>
  childrenAggregate?: Maybe<ElementElementChildrenAggregationSelection>
  childrenConnection: ElementChildrenConnection
  createdAt: Scalars['DateTime']
  graph: IElementGraph
  id: Scalars['ID']
  name: Scalars['String']
  ownerId: Scalars['String']
  parent?: Maybe<Element>
  parentAggregate?: Maybe<ElementElementParentAggregationSelection>
  parentConnection: ElementParentConnection
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ElementChildrenArgs = {
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type ElementChildrenAggregateArgs = {
  where?: InputMaybe<ElementWhere>
}

export type ElementChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<ElementChildrenConnectionSort>>
  where?: InputMaybe<ElementChildrenConnectionWhere>
}

export type ElementParentArgs = {
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type ElementParentAggregateArgs = {
  where?: InputMaybe<ElementWhere>
}

export type ElementParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<ElementParentConnectionSort>>
  where?: InputMaybe<ElementParentConnectionWhere>
}

export type ElementAggregateSelection = {
  __typename?: 'ElementAggregateSelection'
  count: Scalars['Int']
  createdAt: DateTimeAggregateSelection
  id: IdAggregateSelection
  name: StringAggregateSelection
  ownerId: StringAggregateSelection
  updatedAt: DateTimeAggregateSelection
}

export type ElementChildrenAggregateInput = {
  AND?: InputMaybe<Array<ElementChildrenAggregateInput>>
  OR?: InputMaybe<Array<ElementChildrenAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<ElementChildrenNodeAggregationWhereInput>
}

export type ElementChildrenConnectFieldInput = {
  connect?: InputMaybe<Array<ElementConnectInput>>
  where?: InputMaybe<ElementConnectWhere>
}

export type ElementChildrenConnectOrCreateFieldInput = {
  onCreate: ElementChildrenConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type ElementChildrenConnectOrCreateFieldInputOnCreate = {
  node: ElementCreateInput
}

export type ElementChildrenConnection = {
  __typename?: 'ElementChildrenConnection'
  edges: Array<ElementChildrenRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ElementChildrenConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type ElementChildrenConnectionWhere = {
  AND?: InputMaybe<Array<ElementChildrenConnectionWhere>>
  OR?: InputMaybe<Array<ElementChildrenConnectionWhere>>
  node?: InputMaybe<ElementWhere>
  node_NOT?: InputMaybe<ElementWhere>
}

export type ElementChildrenCreateFieldInput = {
  node: ElementCreateInput
}

export type ElementChildrenDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ElementChildrenConnectionWhere>
}

export type ElementChildrenDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<ElementChildrenConnectionWhere>
}

export type ElementChildrenFieldInput = {
  connect?: InputMaybe<Array<ElementChildrenConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<ElementChildrenConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<ElementChildrenCreateFieldInput>>
}

export type ElementChildrenNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementChildrenNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<ElementChildrenNodeAggregationWhereInput>>
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>
  createdAt_GT?: InputMaybe<Scalars['DateTime']>
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>
  createdAt_LT?: InputMaybe<Scalars['DateTime']>
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  ownerId_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  ownerId_EQUAL?: InputMaybe<Scalars['String']>
  ownerId_GT?: InputMaybe<Scalars['Int']>
  ownerId_GTE?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_GT?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_LT?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  ownerId_LT?: InputMaybe<Scalars['Int']>
  ownerId_LTE?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>
}

export type ElementChildrenRelationship = {
  __typename?: 'ElementChildrenRelationship'
  cursor: Scalars['String']
  node: Element
}

export type ElementChildrenUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type ElementChildrenUpdateFieldInput = {
  connect?: InputMaybe<Array<ElementChildrenConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<ElementChildrenConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<ElementChildrenCreateFieldInput>>
  delete?: InputMaybe<Array<ElementChildrenDeleteFieldInput>>
  disconnect?: InputMaybe<Array<ElementChildrenDisconnectFieldInput>>
  update?: InputMaybe<ElementChildrenUpdateConnectionInput>
  where?: InputMaybe<ElementChildrenConnectionWhere>
}

export type ElementConnectInput = {
  children?: InputMaybe<Array<ElementChildrenConnectFieldInput>>
  parent?: InputMaybe<ElementParentConnectFieldInput>
}

export type ElementConnectOrCreateInput = {
  children?: InputMaybe<Array<ElementChildrenConnectOrCreateFieldInput>>
  parent?: InputMaybe<ElementParentConnectOrCreateFieldInput>
}

export type ElementConnectOrCreateWhere = {
  node: ElementUniqueWhere
}

export type ElementConnectWhere = {
  node: ElementWhere
}

export type ElementCreateInput = {
  children?: InputMaybe<ElementChildrenFieldInput>
  name: Scalars['String']
  ownerId: Scalars['String']
  parent?: InputMaybe<ElementParentFieldInput>
}

export type ElementDeleteInput = {
  children?: InputMaybe<Array<ElementChildrenDeleteFieldInput>>
  parent?: InputMaybe<ElementParentDeleteFieldInput>
}

export type ElementDisconnectInput = {
  children?: InputMaybe<Array<ElementChildrenDisconnectFieldInput>>
  parent?: InputMaybe<ElementParentDisconnectFieldInput>
}

export type ElementElementChildrenAggregationSelection = {
  __typename?: 'ElementElementChildrenAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<ElementElementChildrenNodeAggregateSelection>
}

export type ElementElementChildrenNodeAggregateSelection = {
  __typename?: 'ElementElementChildrenNodeAggregateSelection'
  createdAt: DateTimeAggregateSelection
  id: IdAggregateSelection
  name: StringAggregateSelection
  ownerId: StringAggregateSelection
  updatedAt: DateTimeAggregateSelection
}

export type ElementElementParentAggregationSelection = {
  __typename?: 'ElementElementParentAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<ElementElementParentNodeAggregateSelection>
}

export type ElementElementParentNodeAggregateSelection = {
  __typename?: 'ElementElementParentNodeAggregateSelection'
  createdAt: DateTimeAggregateSelection
  id: IdAggregateSelection
  name: StringAggregateSelection
  ownerId: StringAggregateSelection
  updatedAt: DateTimeAggregateSelection
}

export type ElementOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more ElementSort objects to sort Elements by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<ElementSort>>>
}

export type ElementParentAggregateInput = {
  AND?: InputMaybe<Array<ElementParentAggregateInput>>
  OR?: InputMaybe<Array<ElementParentAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<ElementParentNodeAggregationWhereInput>
}

export type ElementParentConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  where?: InputMaybe<ElementConnectWhere>
}

export type ElementParentConnectOrCreateFieldInput = {
  onCreate: ElementParentConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type ElementParentConnectOrCreateFieldInputOnCreate = {
  node: ElementCreateInput
}

export type ElementParentConnection = {
  __typename?: 'ElementParentConnection'
  edges: Array<ElementParentRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ElementParentConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type ElementParentConnectionWhere = {
  AND?: InputMaybe<Array<ElementParentConnectionWhere>>
  OR?: InputMaybe<Array<ElementParentConnectionWhere>>
  node?: InputMaybe<ElementWhere>
  node_NOT?: InputMaybe<ElementWhere>
}

export type ElementParentCreateFieldInput = {
  node: ElementCreateInput
}

export type ElementParentDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ElementParentConnectionWhere>
}

export type ElementParentDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<ElementParentConnectionWhere>
}

export type ElementParentFieldInput = {
  connect?: InputMaybe<ElementParentConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementParentConnectOrCreateFieldInput>
  create?: InputMaybe<ElementParentCreateFieldInput>
}

export type ElementParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementParentNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<ElementParentNodeAggregationWhereInput>>
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>
  createdAt_GT?: InputMaybe<Scalars['DateTime']>
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>
  createdAt_LT?: InputMaybe<Scalars['DateTime']>
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  ownerId_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  ownerId_EQUAL?: InputMaybe<Scalars['String']>
  ownerId_GT?: InputMaybe<Scalars['Int']>
  ownerId_GTE?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_GT?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_LT?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  ownerId_LT?: InputMaybe<Scalars['Int']>
  ownerId_LTE?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>
}

export type ElementParentRelationship = {
  __typename?: 'ElementParentRelationship'
  cursor: Scalars['String']
  node: Element
}

export type ElementParentUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type ElementParentUpdateFieldInput = {
  connect?: InputMaybe<ElementParentConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementParentConnectOrCreateFieldInput>
  create?: InputMaybe<ElementParentCreateFieldInput>
  delete?: InputMaybe<ElementParentDeleteFieldInput>
  disconnect?: InputMaybe<ElementParentDisconnectFieldInput>
  update?: InputMaybe<ElementParentUpdateConnectionInput>
  where?: InputMaybe<ElementParentConnectionWhere>
}

export type ElementRelationInput = {
  children?: InputMaybe<Array<ElementChildrenCreateFieldInput>>
  parent?: InputMaybe<ElementParentCreateFieldInput>
}

/** Fields to sort Elements by. The order in which sorts are applied is not guaranteed when specifying many fields in one ElementSort object. */
export type ElementSort = {
  createdAt?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  ownerId?: InputMaybe<SortDirection>
  updatedAt?: InputMaybe<SortDirection>
}

/**
 * Allows picking an element from the current tree
 * Is passed to the rendered element as a React node
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type ElementType = TypeBase & {
  __typename?: 'ElementType'
  /** Allows scoping the type of element to only descendants, children or all elements */
  elementKind: ElementTypeKind
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<ElementTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
}

/**
 * Allows picking an element from the current tree
 * Is passed to the rendered element as a React node
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type ElementTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking an element from the current tree
 * Is passed to the rendered element as a React node
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type ElementTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking an element from the current tree
 * Is passed to the rendered element as a React node
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type ElementTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type ElementTypeAggregateSelection = {
  __typename?: 'ElementTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type ElementTypeConnectInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type ElementTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type ElementTypeCreateInput = {
  elementKind: ElementTypeKind
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
}

export type ElementTypeDeleteInput = {
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type ElementTypeDisconnectInput = {
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export enum ElementTypeKind {
  /** Pick any element in the current tree */
  AllElements = 'AllElements',
  /** Pick any element from the children of the current element */
  ChildrenOnly = 'ChildrenOnly',
  /** Pick any element from the descendants of the current element */
  DescendantsOnly = 'DescendantsOnly',
}

export type ElementTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more ElementTypeSort objects to sort ElementTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<ElementTypeSort>>>
}

export type ElementTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<ElementTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<ElementTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<ElementTypeOwnerNodeAggregationWhereInput>
}

export type ElementTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<ElementTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type ElementTypeRelationInput = {
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort ElementTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ElementTypeSort object. */
export type ElementTypeSort = {
  elementKind?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type ElementTypeUpdateInput = {
  elementKind?: InputMaybe<ElementTypeKind>
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type ElementTypeUserOwnerAggregationSelection = {
  __typename?: 'ElementTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<ElementTypeUserOwnerNodeAggregateSelection>
}

export type ElementTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'ElementTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type ElementTypeWhere = {
  AND?: InputMaybe<Array<ElementTypeWhere>>
  OR?: InputMaybe<Array<ElementTypeWhere>>
  elementKind?: InputMaybe<ElementTypeKind>
  elementKind_IN?: InputMaybe<Array<InputMaybe<ElementTypeKind>>>
  elementKind_NOT?: InputMaybe<ElementTypeKind>
  elementKind_NOT_IN?: InputMaybe<Array<InputMaybe<ElementTypeKind>>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<ElementTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type ElementUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>
}

export type ElementUpdateInput = {
  children?: InputMaybe<Array<ElementChildrenUpdateFieldInput>>
  name?: InputMaybe<Scalars['String']>
  ownerId?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<ElementParentUpdateFieldInput>
}

export type ElementWhere = {
  AND?: InputMaybe<Array<ElementWhere>>
  OR?: InputMaybe<Array<ElementWhere>>
  children?: InputMaybe<ElementWhere>
  childrenAggregate?: InputMaybe<ElementChildrenAggregateInput>
  childrenConnection?: InputMaybe<ElementChildrenConnectionWhere>
  childrenConnection_NOT?: InputMaybe<ElementChildrenConnectionWhere>
  children_NOT?: InputMaybe<ElementWhere>
  createdAt?: InputMaybe<Scalars['DateTime']>
  createdAt_GT?: InputMaybe<Scalars['DateTime']>
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdAt_LT?: InputMaybe<Scalars['DateTime']>
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>
  createdAt_NOT?: InputMaybe<Scalars['DateTime']>
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  ownerId?: InputMaybe<Scalars['String']>
  ownerId_CONTAINS?: InputMaybe<Scalars['String']>
  ownerId_ENDS_WITH?: InputMaybe<Scalars['String']>
  ownerId_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  ownerId_NOT?: InputMaybe<Scalars['String']>
  ownerId_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  ownerId_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  ownerId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  ownerId_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  ownerId_STARTS_WITH?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<ElementWhere>
  parentAggregate?: InputMaybe<ElementParentAggregateInput>
  parentConnection?: InputMaybe<ElementParentConnectionWhere>
  parentConnection_NOT?: InputMaybe<ElementParentConnectionWhere>
  parent_NOT?: InputMaybe<ElementWhere>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_NOT?: InputMaybe<Scalars['DateTime']>
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumType = TypeBase & {
  __typename?: 'EnumType'
  allowedValues?: Maybe<Array<EnumTypeValue>>
  allowedValuesAggregate?: Maybe<EnumTypeEnumTypeValueAllowedValuesAggregationSelection>
  allowedValuesConnection: EnumTypeAllowedValuesConnection
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<EnumTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeAllowedValuesArgs = {
  options?: InputMaybe<EnumTypeValueOptions>
  where?: InputMaybe<EnumTypeValueWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeAllowedValuesAggregateArgs = {
  where?: InputMaybe<EnumTypeValueWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeAllowedValuesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<EnumTypeAllowedValuesConnectionSort>>
  where?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type EnumTypeAggregateSelection = {
  __typename?: 'EnumTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type EnumTypeAllowedValuesAggregateInput = {
  AND?: InputMaybe<Array<EnumTypeAllowedValuesAggregateInput>>
  OR?: InputMaybe<Array<EnumTypeAllowedValuesAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<EnumTypeAllowedValuesNodeAggregationWhereInput>
}

export type EnumTypeAllowedValuesConnectFieldInput = {
  connect?: InputMaybe<Array<EnumTypeValueConnectInput>>
  where?: InputMaybe<EnumTypeValueConnectWhere>
}

export type EnumTypeAllowedValuesConnection = {
  __typename?: 'EnumTypeAllowedValuesConnection'
  edges: Array<EnumTypeAllowedValuesRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type EnumTypeAllowedValuesConnectionSort = {
  node?: InputMaybe<EnumTypeValueSort>
}

export type EnumTypeAllowedValuesConnectionWhere = {
  AND?: InputMaybe<Array<EnumTypeAllowedValuesConnectionWhere>>
  OR?: InputMaybe<Array<EnumTypeAllowedValuesConnectionWhere>>
  node?: InputMaybe<EnumTypeValueWhere>
  node_NOT?: InputMaybe<EnumTypeValueWhere>
}

export type EnumTypeAllowedValuesCreateFieldInput = {
  node: EnumTypeValueCreateInput
}

export type EnumTypeAllowedValuesDeleteFieldInput = {
  delete?: InputMaybe<EnumTypeValueDeleteInput>
  where?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
}

export type EnumTypeAllowedValuesDisconnectFieldInput = {
  disconnect?: InputMaybe<EnumTypeValueDisconnectInput>
  where?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
}

export type EnumTypeAllowedValuesFieldInput = {
  connect?: InputMaybe<Array<EnumTypeAllowedValuesConnectFieldInput>>
  create?: InputMaybe<Array<EnumTypeAllowedValuesCreateFieldInput>>
}

export type EnumTypeAllowedValuesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnumTypeAllowedValuesNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<EnumTypeAllowedValuesNodeAggregationWhereInput>>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  value_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  value_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  value_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  value_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  value_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  value_EQUAL?: InputMaybe<Scalars['String']>
  value_GT?: InputMaybe<Scalars['Int']>
  value_GTE?: InputMaybe<Scalars['Int']>
  value_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  value_LONGEST_GT?: InputMaybe<Scalars['Int']>
  value_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  value_LONGEST_LT?: InputMaybe<Scalars['Int']>
  value_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  value_LT?: InputMaybe<Scalars['Int']>
  value_LTE?: InputMaybe<Scalars['Int']>
  value_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  value_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  value_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  value_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  value_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type EnumTypeAllowedValuesRelationship = {
  __typename?: 'EnumTypeAllowedValuesRelationship'
  cursor: Scalars['String']
  node: EnumTypeValue
}

export type EnumTypeAllowedValuesUpdateConnectionInput = {
  node?: InputMaybe<EnumTypeValueUpdateInput>
}

export type EnumTypeAllowedValuesUpdateFieldInput = {
  connect?: InputMaybe<Array<EnumTypeAllowedValuesConnectFieldInput>>
  create?: InputMaybe<Array<EnumTypeAllowedValuesCreateFieldInput>>
  delete?: InputMaybe<Array<EnumTypeAllowedValuesDeleteFieldInput>>
  disconnect?: InputMaybe<Array<EnumTypeAllowedValuesDisconnectFieldInput>>
  update?: InputMaybe<EnumTypeAllowedValuesUpdateConnectionInput>
  where?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
}

export type EnumTypeConnectInput = {
  allowedValues?: InputMaybe<Array<EnumTypeAllowedValuesConnectFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type EnumTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type EnumTypeConnectOrCreateWhere = {
  node: EnumTypeUniqueWhere
}

export type EnumTypeConnectWhere = {
  node: EnumTypeWhere
}

export type EnumTypeCreateInput = {
  allowedValues?: InputMaybe<EnumTypeAllowedValuesFieldInput>
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
}

export type EnumTypeDeleteInput = {
  allowedValues?: InputMaybe<Array<EnumTypeAllowedValuesDeleteFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type EnumTypeDisconnectInput = {
  allowedValues?: InputMaybe<Array<EnumTypeAllowedValuesDisconnectFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export type EnumTypeEnumTypeValueAllowedValuesAggregationSelection = {
  __typename?: 'EnumTypeEnumTypeValueAllowedValuesAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<EnumTypeEnumTypeValueAllowedValuesNodeAggregateSelection>
}

export type EnumTypeEnumTypeValueAllowedValuesNodeAggregateSelection = {
  __typename?: 'EnumTypeEnumTypeValueAllowedValuesNodeAggregateSelection'
  id: IdAggregateSelection
  name: StringAggregateSelection
  value: StringAggregateSelection
}

export type EnumTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more EnumTypeSort objects to sort EnumTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<EnumTypeSort>>>
}

export type EnumTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<EnumTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<EnumTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<EnumTypeOwnerNodeAggregationWhereInput>
}

export type EnumTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnumTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<EnumTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type EnumTypeRelationInput = {
  allowedValues?: InputMaybe<Array<EnumTypeAllowedValuesCreateFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort EnumTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one EnumTypeSort object. */
export type EnumTypeSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type EnumTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>
}

export type EnumTypeUpdateInput = {
  allowedValues?: InputMaybe<Array<EnumTypeAllowedValuesUpdateFieldInput>>
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type EnumTypeUserOwnerAggregationSelection = {
  __typename?: 'EnumTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<EnumTypeUserOwnerNodeAggregateSelection>
}

export type EnumTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'EnumTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type EnumTypeValue = {
  __typename?: 'EnumTypeValue'
  enumType?: Maybe<EnumType>
  enumTypeAggregate?: Maybe<EnumTypeValueEnumTypeEnumTypeAggregationSelection>
  enumTypeConnection: EnumTypeValueEnumTypeConnection
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  value: Scalars['String']
}

export type EnumTypeValueEnumTypeArgs = {
  options?: InputMaybe<EnumTypeOptions>
  where?: InputMaybe<EnumTypeWhere>
}

export type EnumTypeValueEnumTypeAggregateArgs = {
  where?: InputMaybe<EnumTypeWhere>
}

export type EnumTypeValueEnumTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<EnumTypeValueEnumTypeConnectionSort>>
  where?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
}

export type EnumTypeValueAggregateSelection = {
  __typename?: 'EnumTypeValueAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
  value: StringAggregateSelection
}

export type EnumTypeValueConnectInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeConnectFieldInput>
}

export type EnumTypeValueConnectOrCreateInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeConnectOrCreateFieldInput>
}

export type EnumTypeValueConnectWhere = {
  node: EnumTypeValueWhere
}

export type EnumTypeValueCreateInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeFieldInput>
  id: Scalars['ID']
  name?: InputMaybe<Scalars['String']>
  value: Scalars['String']
}

export type EnumTypeValueDeleteInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeDeleteFieldInput>
}

export type EnumTypeValueDisconnectInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeDisconnectFieldInput>
}

export type EnumTypeValueEnumTypeAggregateInput = {
  AND?: InputMaybe<Array<EnumTypeValueEnumTypeAggregateInput>>
  OR?: InputMaybe<Array<EnumTypeValueEnumTypeAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<EnumTypeValueEnumTypeNodeAggregationWhereInput>
}

export type EnumTypeValueEnumTypeConnectFieldInput = {
  connect?: InputMaybe<EnumTypeConnectInput>
  where?: InputMaybe<EnumTypeConnectWhere>
}

export type EnumTypeValueEnumTypeConnectOrCreateFieldInput = {
  onCreate: EnumTypeValueEnumTypeConnectOrCreateFieldInputOnCreate
  where: EnumTypeConnectOrCreateWhere
}

export type EnumTypeValueEnumTypeConnectOrCreateFieldInputOnCreate = {
  node: EnumTypeCreateInput
}

export type EnumTypeValueEnumTypeConnection = {
  __typename?: 'EnumTypeValueEnumTypeConnection'
  edges: Array<EnumTypeValueEnumTypeRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type EnumTypeValueEnumTypeConnectionSort = {
  node?: InputMaybe<EnumTypeSort>
}

export type EnumTypeValueEnumTypeConnectionWhere = {
  AND?: InputMaybe<Array<EnumTypeValueEnumTypeConnectionWhere>>
  OR?: InputMaybe<Array<EnumTypeValueEnumTypeConnectionWhere>>
  node?: InputMaybe<EnumTypeWhere>
  node_NOT?: InputMaybe<EnumTypeWhere>
}

export type EnumTypeValueEnumTypeCreateFieldInput = {
  node: EnumTypeCreateInput
}

export type EnumTypeValueEnumTypeDeleteFieldInput = {
  delete?: InputMaybe<EnumTypeDeleteInput>
  where?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
}

export type EnumTypeValueEnumTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<EnumTypeDisconnectInput>
  where?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
}

export type EnumTypeValueEnumTypeEnumTypeAggregationSelection = {
  __typename?: 'EnumTypeValueEnumTypeEnumTypeAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<EnumTypeValueEnumTypeEnumTypeNodeAggregateSelection>
}

export type EnumTypeValueEnumTypeEnumTypeNodeAggregateSelection = {
  __typename?: 'EnumTypeValueEnumTypeEnumTypeNodeAggregateSelection'
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type EnumTypeValueEnumTypeFieldInput = {
  connect?: InputMaybe<EnumTypeValueEnumTypeConnectFieldInput>
  connectOrCreate?: InputMaybe<EnumTypeValueEnumTypeConnectOrCreateFieldInput>
  create?: InputMaybe<EnumTypeValueEnumTypeCreateFieldInput>
}

export type EnumTypeValueEnumTypeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnumTypeValueEnumTypeNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<EnumTypeValueEnumTypeNodeAggregationWhereInput>>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type EnumTypeValueEnumTypeRelationship = {
  __typename?: 'EnumTypeValueEnumTypeRelationship'
  cursor: Scalars['String']
  node: EnumType
}

export type EnumTypeValueEnumTypeUpdateConnectionInput = {
  node?: InputMaybe<EnumTypeUpdateInput>
}

export type EnumTypeValueEnumTypeUpdateFieldInput = {
  connect?: InputMaybe<EnumTypeValueEnumTypeConnectFieldInput>
  connectOrCreate?: InputMaybe<EnumTypeValueEnumTypeConnectOrCreateFieldInput>
  create?: InputMaybe<EnumTypeValueEnumTypeCreateFieldInput>
  delete?: InputMaybe<EnumTypeValueEnumTypeDeleteFieldInput>
  disconnect?: InputMaybe<EnumTypeValueEnumTypeDisconnectFieldInput>
  update?: InputMaybe<EnumTypeValueEnumTypeUpdateConnectionInput>
  where?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
}

export type EnumTypeValueOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more EnumTypeValueSort objects to sort EnumTypeValues by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<EnumTypeValueSort>>>
}

export type EnumTypeValueRelationInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeCreateFieldInput>
}

/** Fields to sort EnumTypeValues by. The order in which sorts are applied is not guaranteed when specifying many fields in one EnumTypeValueSort object. */
export type EnumTypeValueSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  value?: InputMaybe<SortDirection>
}

export type EnumTypeValueUpdateInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeUpdateFieldInput>
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type EnumTypeValueWhere = {
  AND?: InputMaybe<Array<EnumTypeValueWhere>>
  OR?: InputMaybe<Array<EnumTypeValueWhere>>
  enumType?: InputMaybe<EnumTypeWhere>
  enumTypeAggregate?: InputMaybe<EnumTypeValueEnumTypeAggregateInput>
  enumTypeConnection?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
  enumTypeConnection_NOT?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
  enumType_NOT?: InputMaybe<EnumTypeWhere>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
  value_CONTAINS?: InputMaybe<Scalars['String']>
  value_ENDS_WITH?: InputMaybe<Scalars['String']>
  value_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  value_NOT?: InputMaybe<Scalars['String']>
  value_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  value_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  value_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  value_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  value_STARTS_WITH?: InputMaybe<Scalars['String']>
}

export type EnumTypeWhere = {
  AND?: InputMaybe<Array<EnumTypeWhere>>
  OR?: InputMaybe<Array<EnumTypeWhere>>
  allowedValues?: InputMaybe<EnumTypeValueWhere>
  allowedValuesAggregate?: InputMaybe<EnumTypeAllowedValuesAggregateInput>
  allowedValuesConnection?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
  allowedValuesConnection_NOT?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
  allowedValues_NOT?: InputMaybe<EnumTypeValueWhere>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<EnumTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type Field = {
  description?: Maybe<Scalars['String']>
  key: Scalars['String']
  name?: Maybe<Scalars['String']>
}

export type FieldCreateInput = {
  description?: InputMaybe<Scalars['String']>
  key: Scalars['String']
  name?: InputMaybe<Scalars['String']>
}

export type FieldSort = {
  description?: InputMaybe<SortDirection>
  key?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type FieldUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  key?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type FieldWhere = {
  AND?: InputMaybe<Array<FieldWhere>>
  OR?: InputMaybe<Array<FieldWhere>>
  description?: InputMaybe<Scalars['String']>
  description_CONTAINS?: InputMaybe<Scalars['String']>
  description_ENDS_WITH?: InputMaybe<Scalars['String']>
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_NOT?: InputMaybe<Scalars['String']>
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  description_STARTS_WITH?: InputMaybe<Scalars['String']>
  key?: InputMaybe<Scalars['String']>
  key_CONTAINS?: InputMaybe<Scalars['String']>
  key_ENDS_WITH?: InputMaybe<Scalars['String']>
  key_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  key_NOT?: InputMaybe<Scalars['String']>
  key_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  key_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  key_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  key_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  key_STARTS_WITH?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
}

export type IdAggregateSelection = {
  __typename?: 'IDAggregateSelection'
  longest?: Maybe<Scalars['ID']>
  shortest?: Maybe<Scalars['ID']>
}

export type IEdge = {
  source: Scalars['String']
  target: Scalars['String']
}

export type IElementGraph = {
  root?: Maybe<Element>
  vertices?: Maybe<Array<Element>>
}

export type ImportAtomsInput = {
  payload?: InputMaybe<Array<Scalars['JSONObject']>>
}

export type ImportAtomsMutationResponse = {
  __typename?: 'ImportAtomsMutationResponse'
  atoms?: Maybe<Array<Atom>>
}

export type ImportAtomsMutationResponseAggregateSelection = {
  __typename?: 'ImportAtomsMutationResponseAggregateSelection'
  count: Scalars['Int']
}

export type ImportAtomsMutationResponseCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>
}

export type ImportAtomsMutationResponseOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type ImportAtomsMutationResponseUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>
}

export type ImportAtomsMutationResponseWhere = {
  AND?: InputMaybe<Array<ImportAtomsMutationResponseWhere>>
  OR?: InputMaybe<Array<ImportAtomsMutationResponseWhere>>
}

export type IntAggregateSelection = {
  __typename?: 'IntAggregateSelection'
  average?: Maybe<Scalars['Float']>
  max?: Maybe<Scalars['Int']>
  min?: Maybe<Scalars['Int']>
  sum?: Maybe<Scalars['Int']>
}

/** Represents an object type with multiple fields */
export type InterfaceType = TypeBase & {
  __typename?: 'InterfaceType'
  apiOfAtoms?: Maybe<Array<Atom>>
  apiOfAtomsAggregate?: Maybe<InterfaceTypeAtomApiOfAtomsAggregationSelection>
  apiOfAtomsConnection: InterfaceTypeApiOfAtomsConnection
  fields?: Maybe<Array<TypeBase>>
  fieldsConnection: InterfaceTypeFieldsConnection
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<InterfaceTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
}

/** Represents an object type with multiple fields */
export type InterfaceTypeApiOfAtomsArgs = {
  options?: InputMaybe<AtomOptions>
  where?: InputMaybe<AtomWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeApiOfAtomsAggregateArgs = {
  where?: InputMaybe<AtomWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeApiOfAtomsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectionSort>>
  where?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeFieldsArgs = {
  options?: InputMaybe<QueryOptions>
  where?: InputMaybe<TypeBaseWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeFieldsConnectionArgs = {
  sort?: InputMaybe<Array<InterfaceTypeFieldsConnectionSort>>
  where?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type InterfaceTypeAggregateSelection = {
  __typename?: 'InterfaceTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type InterfaceTypeApiOfAtomsAggregateInput = {
  AND?: InputMaybe<Array<InterfaceTypeApiOfAtomsAggregateInput>>
  OR?: InputMaybe<Array<InterfaceTypeApiOfAtomsAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<InterfaceTypeApiOfAtomsNodeAggregationWhereInput>
}

export type InterfaceTypeApiOfAtomsConnectFieldInput = {
  connect?: InputMaybe<Array<AtomConnectInput>>
  where?: InputMaybe<AtomConnectWhere>
}

export type InterfaceTypeApiOfAtomsConnectOrCreateFieldInput = {
  onCreate: InterfaceTypeApiOfAtomsConnectOrCreateFieldInputOnCreate
  where: AtomConnectOrCreateWhere
}

export type InterfaceTypeApiOfAtomsConnectOrCreateFieldInputOnCreate = {
  node: AtomCreateInput
}

export type InterfaceTypeApiOfAtomsConnection = {
  __typename?: 'InterfaceTypeApiOfAtomsConnection'
  edges: Array<InterfaceTypeApiOfAtomsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type InterfaceTypeApiOfAtomsConnectionSort = {
  node?: InputMaybe<AtomSort>
}

export type InterfaceTypeApiOfAtomsConnectionWhere = {
  AND?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectionWhere>>
  OR?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectionWhere>>
  node?: InputMaybe<AtomWhere>
  node_NOT?: InputMaybe<AtomWhere>
}

export type InterfaceTypeApiOfAtomsCreateFieldInput = {
  node: AtomCreateInput
}

export type InterfaceTypeApiOfAtomsDeleteFieldInput = {
  delete?: InputMaybe<AtomDeleteInput>
  where?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
}

export type InterfaceTypeApiOfAtomsDisconnectFieldInput = {
  disconnect?: InputMaybe<AtomDisconnectInput>
  where?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
}

export type InterfaceTypeApiOfAtomsFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<InterfaceTypeApiOfAtomsConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<InterfaceTypeApiOfAtomsCreateFieldInput>>
}

export type InterfaceTypeApiOfAtomsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InterfaceTypeApiOfAtomsNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<InterfaceTypeApiOfAtomsNodeAggregationWhereInput>>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type InterfaceTypeApiOfAtomsRelationship = {
  __typename?: 'InterfaceTypeApiOfAtomsRelationship'
  cursor: Scalars['String']
  node: Atom
}

export type InterfaceTypeApiOfAtomsUpdateConnectionInput = {
  node?: InputMaybe<AtomUpdateInput>
}

export type InterfaceTypeApiOfAtomsUpdateFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<InterfaceTypeApiOfAtomsConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<InterfaceTypeApiOfAtomsCreateFieldInput>>
  delete?: InputMaybe<Array<InterfaceTypeApiOfAtomsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<InterfaceTypeApiOfAtomsDisconnectFieldInput>>
  update?: InputMaybe<InterfaceTypeApiOfAtomsUpdateConnectionInput>
  where?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
}

export type InterfaceTypeAtomApiOfAtomsAggregationSelection = {
  __typename?: 'InterfaceTypeAtomApiOfAtomsAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<InterfaceTypeAtomApiOfAtomsNodeAggregateSelection>
}

export type InterfaceTypeAtomApiOfAtomsNodeAggregateSelection = {
  __typename?: 'InterfaceTypeAtomApiOfAtomsNodeAggregateSelection'
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type InterfaceTypeConnectInput = {
  apiOfAtoms?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectFieldInput>>
  fields?: InputMaybe<Array<InterfaceTypeFieldsConnectFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type InterfaceTypeConnectOrCreateInput = {
  apiOfAtoms?: InputMaybe<
    Array<InterfaceTypeApiOfAtomsConnectOrCreateFieldInput>
  >
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type InterfaceTypeConnectOrCreateWhere = {
  node: InterfaceTypeUniqueWhere
}

export type InterfaceTypeConnectWhere = {
  node: InterfaceTypeWhere
}

export type InterfaceTypeCreateInput = {
  apiOfAtoms?: InputMaybe<InterfaceTypeApiOfAtomsFieldInput>
  fields?: InputMaybe<InterfaceTypeFieldsFieldInput>
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
}

export type InterfaceTypeDeleteInput = {
  apiOfAtoms?: InputMaybe<Array<InterfaceTypeApiOfAtomsDeleteFieldInput>>
  fields?: InputMaybe<Array<InterfaceTypeFieldsDeleteFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type InterfaceTypeDisconnectInput = {
  apiOfAtoms?: InputMaybe<Array<InterfaceTypeApiOfAtomsDisconnectFieldInput>>
  fields?: InputMaybe<Array<InterfaceTypeFieldsDisconnectFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

/**
 * Connection between an Interface Type and its fields types.
 * The field data is stored as relationship properties and we retreive them along with the relation itself.
 */
export type InterfaceTypeEdge = Field &
  IEdge & {
    __typename?: 'InterfaceTypeEdge'
    description?: Maybe<Scalars['String']>
    key: Scalars['String']
    name?: Maybe<Scalars['String']>
    source: Scalars['String']
    target: Scalars['String']
  }

export type InterfaceTypeFieldsConnectFieldInput = {
  connect?: InputMaybe<TypeBaseConnectInput>
  edge: FieldCreateInput
  where?: InputMaybe<TypeBaseConnectWhere>
}

export type InterfaceTypeFieldsConnection = {
  __typename?: 'InterfaceTypeFieldsConnection'
  edges: Array<InterfaceTypeFieldsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type InterfaceTypeFieldsConnectionSort = {
  edge?: InputMaybe<FieldSort>
}

export type InterfaceTypeFieldsConnectionWhere = {
  AND?: InputMaybe<Array<InterfaceTypeFieldsConnectionWhere>>
  OR?: InputMaybe<Array<InterfaceTypeFieldsConnectionWhere>>
  edge?: InputMaybe<FieldWhere>
  edge_NOT?: InputMaybe<FieldWhere>
  node?: InputMaybe<TypeBaseWhere>
  node_NOT?: InputMaybe<TypeBaseWhere>
}

export type InterfaceTypeFieldsCreateFieldInput = {
  edge: FieldCreateInput
  node: TypeBaseCreateInput
}

export type InterfaceTypeFieldsDeleteFieldInput = {
  delete?: InputMaybe<TypeBaseDeleteInput>
  where?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
}

export type InterfaceTypeFieldsDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeBaseDisconnectInput>
  where?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
}

export type InterfaceTypeFieldsFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeFieldsConnectFieldInput>>
  create?: InputMaybe<Array<InterfaceTypeFieldsCreateFieldInput>>
}

export type InterfaceTypeFieldsRelationship = Field & {
  __typename?: 'InterfaceTypeFieldsRelationship'
  cursor: Scalars['String']
  description?: Maybe<Scalars['String']>
  key: Scalars['String']
  name?: Maybe<Scalars['String']>
  node: TypeBase
}

export type InterfaceTypeFieldsUpdateConnectionInput = {
  edge?: InputMaybe<FieldUpdateInput>
  node?: InputMaybe<TypeBaseUpdateInput>
}

export type InterfaceTypeFieldsUpdateFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeFieldsConnectFieldInput>>
  create?: InputMaybe<Array<InterfaceTypeFieldsCreateFieldInput>>
  delete?: InputMaybe<Array<InterfaceTypeFieldsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<InterfaceTypeFieldsDisconnectFieldInput>>
  update?: InputMaybe<InterfaceTypeFieldsUpdateConnectionInput>
  where?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
}

export type InterfaceTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more InterfaceTypeSort objects to sort InterfaceTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<InterfaceTypeSort>>>
}

export type InterfaceTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<InterfaceTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<InterfaceTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<InterfaceTypeOwnerNodeAggregationWhereInput>
}

export type InterfaceTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InterfaceTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<InterfaceTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type InterfaceTypeRelationInput = {
  apiOfAtoms?: InputMaybe<Array<InterfaceTypeApiOfAtomsCreateFieldInput>>
  fields?: InputMaybe<Array<InterfaceTypeFieldsCreateFieldInput>>
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort InterfaceTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one InterfaceTypeSort object. */
export type InterfaceTypeSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type InterfaceTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>
}

export type InterfaceTypeUpdateInput = {
  apiOfAtoms?: InputMaybe<Array<InterfaceTypeApiOfAtomsUpdateFieldInput>>
  fields?: InputMaybe<Array<InterfaceTypeFieldsUpdateFieldInput>>
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type InterfaceTypeUserOwnerAggregationSelection = {
  __typename?: 'InterfaceTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<InterfaceTypeUserOwnerNodeAggregateSelection>
}

export type InterfaceTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'InterfaceTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type InterfaceTypeWhere = {
  AND?: InputMaybe<Array<InterfaceTypeWhere>>
  OR?: InputMaybe<Array<InterfaceTypeWhere>>
  apiOfAtoms?: InputMaybe<AtomWhere>
  apiOfAtomsAggregate?: InputMaybe<InterfaceTypeApiOfAtomsAggregateInput>
  apiOfAtomsConnection?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
  apiOfAtomsConnection_NOT?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
  apiOfAtoms_NOT?: InputMaybe<AtomWhere>
  fieldsConnection?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
  fieldsConnection_NOT?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<InterfaceTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

/** Allows picking a lambda */
export type LambdaType = TypeBase & {
  __typename?: 'LambdaType'
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<LambdaTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
}

/** Allows picking a lambda */
export type LambdaTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a lambda */
export type LambdaTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/** Allows picking a lambda */
export type LambdaTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type LambdaTypeAggregateSelection = {
  __typename?: 'LambdaTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type LambdaTypeConnectInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type LambdaTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type LambdaTypeCreateInput = {
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
}

export type LambdaTypeDeleteInput = {
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type LambdaTypeDisconnectInput = {
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export type LambdaTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more LambdaTypeSort objects to sort LambdaTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<LambdaTypeSort>>>
}

export type LambdaTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<LambdaTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<LambdaTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<LambdaTypeOwnerNodeAggregationWhereInput>
}

export type LambdaTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LambdaTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<LambdaTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type LambdaTypeRelationInput = {
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort LambdaTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one LambdaTypeSort object. */
export type LambdaTypeSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type LambdaTypeUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type LambdaTypeUserOwnerAggregationSelection = {
  __typename?: 'LambdaTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<LambdaTypeUserOwnerNodeAggregateSelection>
}

export type LambdaTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'LambdaTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type LambdaTypeWhere = {
  AND?: InputMaybe<Array<LambdaTypeWhere>>
  OR?: InputMaybe<Array<LambdaTypeWhere>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<LambdaTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export enum MonacoLanguage {
  css = 'css',
  cssInJs = 'cssInJs',
  graphqlDev = 'graphqlDev',
  javascript = 'javascript',
  json = 'json',
  typescript = 'typescript',
}

/** Allows editing the value using a monaco editor */
export type MonacoType = TypeBase & {
  __typename?: 'MonacoType'
  graph: TypeGraph
  id: Scalars['ID']
  language: MonacoLanguage
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<MonacoTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
}

/** Allows editing the value using a monaco editor */
export type MonacoTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows editing the value using a monaco editor */
export type MonacoTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/** Allows editing the value using a monaco editor */
export type MonacoTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type MonacoTypeAggregateSelection = {
  __typename?: 'MonacoTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type MonacoTypeConnectInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type MonacoTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type MonacoTypeCreateInput = {
  language: MonacoLanguage
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
}

export type MonacoTypeDeleteInput = {
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type MonacoTypeDisconnectInput = {
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export type MonacoTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more MonacoTypeSort objects to sort MonacoTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<MonacoTypeSort>>>
}

export type MonacoTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<MonacoTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<MonacoTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<MonacoTypeOwnerNodeAggregationWhereInput>
}

export type MonacoTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MonacoTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<MonacoTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type MonacoTypeRelationInput = {
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort MonacoTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one MonacoTypeSort object. */
export type MonacoTypeSort = {
  id?: InputMaybe<SortDirection>
  language?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type MonacoTypeUpdateInput = {
  language?: InputMaybe<MonacoLanguage>
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type MonacoTypeUserOwnerAggregationSelection = {
  __typename?: 'MonacoTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<MonacoTypeUserOwnerNodeAggregateSelection>
}

export type MonacoTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'MonacoTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type MonacoTypeWhere = {
  AND?: InputMaybe<Array<MonacoTypeWhere>>
  OR?: InputMaybe<Array<MonacoTypeWhere>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  language?: InputMaybe<MonacoLanguage>
  language_IN?: InputMaybe<Array<InputMaybe<MonacoLanguage>>>
  language_NOT?: InputMaybe<MonacoLanguage>
  language_NOT_IN?: InputMaybe<Array<InputMaybe<MonacoLanguage>>>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<MonacoTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAppTypes: CreateAppTypesMutationResponse
  createApps: CreateAppsMutationResponse
  createArrayTypes: CreateArrayTypesMutationResponse
  createAtoms: CreateAtomsMutationResponse
  createCreateInfos: CreateCreateInfosMutationResponse
  createDeleteFieldResponses: CreateDeleteFieldResponsesMutationResponse
  createEdges: CreateEdgesMutationResponse
  createElementTypes: CreateElementTypesMutationResponse
  createElements: CreateElementsMutationResponse
  createEnumTypeValues: CreateEnumTypeValuesMutationResponse
  createEnumTypes: CreateEnumTypesMutationResponse
  createImportAtomsMutationResponses: CreateImportAtomsMutationResponsesMutationResponse
  createInterfaceTypes: CreateInterfaceTypesMutationResponse
  createLambdaTypes: CreateLambdaTypesMutationResponse
  createMonacoTypes: CreateMonacoTypesMutationResponse
  createPageTypes: CreatePageTypesMutationResponse
  createPages: CreatePagesMutationResponse
  createPrimitiveTypes: CreatePrimitiveTypesMutationResponse
  createReactNodeTypes: CreateReactNodeTypesMutationResponse
  createRenderPropsTypes: CreateRenderPropsTypesMutationResponse
  createTagEdges: CreateTagEdgesMutationResponse
  createTags: CreateTagsMutationResponse
  createTypeReferences: CreateTypeReferencesMutationResponse
  createUnionTypes: CreateUnionTypesMutationResponse
  deleteAppTypes: DeleteInfo
  deleteApps: DeleteInfo
  deleteArrayTypes: DeleteInfo
  deleteAtoms: DeleteInfo
  deleteCreateInfos: DeleteInfo
  deleteDeleteFieldResponses: DeleteInfo
  deleteEdges: DeleteInfo
  deleteElementTypes: DeleteInfo
  deleteElements: DeleteInfo
  deleteEnumTypeValues: DeleteInfo
  deleteEnumTypes: DeleteInfo
  deleteFieldEdge: DeleteFieldResponse
  deleteImportAtomsMutationResponses: DeleteInfo
  deleteInterfaceTypes: DeleteInfo
  deleteLambdaTypes: DeleteInfo
  deleteMonacoTypes: DeleteInfo
  deletePageTypes: DeleteInfo
  deletePages: DeleteInfo
  deletePrimitiveTypes: DeleteInfo
  deleteReactNodeTypes: DeleteInfo
  deleteRenderPropsTypes: DeleteInfo
  deleteTagEdges: DeleteInfo
  deleteTags: DeleteInfo
  deleteTypeReferences: DeleteInfo
  deleteUnionTypes: DeleteInfo
  deleteUsers: DeleteInfo
  importAtoms?: Maybe<ImportAtomsMutationResponse>
  updateAppTypes: UpdateAppTypesMutationResponse
  updateApps: UpdateAppsMutationResponse
  updateArrayTypes: UpdateArrayTypesMutationResponse
  updateAtoms: UpdateAtomsMutationResponse
  updateCreateInfos: UpdateCreateInfosMutationResponse
  updateDeleteFieldResponses: UpdateDeleteFieldResponsesMutationResponse
  updateEdges: UpdateEdgesMutationResponse
  updateElementTypes: UpdateElementTypesMutationResponse
  updateElements: UpdateElementsMutationResponse
  updateEnumTypeValues: UpdateEnumTypeValuesMutationResponse
  updateEnumTypes: UpdateEnumTypesMutationResponse
  updateImportAtomsMutationResponses: UpdateImportAtomsMutationResponsesMutationResponse
  updateInterfaceTypes: UpdateInterfaceTypesMutationResponse
  updateLambdaTypes: UpdateLambdaTypesMutationResponse
  updateMonacoTypes: UpdateMonacoTypesMutationResponse
  updatePageTypes: UpdatePageTypesMutationResponse
  updatePages: UpdatePagesMutationResponse
  updatePrimitiveTypes: UpdatePrimitiveTypesMutationResponse
  updateReactNodeTypes: UpdateReactNodeTypesMutationResponse
  updateRenderPropsTypes: UpdateRenderPropsTypesMutationResponse
  updateTagEdges: UpdateTagEdgesMutationResponse
  updateTags: UpdateTagsMutationResponse
  updateTypeReferences: UpdateTypeReferencesMutationResponse
  updateUnionTypes: UpdateUnionTypesMutationResponse
  upsertFieldEdge: InterfaceTypeEdge
}

export type MutationCreateAppTypesArgs = {
  input: Array<AppTypeCreateInput>
}

export type MutationCreateAppsArgs = {
  input: Array<AppCreateInput>
}

export type MutationCreateArrayTypesArgs = {
  input: Array<ArrayTypeCreateInput>
}

export type MutationCreateAtomsArgs = {
  input: Array<AtomCreateInput>
}

export type MutationCreateCreateInfosArgs = {
  input: Array<CreateInfoCreateInput>
}

export type MutationCreateDeleteFieldResponsesArgs = {
  input: Array<DeleteFieldResponseCreateInput>
}

export type MutationCreateEdgesArgs = {
  input: Array<EdgeCreateInput>
}

export type MutationCreateElementTypesArgs = {
  input: Array<ElementTypeCreateInput>
}

export type MutationCreateElementsArgs = {
  input: Array<ElementCreateInput>
}

export type MutationCreateEnumTypeValuesArgs = {
  input: Array<EnumTypeValueCreateInput>
}

export type MutationCreateEnumTypesArgs = {
  input: Array<EnumTypeCreateInput>
}

export type MutationCreateImportAtomsMutationResponsesArgs = {
  input: Array<ImportAtomsMutationResponseCreateInput>
}

export type MutationCreateInterfaceTypesArgs = {
  input: Array<InterfaceTypeCreateInput>
}

export type MutationCreateLambdaTypesArgs = {
  input: Array<LambdaTypeCreateInput>
}

export type MutationCreateMonacoTypesArgs = {
  input: Array<MonacoTypeCreateInput>
}

export type MutationCreatePageTypesArgs = {
  input: Array<PageTypeCreateInput>
}

export type MutationCreatePagesArgs = {
  input: Array<PageCreateInput>
}

export type MutationCreatePrimitiveTypesArgs = {
  input: Array<PrimitiveTypeCreateInput>
}

export type MutationCreateReactNodeTypesArgs = {
  input: Array<ReactNodeTypeCreateInput>
}

export type MutationCreateRenderPropsTypesArgs = {
  input: Array<RenderPropsTypeCreateInput>
}

export type MutationCreateTagEdgesArgs = {
  input: Array<TagEdgeCreateInput>
}

export type MutationCreateTagsArgs = {
  input: Array<TagCreateInput>
}

export type MutationCreateTypeReferencesArgs = {
  input: Array<TypeReferenceCreateInput>
}

export type MutationCreateUnionTypesArgs = {
  input: Array<UnionTypeCreateInput>
}

export type MutationDeleteAppTypesArgs = {
  delete?: InputMaybe<AppTypeDeleteInput>
  where?: InputMaybe<AppTypeWhere>
}

export type MutationDeleteAppsArgs = {
  delete?: InputMaybe<AppDeleteInput>
  where?: InputMaybe<AppWhere>
}

export type MutationDeleteArrayTypesArgs = {
  delete?: InputMaybe<ArrayTypeDeleteInput>
  where?: InputMaybe<ArrayTypeWhere>
}

export type MutationDeleteAtomsArgs = {
  delete?: InputMaybe<AtomDeleteInput>
  where?: InputMaybe<AtomWhere>
}

export type MutationDeleteCreateInfosArgs = {
  where?: InputMaybe<CreateInfoWhere>
}

export type MutationDeleteDeleteFieldResponsesArgs = {
  where?: InputMaybe<DeleteFieldResponseWhere>
}

export type MutationDeleteEdgesArgs = {
  where?: InputMaybe<EdgeWhere>
}

export type MutationDeleteElementTypesArgs = {
  delete?: InputMaybe<ElementTypeDeleteInput>
  where?: InputMaybe<ElementTypeWhere>
}

export type MutationDeleteElementsArgs = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ElementWhere>
}

export type MutationDeleteEnumTypeValuesArgs = {
  delete?: InputMaybe<EnumTypeValueDeleteInput>
  where?: InputMaybe<EnumTypeValueWhere>
}

export type MutationDeleteEnumTypesArgs = {
  delete?: InputMaybe<EnumTypeDeleteInput>
  where?: InputMaybe<EnumTypeWhere>
}

export type MutationDeleteFieldEdgeArgs = {
  input: DeleteFieldInput
}

export type MutationDeleteImportAtomsMutationResponsesArgs = {
  where?: InputMaybe<ImportAtomsMutationResponseWhere>
}

export type MutationDeleteInterfaceTypesArgs = {
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type MutationDeleteLambdaTypesArgs = {
  delete?: InputMaybe<LambdaTypeDeleteInput>
  where?: InputMaybe<LambdaTypeWhere>
}

export type MutationDeleteMonacoTypesArgs = {
  delete?: InputMaybe<MonacoTypeDeleteInput>
  where?: InputMaybe<MonacoTypeWhere>
}

export type MutationDeletePageTypesArgs = {
  delete?: InputMaybe<PageTypeDeleteInput>
  where?: InputMaybe<PageTypeWhere>
}

export type MutationDeletePagesArgs = {
  delete?: InputMaybe<PageDeleteInput>
  where?: InputMaybe<PageWhere>
}

export type MutationDeletePrimitiveTypesArgs = {
  delete?: InputMaybe<PrimitiveTypeDeleteInput>
  where?: InputMaybe<PrimitiveTypeWhere>
}

export type MutationDeleteReactNodeTypesArgs = {
  delete?: InputMaybe<ReactNodeTypeDeleteInput>
  where?: InputMaybe<ReactNodeTypeWhere>
}

export type MutationDeleteRenderPropsTypesArgs = {
  delete?: InputMaybe<RenderPropsTypeDeleteInput>
  where?: InputMaybe<RenderPropsTypeWhere>
}

export type MutationDeleteTagEdgesArgs = {
  where?: InputMaybe<TagEdgeWhere>
}

export type MutationDeleteTagsArgs = {
  delete?: InputMaybe<TagDeleteInput>
  where?: InputMaybe<TagWhere>
}

export type MutationDeleteTypeReferencesArgs = {
  where?: InputMaybe<TypeReferenceWhere>
}

export type MutationDeleteUnionTypesArgs = {
  delete?: InputMaybe<UnionTypeDeleteInput>
  where?: InputMaybe<UnionTypeWhere>
}

export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>
  where?: InputMaybe<UserWhere>
}

export type MutationImportAtomsArgs = {
  input: ImportAtomsInput
}

export type MutationUpdateAppTypesArgs = {
  connect?: InputMaybe<AppTypeConnectInput>
  connectOrCreate?: InputMaybe<AppTypeConnectOrCreateInput>
  create?: InputMaybe<AppTypeRelationInput>
  delete?: InputMaybe<AppTypeDeleteInput>
  disconnect?: InputMaybe<AppTypeDisconnectInput>
  update?: InputMaybe<AppTypeUpdateInput>
  where?: InputMaybe<AppTypeWhere>
}

export type MutationUpdateAppsArgs = {
  connect?: InputMaybe<AppConnectInput>
  connectOrCreate?: InputMaybe<AppConnectOrCreateInput>
  create?: InputMaybe<AppRelationInput>
  delete?: InputMaybe<AppDeleteInput>
  disconnect?: InputMaybe<AppDisconnectInput>
  update?: InputMaybe<AppUpdateInput>
  where?: InputMaybe<AppWhere>
}

export type MutationUpdateArrayTypesArgs = {
  connect?: InputMaybe<ArrayTypeConnectInput>
  connectOrCreate?: InputMaybe<ArrayTypeConnectOrCreateInput>
  create?: InputMaybe<ArrayTypeRelationInput>
  delete?: InputMaybe<ArrayTypeDeleteInput>
  disconnect?: InputMaybe<ArrayTypeDisconnectInput>
  update?: InputMaybe<ArrayTypeUpdateInput>
  where?: InputMaybe<ArrayTypeWhere>
}

export type MutationUpdateAtomsArgs = {
  connect?: InputMaybe<AtomConnectInput>
  connectOrCreate?: InputMaybe<AtomConnectOrCreateInput>
  create?: InputMaybe<AtomRelationInput>
  delete?: InputMaybe<AtomDeleteInput>
  disconnect?: InputMaybe<AtomDisconnectInput>
  update?: InputMaybe<AtomUpdateInput>
  where?: InputMaybe<AtomWhere>
}

export type MutationUpdateCreateInfosArgs = {
  update?: InputMaybe<CreateInfoUpdateInput>
  where?: InputMaybe<CreateInfoWhere>
}

export type MutationUpdateDeleteFieldResponsesArgs = {
  update?: InputMaybe<DeleteFieldResponseUpdateInput>
  where?: InputMaybe<DeleteFieldResponseWhere>
}

export type MutationUpdateEdgesArgs = {
  update?: InputMaybe<EdgeUpdateInput>
  where?: InputMaybe<EdgeWhere>
}

export type MutationUpdateElementTypesArgs = {
  connect?: InputMaybe<ElementTypeConnectInput>
  connectOrCreate?: InputMaybe<ElementTypeConnectOrCreateInput>
  create?: InputMaybe<ElementTypeRelationInput>
  delete?: InputMaybe<ElementTypeDeleteInput>
  disconnect?: InputMaybe<ElementTypeDisconnectInput>
  update?: InputMaybe<ElementTypeUpdateInput>
  where?: InputMaybe<ElementTypeWhere>
}

export type MutationUpdateElementsArgs = {
  connect?: InputMaybe<ElementConnectInput>
  connectOrCreate?: InputMaybe<ElementConnectOrCreateInput>
  create?: InputMaybe<ElementRelationInput>
  delete?: InputMaybe<ElementDeleteInput>
  disconnect?: InputMaybe<ElementDisconnectInput>
  update?: InputMaybe<ElementUpdateInput>
  where?: InputMaybe<ElementWhere>
}

export type MutationUpdateEnumTypeValuesArgs = {
  connect?: InputMaybe<EnumTypeValueConnectInput>
  connectOrCreate?: InputMaybe<EnumTypeValueConnectOrCreateInput>
  create?: InputMaybe<EnumTypeValueRelationInput>
  delete?: InputMaybe<EnumTypeValueDeleteInput>
  disconnect?: InputMaybe<EnumTypeValueDisconnectInput>
  update?: InputMaybe<EnumTypeValueUpdateInput>
  where?: InputMaybe<EnumTypeValueWhere>
}

export type MutationUpdateEnumTypesArgs = {
  connect?: InputMaybe<EnumTypeConnectInput>
  connectOrCreate?: InputMaybe<EnumTypeConnectOrCreateInput>
  create?: InputMaybe<EnumTypeRelationInput>
  delete?: InputMaybe<EnumTypeDeleteInput>
  disconnect?: InputMaybe<EnumTypeDisconnectInput>
  update?: InputMaybe<EnumTypeUpdateInput>
  where?: InputMaybe<EnumTypeWhere>
}

export type MutationUpdateImportAtomsMutationResponsesArgs = {
  update?: InputMaybe<ImportAtomsMutationResponseUpdateInput>
  where?: InputMaybe<ImportAtomsMutationResponseWhere>
}

export type MutationUpdateInterfaceTypesArgs = {
  connect?: InputMaybe<InterfaceTypeConnectInput>
  connectOrCreate?: InputMaybe<InterfaceTypeConnectOrCreateInput>
  create?: InputMaybe<InterfaceTypeRelationInput>
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  disconnect?: InputMaybe<InterfaceTypeDisconnectInput>
  update?: InputMaybe<InterfaceTypeUpdateInput>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type MutationUpdateLambdaTypesArgs = {
  connect?: InputMaybe<LambdaTypeConnectInput>
  connectOrCreate?: InputMaybe<LambdaTypeConnectOrCreateInput>
  create?: InputMaybe<LambdaTypeRelationInput>
  delete?: InputMaybe<LambdaTypeDeleteInput>
  disconnect?: InputMaybe<LambdaTypeDisconnectInput>
  update?: InputMaybe<LambdaTypeUpdateInput>
  where?: InputMaybe<LambdaTypeWhere>
}

export type MutationUpdateMonacoTypesArgs = {
  connect?: InputMaybe<MonacoTypeConnectInput>
  connectOrCreate?: InputMaybe<MonacoTypeConnectOrCreateInput>
  create?: InputMaybe<MonacoTypeRelationInput>
  delete?: InputMaybe<MonacoTypeDeleteInput>
  disconnect?: InputMaybe<MonacoTypeDisconnectInput>
  update?: InputMaybe<MonacoTypeUpdateInput>
  where?: InputMaybe<MonacoTypeWhere>
}

export type MutationUpdatePageTypesArgs = {
  connect?: InputMaybe<PageTypeConnectInput>
  connectOrCreate?: InputMaybe<PageTypeConnectOrCreateInput>
  create?: InputMaybe<PageTypeRelationInput>
  delete?: InputMaybe<PageTypeDeleteInput>
  disconnect?: InputMaybe<PageTypeDisconnectInput>
  update?: InputMaybe<PageTypeUpdateInput>
  where?: InputMaybe<PageTypeWhere>
}

export type MutationUpdatePagesArgs = {
  connect?: InputMaybe<PageConnectInput>
  connectOrCreate?: InputMaybe<PageConnectOrCreateInput>
  create?: InputMaybe<PageRelationInput>
  delete?: InputMaybe<PageDeleteInput>
  disconnect?: InputMaybe<PageDisconnectInput>
  update?: InputMaybe<PageUpdateInput>
  where?: InputMaybe<PageWhere>
}

export type MutationUpdatePrimitiveTypesArgs = {
  connect?: InputMaybe<PrimitiveTypeConnectInput>
  connectOrCreate?: InputMaybe<PrimitiveTypeConnectOrCreateInput>
  create?: InputMaybe<PrimitiveTypeRelationInput>
  delete?: InputMaybe<PrimitiveTypeDeleteInput>
  disconnect?: InputMaybe<PrimitiveTypeDisconnectInput>
  update?: InputMaybe<PrimitiveTypeUpdateInput>
  where?: InputMaybe<PrimitiveTypeWhere>
}

export type MutationUpdateReactNodeTypesArgs = {
  connect?: InputMaybe<ReactNodeTypeConnectInput>
  connectOrCreate?: InputMaybe<ReactNodeTypeConnectOrCreateInput>
  create?: InputMaybe<ReactNodeTypeRelationInput>
  delete?: InputMaybe<ReactNodeTypeDeleteInput>
  disconnect?: InputMaybe<ReactNodeTypeDisconnectInput>
  update?: InputMaybe<ReactNodeTypeUpdateInput>
  where?: InputMaybe<ReactNodeTypeWhere>
}

export type MutationUpdateRenderPropsTypesArgs = {
  connect?: InputMaybe<RenderPropsTypeConnectInput>
  connectOrCreate?: InputMaybe<RenderPropsTypeConnectOrCreateInput>
  create?: InputMaybe<RenderPropsTypeRelationInput>
  delete?: InputMaybe<RenderPropsTypeDeleteInput>
  disconnect?: InputMaybe<RenderPropsTypeDisconnectInput>
  update?: InputMaybe<RenderPropsTypeUpdateInput>
  where?: InputMaybe<RenderPropsTypeWhere>
}

export type MutationUpdateTagEdgesArgs = {
  update?: InputMaybe<TagEdgeUpdateInput>
  where?: InputMaybe<TagEdgeWhere>
}

export type MutationUpdateTagsArgs = {
  connect?: InputMaybe<TagConnectInput>
  connectOrCreate?: InputMaybe<TagConnectOrCreateInput>
  create?: InputMaybe<TagRelationInput>
  delete?: InputMaybe<TagDeleteInput>
  disconnect?: InputMaybe<TagDisconnectInput>
  update?: InputMaybe<TagUpdateInput>
  where?: InputMaybe<TagWhere>
}

export type MutationUpdateTypeReferencesArgs = {
  update?: InputMaybe<TypeReferenceUpdateInput>
  where?: InputMaybe<TypeReferenceWhere>
}

export type MutationUpdateUnionTypesArgs = {
  connect?: InputMaybe<UnionTypeConnectInput>
  connectOrCreate?: InputMaybe<UnionTypeConnectOrCreateInput>
  create?: InputMaybe<UnionTypeRelationInput>
  delete?: InputMaybe<UnionTypeDeleteInput>
  disconnect?: InputMaybe<UnionTypeDisconnectInput>
  update?: InputMaybe<UnionTypeUpdateInput>
  where?: InputMaybe<UnionTypeWhere>
}

export type MutationUpsertFieldEdgeArgs = {
  input: UpsertFieldInput
  isCreating: Scalars['Boolean']
}

export type Page = {
  __typename?: 'Page'
  app?: Maybe<App>
  appAggregate?: Maybe<PageAppAppAggregationSelection>
  appConnection: PageAppConnection
  id: Scalars['ID']
  name: Scalars['String']
  rootElement?: Maybe<Element>
  rootElementAggregate?: Maybe<PageElementRootElementAggregationSelection>
  rootElementConnection: PageRootElementConnection
}

export type PageAppArgs = {
  options?: InputMaybe<AppOptions>
  where?: InputMaybe<AppWhere>
}

export type PageAppAggregateArgs = {
  where?: InputMaybe<AppWhere>
}

export type PageAppConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<PageAppConnectionSort>>
  where?: InputMaybe<PageAppConnectionWhere>
}

export type PageRootElementArgs = {
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type PageRootElementAggregateArgs = {
  where?: InputMaybe<ElementWhere>
}

export type PageRootElementConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<PageRootElementConnectionSort>>
  where?: InputMaybe<PageRootElementConnectionWhere>
}

export type PageAggregateSelection = {
  __typename?: 'PageAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type PageAppAggregateInput = {
  AND?: InputMaybe<Array<PageAppAggregateInput>>
  OR?: InputMaybe<Array<PageAppAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<PageAppNodeAggregationWhereInput>
}

export type PageAppAppAggregationSelection = {
  __typename?: 'PageAppAppAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<PageAppAppNodeAggregateSelection>
}

export type PageAppAppNodeAggregateSelection = {
  __typename?: 'PageAppAppNodeAggregateSelection'
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type PageAppConnectFieldInput = {
  connect?: InputMaybe<AppConnectInput>
  where?: InputMaybe<AppConnectWhere>
}

export type PageAppConnectOrCreateFieldInput = {
  onCreate: PageAppConnectOrCreateFieldInputOnCreate
  where: AppConnectOrCreateWhere
}

export type PageAppConnectOrCreateFieldInputOnCreate = {
  node: AppCreateInput
}

export type PageAppConnection = {
  __typename?: 'PageAppConnection'
  edges: Array<PageAppRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type PageAppConnectionSort = {
  node?: InputMaybe<AppSort>
}

export type PageAppConnectionWhere = {
  AND?: InputMaybe<Array<PageAppConnectionWhere>>
  OR?: InputMaybe<Array<PageAppConnectionWhere>>
  node?: InputMaybe<AppWhere>
  node_NOT?: InputMaybe<AppWhere>
}

export type PageAppCreateFieldInput = {
  node: AppCreateInput
}

export type PageAppDeleteFieldInput = {
  delete?: InputMaybe<AppDeleteInput>
  where?: InputMaybe<PageAppConnectionWhere>
}

export type PageAppDisconnectFieldInput = {
  disconnect?: InputMaybe<AppDisconnectInput>
  where?: InputMaybe<PageAppConnectionWhere>
}

export type PageAppFieldInput = {
  connect?: InputMaybe<PageAppConnectFieldInput>
  connectOrCreate?: InputMaybe<PageAppConnectOrCreateFieldInput>
  create?: InputMaybe<PageAppCreateFieldInput>
}

export type PageAppNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PageAppNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<PageAppNodeAggregationWhereInput>>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type PageAppRelationship = {
  __typename?: 'PageAppRelationship'
  cursor: Scalars['String']
  node: App
}

export type PageAppUpdateConnectionInput = {
  node?: InputMaybe<AppUpdateInput>
}

export type PageAppUpdateFieldInput = {
  connect?: InputMaybe<PageAppConnectFieldInput>
  connectOrCreate?: InputMaybe<PageAppConnectOrCreateFieldInput>
  create?: InputMaybe<PageAppCreateFieldInput>
  delete?: InputMaybe<PageAppDeleteFieldInput>
  disconnect?: InputMaybe<PageAppDisconnectFieldInput>
  update?: InputMaybe<PageAppUpdateConnectionInput>
  where?: InputMaybe<PageAppConnectionWhere>
}

export type PageConnectInput = {
  app?: InputMaybe<PageAppConnectFieldInput>
  rootElement?: InputMaybe<PageRootElementConnectFieldInput>
}

export type PageConnectOrCreateInput = {
  app?: InputMaybe<PageAppConnectOrCreateFieldInput>
  rootElement?: InputMaybe<PageRootElementConnectOrCreateFieldInput>
}

export type PageConnectOrCreateWhere = {
  node: PageUniqueWhere
}

export type PageConnectWhere = {
  node: PageWhere
}

export type PageCreateInput = {
  app?: InputMaybe<PageAppFieldInput>
  name: Scalars['String']
  rootElement?: InputMaybe<PageRootElementFieldInput>
}

export type PageDeleteInput = {
  app?: InputMaybe<PageAppDeleteFieldInput>
  rootElement?: InputMaybe<PageRootElementDeleteFieldInput>
}

export type PageDisconnectInput = {
  app?: InputMaybe<PageAppDisconnectFieldInput>
  rootElement?: InputMaybe<PageRootElementDisconnectFieldInput>
}

export type PageElementRootElementAggregationSelection = {
  __typename?: 'PageElementRootElementAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<PageElementRootElementNodeAggregateSelection>
}

export type PageElementRootElementNodeAggregateSelection = {
  __typename?: 'PageElementRootElementNodeAggregateSelection'
  createdAt: DateTimeAggregateSelection
  id: IdAggregateSelection
  name: StringAggregateSelection
  ownerId: StringAggregateSelection
  updatedAt: DateTimeAggregateSelection
}

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

export type PageOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more PageSort objects to sort Pages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<PageSort>>>
}

export type PageRelationInput = {
  app?: InputMaybe<PageAppCreateFieldInput>
  rootElement?: InputMaybe<PageRootElementCreateFieldInput>
}

export type PageRootElementAggregateInput = {
  AND?: InputMaybe<Array<PageRootElementAggregateInput>>
  OR?: InputMaybe<Array<PageRootElementAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<PageRootElementNodeAggregationWhereInput>
}

export type PageRootElementConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  where?: InputMaybe<ElementConnectWhere>
}

export type PageRootElementConnectOrCreateFieldInput = {
  onCreate: PageRootElementConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type PageRootElementConnectOrCreateFieldInputOnCreate = {
  node: ElementCreateInput
}

export type PageRootElementConnection = {
  __typename?: 'PageRootElementConnection'
  edges: Array<PageRootElementRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type PageRootElementConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type PageRootElementConnectionWhere = {
  AND?: InputMaybe<Array<PageRootElementConnectionWhere>>
  OR?: InputMaybe<Array<PageRootElementConnectionWhere>>
  node?: InputMaybe<ElementWhere>
  node_NOT?: InputMaybe<ElementWhere>
}

export type PageRootElementCreateFieldInput = {
  node: ElementCreateInput
}

export type PageRootElementDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<PageRootElementConnectionWhere>
}

export type PageRootElementDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<PageRootElementConnectionWhere>
}

export type PageRootElementFieldInput = {
  connect?: InputMaybe<PageRootElementConnectFieldInput>
  connectOrCreate?: InputMaybe<PageRootElementConnectOrCreateFieldInput>
  create?: InputMaybe<PageRootElementCreateFieldInput>
}

export type PageRootElementNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PageRootElementNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<PageRootElementNodeAggregationWhereInput>>
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>
  createdAt_GT?: InputMaybe<Scalars['DateTime']>
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>
  createdAt_LT?: InputMaybe<Scalars['DateTime']>
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  ownerId_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  ownerId_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  ownerId_EQUAL?: InputMaybe<Scalars['String']>
  ownerId_GT?: InputMaybe<Scalars['Int']>
  ownerId_GTE?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_GT?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_LT?: InputMaybe<Scalars['Int']>
  ownerId_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  ownerId_LT?: InputMaybe<Scalars['Int']>
  ownerId_LTE?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  ownerId_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>
}

export type PageRootElementRelationship = {
  __typename?: 'PageRootElementRelationship'
  cursor: Scalars['String']
  node: Element
}

export type PageRootElementUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type PageRootElementUpdateFieldInput = {
  connect?: InputMaybe<PageRootElementConnectFieldInput>
  connectOrCreate?: InputMaybe<PageRootElementConnectOrCreateFieldInput>
  create?: InputMaybe<PageRootElementCreateFieldInput>
  delete?: InputMaybe<PageRootElementDeleteFieldInput>
  disconnect?: InputMaybe<PageRootElementDisconnectFieldInput>
  update?: InputMaybe<PageRootElementUpdateConnectionInput>
  where?: InputMaybe<PageRootElementConnectionWhere>
}

/** Fields to sort Pages by. The order in which sorts are applied is not guaranteed when specifying many fields in one PageSort object. */
export type PageSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

/** Allows picking a page from the list of pages */
export type PageType = TypeBase & {
  __typename?: 'PageType'
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<PageTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
}

/** Allows picking a page from the list of pages */
export type PageTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a page from the list of pages */
export type PageTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/** Allows picking a page from the list of pages */
export type PageTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type PageTypeAggregateSelection = {
  __typename?: 'PageTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type PageTypeConnectInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type PageTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type PageTypeCreateInput = {
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
}

export type PageTypeDeleteInput = {
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type PageTypeDisconnectInput = {
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export type PageTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more PageTypeSort objects to sort PageTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<PageTypeSort>>>
}

export type PageTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<PageTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<PageTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<PageTypeOwnerNodeAggregationWhereInput>
}

export type PageTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PageTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<PageTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type PageTypeRelationInput = {
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort PageTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one PageTypeSort object. */
export type PageTypeSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type PageTypeUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type PageTypeUserOwnerAggregationSelection = {
  __typename?: 'PageTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<PageTypeUserOwnerNodeAggregateSelection>
}

export type PageTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'PageTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type PageTypeWhere = {
  AND?: InputMaybe<Array<PageTypeWhere>>
  OR?: InputMaybe<Array<PageTypeWhere>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<PageTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type PageUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>
}

export type PageUpdateInput = {
  app?: InputMaybe<PageAppUpdateFieldInput>
  name?: InputMaybe<Scalars['String']>
  rootElement?: InputMaybe<PageRootElementUpdateFieldInput>
}

export type PageWhere = {
  AND?: InputMaybe<Array<PageWhere>>
  OR?: InputMaybe<Array<PageWhere>>
  app?: InputMaybe<AppWhere>
  appAggregate?: InputMaybe<PageAppAggregateInput>
  appConnection?: InputMaybe<PageAppConnectionWhere>
  appConnection_NOT?: InputMaybe<PageAppConnectionWhere>
  app_NOT?: InputMaybe<AppWhere>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  rootElement?: InputMaybe<ElementWhere>
  rootElementAggregate?: InputMaybe<PageRootElementAggregateInput>
  rootElementConnection?: InputMaybe<PageRootElementConnectionWhere>
  rootElementConnection_NOT?: InputMaybe<PageRootElementConnectionWhere>
  rootElement_NOT?: InputMaybe<ElementWhere>
}

/** Base atomic building block of the type system. Represents primitive types - String, Integer, Float, Boolean */
export type PrimitiveType = TypeBase & {
  __typename?: 'PrimitiveType'
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<PrimitiveTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
  primitiveKind: PrimitiveTypeKind
}

/** Base atomic building block of the type system. Represents primitive types - String, Integer, Float, Boolean */
export type PrimitiveTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Base atomic building block of the type system. Represents primitive types - String, Integer, Float, Boolean */
export type PrimitiveTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/** Base atomic building block of the type system. Represents primitive types - String, Integer, Float, Boolean */
export type PrimitiveTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type PrimitiveTypeAggregateSelection = {
  __typename?: 'PrimitiveTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type PrimitiveTypeConnectInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type PrimitiveTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type PrimitiveTypeCreateInput = {
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
  primitiveKind: PrimitiveTypeKind
}

export type PrimitiveTypeDeleteInput = {
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type PrimitiveTypeDisconnectInput = {
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export enum PrimitiveTypeKind {
  Boolean = 'Boolean',
  Float = 'Float',
  Integer = 'Integer',
  String = 'String',
}

export type PrimitiveTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more PrimitiveTypeSort objects to sort PrimitiveTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<PrimitiveTypeSort>>>
}

export type PrimitiveTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<PrimitiveTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<PrimitiveTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<PrimitiveTypeOwnerNodeAggregationWhereInput>
}

export type PrimitiveTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PrimitiveTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<PrimitiveTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type PrimitiveTypeRelationInput = {
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort PrimitiveTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one PrimitiveTypeSort object. */
export type PrimitiveTypeSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  primitiveKind?: InputMaybe<SortDirection>
}

export type PrimitiveTypeUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
  primitiveKind?: InputMaybe<PrimitiveTypeKind>
}

export type PrimitiveTypeUserOwnerAggregationSelection = {
  __typename?: 'PrimitiveTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<PrimitiveTypeUserOwnerNodeAggregateSelection>
}

export type PrimitiveTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'PrimitiveTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type PrimitiveTypeWhere = {
  AND?: InputMaybe<Array<PrimitiveTypeWhere>>
  OR?: InputMaybe<Array<PrimitiveTypeWhere>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<PrimitiveTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
  primitiveKind?: InputMaybe<PrimitiveTypeKind>
  primitiveKind_IN?: InputMaybe<Array<InputMaybe<PrimitiveTypeKind>>>
  primitiveKind_NOT?: InputMaybe<PrimitiveTypeKind>
  primitiveKind_NOT_IN?: InputMaybe<Array<InputMaybe<PrimitiveTypeKind>>>
}

export type Query = {
  __typename?: 'Query'
  appTypes: Array<AppType>
  appTypesAggregate: AppTypeAggregateSelection
  appTypesCount: Scalars['Int']
  apps: Array<App>
  appsAggregate: AppAggregateSelection
  appsCount: Scalars['Int']
  arrayTypes: Array<ArrayType>
  arrayTypesAggregate: ArrayTypeAggregateSelection
  arrayTypesCount: Scalars['Int']
  atoms: Array<Atom>
  atomsAggregate: AtomAggregateSelection
  atomsCount: Scalars['Int']
  createInfos: Array<CreateInfo>
  createInfosAggregate: CreateInfoAggregateSelection
  createInfosCount: Scalars['Int']
  deleteFieldResponses: Array<DeleteFieldResponse>
  deleteFieldResponsesAggregate: DeleteFieldResponseAggregateSelection
  deleteFieldResponsesCount: Scalars['Int']
  edges: Array<Edge>
  edgesAggregate: EdgeAggregateSelection
  edgesCount: Scalars['Int']
  elementTypes: Array<ElementType>
  elementTypesAggregate: ElementTypeAggregateSelection
  elementTypesCount: Scalars['Int']
  elements: Array<Element>
  elementsAggregate: ElementAggregateSelection
  elementsCount: Scalars['Int']
  enumTypeValues: Array<EnumTypeValue>
  enumTypeValuesAggregate: EnumTypeValueAggregateSelection
  enumTypeValuesCount: Scalars['Int']
  enumTypes: Array<EnumType>
  enumTypesAggregate: EnumTypeAggregateSelection
  enumTypesCount: Scalars['Int']
  getField: InterfaceTypeEdge
  /**
   * Returns a list of all Type and Atom entities that reference the type with the given id
   * This could be different types of relationships like Atom-Api, ArrayType-itemType, InterfaceType-field, UnionType-unionTypeChild
   */
  getTypeReferences?: Maybe<Array<TypeReference>>
  importAtomsMutationResponses: Array<ImportAtomsMutationResponse>
  importAtomsMutationResponsesAggregate: ImportAtomsMutationResponseAggregateSelection
  importAtomsMutationResponsesCount: Scalars['Int']
  interfaceTypes: Array<InterfaceType>
  interfaceTypesAggregate: InterfaceTypeAggregateSelection
  interfaceTypesCount: Scalars['Int']
  /** Does a recursive check to see if the parent type (parentTypeId) contains the descendant type (descendantTypeId) at any level of nesting. Useful for checking for recursion */
  isTypeDescendantOf?: Maybe<Scalars['Boolean']>
  lambdaTypes: Array<LambdaType>
  lambdaTypesAggregate: LambdaTypeAggregateSelection
  lambdaTypesCount: Scalars['Int']
  monacoTypes: Array<MonacoType>
  monacoTypesAggregate: MonacoTypeAggregateSelection
  monacoTypesCount: Scalars['Int']
  pageTypes: Array<PageType>
  pageTypesAggregate: PageTypeAggregateSelection
  pageTypesCount: Scalars['Int']
  pages: Array<Page>
  pagesAggregate: PageAggregateSelection
  pagesCount: Scalars['Int']
  primitiveTypes: Array<PrimitiveType>
  primitiveTypesAggregate: PrimitiveTypeAggregateSelection
  primitiveTypesCount: Scalars['Int']
  reactNodeTypes: Array<ReactNodeType>
  reactNodeTypesAggregate: ReactNodeTypeAggregateSelection
  reactNodeTypesCount: Scalars['Int']
  renderPropsTypes: Array<RenderPropsType>
  renderPropsTypesAggregate: RenderPropsTypeAggregateSelection
  renderPropsTypesCount: Scalars['Int']
  tagEdges: Array<TagEdge>
  tagEdgesAggregate: TagEdgeAggregateSelection
  tagEdgesCount: Scalars['Int']
  tagGraphs?: Maybe<TagGraph>
  tags: Array<Tag>
  tagsAggregate: TagAggregateSelection
  tagsCount: Scalars['Int']
  typeReferences: Array<TypeReference>
  typeReferencesAggregate: TypeReferenceAggregateSelection
  typeReferencesCount: Scalars['Int']
  unionTypes: Array<UnionType>
  unionTypesAggregate: UnionTypeAggregateSelection
  unionTypesCount: Scalars['Int']
  users: Array<User>
  usersAggregate: UserAggregateSelection
  usersCount: Scalars['Int']
}

export type QueryAppTypesArgs = {
  options?: InputMaybe<AppTypeOptions>
  where?: InputMaybe<AppTypeWhere>
}

export type QueryAppTypesAggregateArgs = {
  where?: InputMaybe<AppTypeWhere>
}

export type QueryAppTypesCountArgs = {
  where?: InputMaybe<AppTypeWhere>
}

export type QueryAppsArgs = {
  options?: InputMaybe<AppOptions>
  where?: InputMaybe<AppWhere>
}

export type QueryAppsAggregateArgs = {
  where?: InputMaybe<AppWhere>
}

export type QueryAppsCountArgs = {
  where?: InputMaybe<AppWhere>
}

export type QueryArrayTypesArgs = {
  options?: InputMaybe<ArrayTypeOptions>
  where?: InputMaybe<ArrayTypeWhere>
}

export type QueryArrayTypesAggregateArgs = {
  where?: InputMaybe<ArrayTypeWhere>
}

export type QueryArrayTypesCountArgs = {
  where?: InputMaybe<ArrayTypeWhere>
}

export type QueryAtomsArgs = {
  options?: InputMaybe<AtomOptions>
  where?: InputMaybe<AtomWhere>
}

export type QueryAtomsAggregateArgs = {
  where?: InputMaybe<AtomWhere>
}

export type QueryAtomsCountArgs = {
  where?: InputMaybe<AtomWhere>
}

export type QueryCreateInfosArgs = {
  options?: InputMaybe<CreateInfoOptions>
  where?: InputMaybe<CreateInfoWhere>
}

export type QueryCreateInfosAggregateArgs = {
  where?: InputMaybe<CreateInfoWhere>
}

export type QueryCreateInfosCountArgs = {
  where?: InputMaybe<CreateInfoWhere>
}

export type QueryDeleteFieldResponsesArgs = {
  options?: InputMaybe<DeleteFieldResponseOptions>
  where?: InputMaybe<DeleteFieldResponseWhere>
}

export type QueryDeleteFieldResponsesAggregateArgs = {
  where?: InputMaybe<DeleteFieldResponseWhere>
}

export type QueryDeleteFieldResponsesCountArgs = {
  where?: InputMaybe<DeleteFieldResponseWhere>
}

export type QueryEdgesArgs = {
  options?: InputMaybe<EdgeOptions>
  where?: InputMaybe<EdgeWhere>
}

export type QueryEdgesAggregateArgs = {
  where?: InputMaybe<EdgeWhere>
}

export type QueryEdgesCountArgs = {
  where?: InputMaybe<EdgeWhere>
}

export type QueryElementTypesArgs = {
  options?: InputMaybe<ElementTypeOptions>
  where?: InputMaybe<ElementTypeWhere>
}

export type QueryElementTypesAggregateArgs = {
  where?: InputMaybe<ElementTypeWhere>
}

export type QueryElementTypesCountArgs = {
  where?: InputMaybe<ElementTypeWhere>
}

export type QueryElementsArgs = {
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type QueryElementsAggregateArgs = {
  where?: InputMaybe<ElementWhere>
}

export type QueryElementsCountArgs = {
  where?: InputMaybe<ElementWhere>
}

export type QueryEnumTypeValuesArgs = {
  options?: InputMaybe<EnumTypeValueOptions>
  where?: InputMaybe<EnumTypeValueWhere>
}

export type QueryEnumTypeValuesAggregateArgs = {
  where?: InputMaybe<EnumTypeValueWhere>
}

export type QueryEnumTypeValuesCountArgs = {
  where?: InputMaybe<EnumTypeValueWhere>
}

export type QueryEnumTypesArgs = {
  options?: InputMaybe<EnumTypeOptions>
  where?: InputMaybe<EnumTypeWhere>
}

export type QueryEnumTypesAggregateArgs = {
  where?: InputMaybe<EnumTypeWhere>
}

export type QueryEnumTypesCountArgs = {
  where?: InputMaybe<EnumTypeWhere>
}

export type QueryGetFieldArgs = {
  interfaceId: Scalars['ID']
  key: Scalars['String']
}

export type QueryGetTypeReferencesArgs = {
  typeId: Scalars['ID']
}

export type QueryImportAtomsMutationResponsesArgs = {
  options?: InputMaybe<ImportAtomsMutationResponseOptions>
  where?: InputMaybe<ImportAtomsMutationResponseWhere>
}

export type QueryImportAtomsMutationResponsesAggregateArgs = {
  where?: InputMaybe<ImportAtomsMutationResponseWhere>
}

export type QueryImportAtomsMutationResponsesCountArgs = {
  where?: InputMaybe<ImportAtomsMutationResponseWhere>
}

export type QueryInterfaceTypesArgs = {
  options?: InputMaybe<InterfaceTypeOptions>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type QueryInterfaceTypesAggregateArgs = {
  where?: InputMaybe<InterfaceTypeWhere>
}

export type QueryInterfaceTypesCountArgs = {
  where?: InputMaybe<InterfaceTypeWhere>
}

export type QueryIsTypeDescendantOfArgs = {
  descendantTypeId: Scalars['ID']
  parentTypeId: Scalars['ID']
}

export type QueryLambdaTypesArgs = {
  options?: InputMaybe<LambdaTypeOptions>
  where?: InputMaybe<LambdaTypeWhere>
}

export type QueryLambdaTypesAggregateArgs = {
  where?: InputMaybe<LambdaTypeWhere>
}

export type QueryLambdaTypesCountArgs = {
  where?: InputMaybe<LambdaTypeWhere>
}

export type QueryMonacoTypesArgs = {
  options?: InputMaybe<MonacoTypeOptions>
  where?: InputMaybe<MonacoTypeWhere>
}

export type QueryMonacoTypesAggregateArgs = {
  where?: InputMaybe<MonacoTypeWhere>
}

export type QueryMonacoTypesCountArgs = {
  where?: InputMaybe<MonacoTypeWhere>
}

export type QueryPageTypesArgs = {
  options?: InputMaybe<PageTypeOptions>
  where?: InputMaybe<PageTypeWhere>
}

export type QueryPageTypesAggregateArgs = {
  where?: InputMaybe<PageTypeWhere>
}

export type QueryPageTypesCountArgs = {
  where?: InputMaybe<PageTypeWhere>
}

export type QueryPagesArgs = {
  options?: InputMaybe<PageOptions>
  where?: InputMaybe<PageWhere>
}

export type QueryPagesAggregateArgs = {
  where?: InputMaybe<PageWhere>
}

export type QueryPagesCountArgs = {
  where?: InputMaybe<PageWhere>
}

export type QueryPrimitiveTypesArgs = {
  options?: InputMaybe<PrimitiveTypeOptions>
  where?: InputMaybe<PrimitiveTypeWhere>
}

export type QueryPrimitiveTypesAggregateArgs = {
  where?: InputMaybe<PrimitiveTypeWhere>
}

export type QueryPrimitiveTypesCountArgs = {
  where?: InputMaybe<PrimitiveTypeWhere>
}

export type QueryReactNodeTypesArgs = {
  options?: InputMaybe<ReactNodeTypeOptions>
  where?: InputMaybe<ReactNodeTypeWhere>
}

export type QueryReactNodeTypesAggregateArgs = {
  where?: InputMaybe<ReactNodeTypeWhere>
}

export type QueryReactNodeTypesCountArgs = {
  where?: InputMaybe<ReactNodeTypeWhere>
}

export type QueryRenderPropsTypesArgs = {
  options?: InputMaybe<RenderPropsTypeOptions>
  where?: InputMaybe<RenderPropsTypeWhere>
}

export type QueryRenderPropsTypesAggregateArgs = {
  where?: InputMaybe<RenderPropsTypeWhere>
}

export type QueryRenderPropsTypesCountArgs = {
  where?: InputMaybe<RenderPropsTypeWhere>
}

export type QueryTagEdgesArgs = {
  options?: InputMaybe<TagEdgeOptions>
  where?: InputMaybe<TagEdgeWhere>
}

export type QueryTagEdgesAggregateArgs = {
  where?: InputMaybe<TagEdgeWhere>
}

export type QueryTagEdgesCountArgs = {
  where?: InputMaybe<TagEdgeWhere>
}

export type QueryTagsArgs = {
  options?: InputMaybe<TagOptions>
  where?: InputMaybe<TagWhere>
}

export type QueryTagsAggregateArgs = {
  where?: InputMaybe<TagWhere>
}

export type QueryTagsCountArgs = {
  where?: InputMaybe<TagWhere>
}

export type QueryTypeReferencesArgs = {
  options?: InputMaybe<TypeReferenceOptions>
  where?: InputMaybe<TypeReferenceWhere>
}

export type QueryTypeReferencesAggregateArgs = {
  where?: InputMaybe<TypeReferenceWhere>
}

export type QueryTypeReferencesCountArgs = {
  where?: InputMaybe<TypeReferenceWhere>
}

export type QueryUnionTypesArgs = {
  options?: InputMaybe<UnionTypeOptions>
  where?: InputMaybe<UnionTypeWhere>
}

export type QueryUnionTypesAggregateArgs = {
  where?: InputMaybe<UnionTypeWhere>
}

export type QueryUnionTypesCountArgs = {
  where?: InputMaybe<UnionTypeWhere>
}

export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

export type QueryUsersCountArgs = {
  where?: InputMaybe<UserWhere>
}

export type QueryOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a React node: `ReactNode`
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type ReactNodeType = TypeBase & {
  __typename?: 'ReactNodeType'
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<ReactNodeTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a React node: `ReactNode`
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type ReactNodeTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a React node: `ReactNode`
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type ReactNodeTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a React node: `ReactNode`
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type ReactNodeTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type ReactNodeTypeAggregateSelection = {
  __typename?: 'ReactNodeTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type ReactNodeTypeConnectInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type ReactNodeTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type ReactNodeTypeCreateInput = {
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
}

export type ReactNodeTypeDeleteInput = {
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type ReactNodeTypeDisconnectInput = {
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export type ReactNodeTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more ReactNodeTypeSort objects to sort ReactNodeTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<ReactNodeTypeSort>>>
}

export type ReactNodeTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<ReactNodeTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<ReactNodeTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<ReactNodeTypeOwnerNodeAggregationWhereInput>
}

export type ReactNodeTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReactNodeTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<ReactNodeTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type ReactNodeTypeRelationInput = {
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort ReactNodeTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ReactNodeTypeSort object. */
export type ReactNodeTypeSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type ReactNodeTypeUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type ReactNodeTypeUserOwnerAggregationSelection = {
  __typename?: 'ReactNodeTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<ReactNodeTypeUserOwnerNodeAggregateSelection>
}

export type ReactNodeTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'ReactNodeTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type ReactNodeTypeWhere = {
  AND?: InputMaybe<Array<ReactNodeTypeWhere>>
  OR?: InputMaybe<Array<ReactNodeTypeWhere>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<ReactNodeTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a function that takes props as input
 * and returns a React element: '(props) => ReactNode'
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type RenderPropsType = TypeBase & {
  __typename?: 'RenderPropsType'
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<RenderPropsTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a function that takes props as input
 * and returns a React element: '(props) => ReactNode'
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type RenderPropsTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a function that takes props as input
 * and returns a React element: '(props) => ReactNode'
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type RenderPropsTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a function that takes props as input
 * and returns a React element: '(props) => ReactNode'
 * Prop values for this type have the shape of TypedValue in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropsType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNod' value
 */
export type RenderPropsTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type RenderPropsTypeAggregateSelection = {
  __typename?: 'RenderPropsTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type RenderPropsTypeConnectInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type RenderPropsTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type RenderPropsTypeCreateInput = {
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
}

export type RenderPropsTypeDeleteInput = {
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type RenderPropsTypeDisconnectInput = {
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export type RenderPropsTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more RenderPropsTypeSort objects to sort RenderPropsTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<RenderPropsTypeSort>>>
}

export type RenderPropsTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<RenderPropsTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<RenderPropsTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<RenderPropsTypeOwnerNodeAggregationWhereInput>
}

export type RenderPropsTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RenderPropsTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<RenderPropsTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type RenderPropsTypeRelationInput = {
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

/** Fields to sort RenderPropsTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one RenderPropsTypeSort object. */
export type RenderPropsTypeSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type RenderPropsTypeUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type RenderPropsTypeUserOwnerAggregationSelection = {
  __typename?: 'RenderPropsTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<RenderPropsTypeUserOwnerNodeAggregateSelection>
}

export type RenderPropsTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'RenderPropsTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type RenderPropsTypeWhere = {
  AND?: InputMaybe<Array<RenderPropsTypeWhere>>
  OR?: InputMaybe<Array<RenderPropsTypeWhere>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<RenderPropsTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  ASC = 'ASC',
  /** Sort by field values in descending order. */
  DESC = 'DESC',
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection'
  longest?: Maybe<Scalars['String']>
  shortest?: Maybe<Scalars['String']>
}

export type Tag = {
  __typename?: 'Tag'
  children?: Maybe<Array<Maybe<Tag>>>
  childrenAggregate?: Maybe<TagTagChildrenAggregationSelection>
  childrenConnection: TagChildrenConnection
  id: Scalars['ID']
  isRoot?: Maybe<Scalars['Boolean']>
  name: Scalars['String']
  parent?: Maybe<Tag>
  parentAggregate?: Maybe<TagTagParentAggregationSelection>
  parentConnection: TagParentConnection
}

export type TagChildrenArgs = {
  options?: InputMaybe<TagOptions>
  where?: InputMaybe<TagWhere>
}

export type TagChildrenAggregateArgs = {
  where?: InputMaybe<TagWhere>
}

export type TagChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TagChildrenConnectionSort>>
  where?: InputMaybe<TagChildrenConnectionWhere>
}

export type TagParentArgs = {
  options?: InputMaybe<TagOptions>
  where?: InputMaybe<TagWhere>
}

export type TagParentAggregateArgs = {
  where?: InputMaybe<TagWhere>
}

export type TagParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TagParentConnectionSort>>
  where?: InputMaybe<TagParentConnectionWhere>
}

export type TagAggregateSelection = {
  __typename?: 'TagAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type TagChildrenAggregateInput = {
  AND?: InputMaybe<Array<TagChildrenAggregateInput>>
  OR?: InputMaybe<Array<TagChildrenAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<TagChildrenNodeAggregationWhereInput>
}

export type TagChildrenConnectFieldInput = {
  connect?: InputMaybe<Array<TagConnectInput>>
  where?: InputMaybe<TagConnectWhere>
}

export type TagChildrenConnectOrCreateFieldInput = {
  onCreate: TagChildrenConnectOrCreateFieldInputOnCreate
  where: TagConnectOrCreateWhere
}

export type TagChildrenConnectOrCreateFieldInputOnCreate = {
  node: TagCreateInput
}

export type TagChildrenConnection = {
  __typename?: 'TagChildrenConnection'
  edges: Array<TagChildrenRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type TagChildrenConnectionSort = {
  node?: InputMaybe<TagSort>
}

export type TagChildrenConnectionWhere = {
  AND?: InputMaybe<Array<TagChildrenConnectionWhere>>
  OR?: InputMaybe<Array<TagChildrenConnectionWhere>>
  node?: InputMaybe<TagWhere>
  node_NOT?: InputMaybe<TagWhere>
}

export type TagChildrenCreateFieldInput = {
  node: TagCreateInput
}

export type TagChildrenDeleteFieldInput = {
  delete?: InputMaybe<TagDeleteInput>
  where?: InputMaybe<TagChildrenConnectionWhere>
}

export type TagChildrenDisconnectFieldInput = {
  disconnect?: InputMaybe<TagDisconnectInput>
  where?: InputMaybe<TagChildrenConnectionWhere>
}

export type TagChildrenFieldInput = {
  connect?: InputMaybe<Array<TagChildrenConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<TagChildrenConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<TagChildrenCreateFieldInput>>
}

export type TagChildrenNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagChildrenNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TagChildrenNodeAggregationWhereInput>>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type TagChildrenRelationship = {
  __typename?: 'TagChildrenRelationship'
  cursor: Scalars['String']
  node: Tag
}

export type TagChildrenUpdateConnectionInput = {
  node?: InputMaybe<TagUpdateInput>
}

export type TagChildrenUpdateFieldInput = {
  connect?: InputMaybe<Array<TagChildrenConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<TagChildrenConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<TagChildrenCreateFieldInput>>
  delete?: InputMaybe<Array<TagChildrenDeleteFieldInput>>
  disconnect?: InputMaybe<Array<TagChildrenDisconnectFieldInput>>
  update?: InputMaybe<TagChildrenUpdateConnectionInput>
  where?: InputMaybe<TagChildrenConnectionWhere>
}

export type TagConnectInput = {
  children?: InputMaybe<Array<TagChildrenConnectFieldInput>>
  parent?: InputMaybe<TagParentConnectFieldInput>
}

export type TagConnectOrCreateInput = {
  children?: InputMaybe<Array<TagChildrenConnectOrCreateFieldInput>>
  parent?: InputMaybe<TagParentConnectOrCreateFieldInput>
}

export type TagConnectOrCreateWhere = {
  node: TagUniqueWhere
}

export type TagConnectWhere = {
  node: TagWhere
}

export type TagCreateInput = {
  children?: InputMaybe<TagChildrenFieldInput>
  isRoot?: InputMaybe<Scalars['Boolean']>
  name: Scalars['String']
  parent?: InputMaybe<TagParentFieldInput>
}

export type TagDeleteInput = {
  children?: InputMaybe<Array<TagChildrenDeleteFieldInput>>
  parent?: InputMaybe<TagParentDeleteFieldInput>
}

export type TagDisconnectInput = {
  children?: InputMaybe<Array<TagChildrenDisconnectFieldInput>>
  parent?: InputMaybe<TagParentDisconnectFieldInput>
}

export type TagEdge = {
  __typename?: 'TagEdge'
  source: Scalars['ID']
  target: Scalars['ID']
}

export type TagEdgeAggregateSelection = {
  __typename?: 'TagEdgeAggregateSelection'
  count: Scalars['Int']
  source: IdAggregateSelection
  target: IdAggregateSelection
}

export type TagEdgeCreateInput = {
  source: Scalars['ID']
  target: Scalars['ID']
}

export type TagEdgeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more TagEdgeSort objects to sort TagEdges by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<TagEdgeSort>>>
}

/** Fields to sort TagEdges by. The order in which sorts are applied is not guaranteed when specifying many fields in one TagEdgeSort object. */
export type TagEdgeSort = {
  source?: InputMaybe<SortDirection>
  target?: InputMaybe<SortDirection>
}

export type TagEdgeUpdateInput = {
  source?: InputMaybe<Scalars['ID']>
  target?: InputMaybe<Scalars['ID']>
}

export type TagEdgeWhere = {
  AND?: InputMaybe<Array<TagEdgeWhere>>
  OR?: InputMaybe<Array<TagEdgeWhere>>
  source?: InputMaybe<Scalars['ID']>
  source_CONTAINS?: InputMaybe<Scalars['ID']>
  source_ENDS_WITH?: InputMaybe<Scalars['ID']>
  source_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  source_NOT?: InputMaybe<Scalars['ID']>
  source_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  source_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  source_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  source_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  source_STARTS_WITH?: InputMaybe<Scalars['ID']>
  target?: InputMaybe<Scalars['ID']>
  target_CONTAINS?: InputMaybe<Scalars['ID']>
  target_ENDS_WITH?: InputMaybe<Scalars['ID']>
  target_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  target_NOT?: InputMaybe<Scalars['ID']>
  target_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  target_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  target_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  target_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  target_STARTS_WITH?: InputMaybe<Scalars['ID']>
}

export type TagGraph = {
  __typename?: 'TagGraph'
  /** All the links connecting the descendant elements/components */
  edges: Array<TagEdge>
  /** All descendant Elements or Components, at any level */
  vertices: Array<Tag>
}

export type TagOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more TagSort objects to sort Tags by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<TagSort>>>
}

export type TagParentAggregateInput = {
  AND?: InputMaybe<Array<TagParentAggregateInput>>
  OR?: InputMaybe<Array<TagParentAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<TagParentNodeAggregationWhereInput>
}

export type TagParentConnectFieldInput = {
  connect?: InputMaybe<TagConnectInput>
  where?: InputMaybe<TagConnectWhere>
}

export type TagParentConnectOrCreateFieldInput = {
  onCreate: TagParentConnectOrCreateFieldInputOnCreate
  where: TagConnectOrCreateWhere
}

export type TagParentConnectOrCreateFieldInputOnCreate = {
  node: TagCreateInput
}

export type TagParentConnection = {
  __typename?: 'TagParentConnection'
  edges: Array<TagParentRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type TagParentConnectionSort = {
  node?: InputMaybe<TagSort>
}

export type TagParentConnectionWhere = {
  AND?: InputMaybe<Array<TagParentConnectionWhere>>
  OR?: InputMaybe<Array<TagParentConnectionWhere>>
  node?: InputMaybe<TagWhere>
  node_NOT?: InputMaybe<TagWhere>
}

export type TagParentCreateFieldInput = {
  node: TagCreateInput
}

export type TagParentDeleteFieldInput = {
  delete?: InputMaybe<TagDeleteInput>
  where?: InputMaybe<TagParentConnectionWhere>
}

export type TagParentDisconnectFieldInput = {
  disconnect?: InputMaybe<TagDisconnectInput>
  where?: InputMaybe<TagParentConnectionWhere>
}

export type TagParentFieldInput = {
  connect?: InputMaybe<TagParentConnectFieldInput>
  connectOrCreate?: InputMaybe<TagParentConnectOrCreateFieldInput>
  create?: InputMaybe<TagParentCreateFieldInput>
}

export type TagParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagParentNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TagParentNodeAggregationWhereInput>>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type TagParentRelationship = {
  __typename?: 'TagParentRelationship'
  cursor: Scalars['String']
  node: Tag
}

export type TagParentUpdateConnectionInput = {
  node?: InputMaybe<TagUpdateInput>
}

export type TagParentUpdateFieldInput = {
  connect?: InputMaybe<TagParentConnectFieldInput>
  connectOrCreate?: InputMaybe<TagParentConnectOrCreateFieldInput>
  create?: InputMaybe<TagParentCreateFieldInput>
  delete?: InputMaybe<TagParentDeleteFieldInput>
  disconnect?: InputMaybe<TagParentDisconnectFieldInput>
  update?: InputMaybe<TagParentUpdateConnectionInput>
  where?: InputMaybe<TagParentConnectionWhere>
}

export type TagRelationInput = {
  children?: InputMaybe<Array<TagChildrenCreateFieldInput>>
  parent?: InputMaybe<TagParentCreateFieldInput>
}

/** Fields to sort Tags by. The order in which sorts are applied is not guaranteed when specifying many fields in one TagSort object. */
export type TagSort = {
  id?: InputMaybe<SortDirection>
  isRoot?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type TagTagChildrenAggregationSelection = {
  __typename?: 'TagTagChildrenAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<TagTagChildrenNodeAggregateSelection>
}

export type TagTagChildrenNodeAggregateSelection = {
  __typename?: 'TagTagChildrenNodeAggregateSelection'
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type TagTagParentAggregationSelection = {
  __typename?: 'TagTagParentAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<TagTagParentNodeAggregateSelection>
}

export type TagTagParentNodeAggregateSelection = {
  __typename?: 'TagTagParentNodeAggregateSelection'
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type TagUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>
}

export type TagUpdateInput = {
  children?: InputMaybe<Array<TagChildrenUpdateFieldInput>>
  isRoot?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<TagParentUpdateFieldInput>
}

export type TagWhere = {
  AND?: InputMaybe<Array<TagWhere>>
  OR?: InputMaybe<Array<TagWhere>>
  children?: InputMaybe<TagWhere>
  childrenAggregate?: InputMaybe<TagChildrenAggregateInput>
  childrenConnection?: InputMaybe<TagChildrenConnectionWhere>
  childrenConnection_NOT?: InputMaybe<TagChildrenConnectionWhere>
  children_NOT?: InputMaybe<TagWhere>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  isRoot?: InputMaybe<Scalars['Boolean']>
  isRoot_NOT?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<TagWhere>
  parentAggregate?: InputMaybe<TagParentAggregateInput>
  parentConnection?: InputMaybe<TagParentConnectionWhere>
  parentConnection_NOT?: InputMaybe<TagParentConnectionWhere>
  parent_NOT?: InputMaybe<TagWhere>
}

export type TypeBase = {
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerConnection: TypeBaseOwnerConnection
}

export type TypeBaseOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type TypeBaseOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type TypeBaseConnectInput = {
  _on?: InputMaybe<TypeBaseImplementationsConnectInput>
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
}

export type TypeBaseConnectWhere = {
  node: TypeBaseWhere
}

export type TypeBaseCreateInput = {
  AppType?: InputMaybe<AppTypeCreateInput>
  ArrayType?: InputMaybe<ArrayTypeCreateInput>
  ElementType?: InputMaybe<ElementTypeCreateInput>
  EnumType?: InputMaybe<EnumTypeCreateInput>
  InterfaceType?: InputMaybe<InterfaceTypeCreateInput>
  LambdaType?: InputMaybe<LambdaTypeCreateInput>
  MonacoType?: InputMaybe<MonacoTypeCreateInput>
  PageType?: InputMaybe<PageTypeCreateInput>
  PrimitiveType?: InputMaybe<PrimitiveTypeCreateInput>
  ReactNodeType?: InputMaybe<ReactNodeTypeCreateInput>
  RenderPropsType?: InputMaybe<RenderPropsTypeCreateInput>
  UnionType?: InputMaybe<UnionTypeCreateInput>
}

export type TypeBaseDeleteInput = {
  _on?: InputMaybe<TypeBaseImplementationsDeleteInput>
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
}

export type TypeBaseDisconnectInput = {
  _on?: InputMaybe<TypeBaseImplementationsDisconnectInput>
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
}

export type TypeBaseImplementationsConnectInput = {
  AppType?: InputMaybe<Array<AppTypeConnectInput>>
  ArrayType?: InputMaybe<Array<ArrayTypeConnectInput>>
  ElementType?: InputMaybe<Array<ElementTypeConnectInput>>
  EnumType?: InputMaybe<Array<EnumTypeConnectInput>>
  InterfaceType?: InputMaybe<Array<InterfaceTypeConnectInput>>
  LambdaType?: InputMaybe<Array<LambdaTypeConnectInput>>
  MonacoType?: InputMaybe<Array<MonacoTypeConnectInput>>
  PageType?: InputMaybe<Array<PageTypeConnectInput>>
  PrimitiveType?: InputMaybe<Array<PrimitiveTypeConnectInput>>
  ReactNodeType?: InputMaybe<Array<ReactNodeTypeConnectInput>>
  RenderPropsType?: InputMaybe<Array<RenderPropsTypeConnectInput>>
  UnionType?: InputMaybe<Array<UnionTypeConnectInput>>
}

export type TypeBaseImplementationsDeleteInput = {
  AppType?: InputMaybe<Array<AppTypeDeleteInput>>
  ArrayType?: InputMaybe<Array<ArrayTypeDeleteInput>>
  ElementType?: InputMaybe<Array<ElementTypeDeleteInput>>
  EnumType?: InputMaybe<Array<EnumTypeDeleteInput>>
  InterfaceType?: InputMaybe<Array<InterfaceTypeDeleteInput>>
  LambdaType?: InputMaybe<Array<LambdaTypeDeleteInput>>
  MonacoType?: InputMaybe<Array<MonacoTypeDeleteInput>>
  PageType?: InputMaybe<Array<PageTypeDeleteInput>>
  PrimitiveType?: InputMaybe<Array<PrimitiveTypeDeleteInput>>
  ReactNodeType?: InputMaybe<Array<ReactNodeTypeDeleteInput>>
  RenderPropsType?: InputMaybe<Array<RenderPropsTypeDeleteInput>>
  UnionType?: InputMaybe<Array<UnionTypeDeleteInput>>
}

export type TypeBaseImplementationsDisconnectInput = {
  AppType?: InputMaybe<Array<AppTypeDisconnectInput>>
  ArrayType?: InputMaybe<Array<ArrayTypeDisconnectInput>>
  ElementType?: InputMaybe<Array<ElementTypeDisconnectInput>>
  EnumType?: InputMaybe<Array<EnumTypeDisconnectInput>>
  InterfaceType?: InputMaybe<Array<InterfaceTypeDisconnectInput>>
  LambdaType?: InputMaybe<Array<LambdaTypeDisconnectInput>>
  MonacoType?: InputMaybe<Array<MonacoTypeDisconnectInput>>
  PageType?: InputMaybe<Array<PageTypeDisconnectInput>>
  PrimitiveType?: InputMaybe<Array<PrimitiveTypeDisconnectInput>>
  ReactNodeType?: InputMaybe<Array<ReactNodeTypeDisconnectInput>>
  RenderPropsType?: InputMaybe<Array<RenderPropsTypeDisconnectInput>>
  UnionType?: InputMaybe<Array<UnionTypeDisconnectInput>>
}

export type TypeBaseImplementationsUpdateInput = {
  AppType?: InputMaybe<AppTypeUpdateInput>
  ArrayType?: InputMaybe<ArrayTypeUpdateInput>
  ElementType?: InputMaybe<ElementTypeUpdateInput>
  EnumType?: InputMaybe<EnumTypeUpdateInput>
  InterfaceType?: InputMaybe<InterfaceTypeUpdateInput>
  LambdaType?: InputMaybe<LambdaTypeUpdateInput>
  MonacoType?: InputMaybe<MonacoTypeUpdateInput>
  PageType?: InputMaybe<PageTypeUpdateInput>
  PrimitiveType?: InputMaybe<PrimitiveTypeUpdateInput>
  ReactNodeType?: InputMaybe<ReactNodeTypeUpdateInput>
  RenderPropsType?: InputMaybe<RenderPropsTypeUpdateInput>
  UnionType?: InputMaybe<UnionTypeUpdateInput>
}

export type TypeBaseImplementationsWhere = {
  AppType?: InputMaybe<AppTypeWhere>
  ArrayType?: InputMaybe<ArrayTypeWhere>
  ElementType?: InputMaybe<ElementTypeWhere>
  EnumType?: InputMaybe<EnumTypeWhere>
  InterfaceType?: InputMaybe<InterfaceTypeWhere>
  LambdaType?: InputMaybe<LambdaTypeWhere>
  MonacoType?: InputMaybe<MonacoTypeWhere>
  PageType?: InputMaybe<PageTypeWhere>
  PrimitiveType?: InputMaybe<PrimitiveTypeWhere>
  ReactNodeType?: InputMaybe<ReactNodeTypeWhere>
  RenderPropsType?: InputMaybe<RenderPropsTypeWhere>
  UnionType?: InputMaybe<UnionTypeWhere>
}

export type TypeBaseOwnerAggregateInput = {
  AND?: InputMaybe<Array<TypeBaseOwnerAggregateInput>>
  OR?: InputMaybe<Array<TypeBaseOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<TypeBaseOwnerNodeAggregationWhereInput>
}

export type TypeBaseOwnerConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>
  where?: InputMaybe<UserConnectWhere>
}

export type TypeBaseOwnerConnectOrCreateFieldInput = {
  onCreate: TypeBaseOwnerConnectOrCreateFieldInputOnCreate
  where: UserConnectOrCreateWhere
}

export type TypeBaseOwnerConnectOrCreateFieldInputOnCreate = {
  node: UserCreateInput
}

export type TypeBaseOwnerConnection = {
  __typename?: 'TypeBaseOwnerConnection'
  edges: Array<TypeBaseOwnerRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type TypeBaseOwnerConnectionSort = {
  node?: InputMaybe<UserSort>
}

export type TypeBaseOwnerConnectionWhere = {
  AND?: InputMaybe<Array<TypeBaseOwnerConnectionWhere>>
  OR?: InputMaybe<Array<TypeBaseOwnerConnectionWhere>>
  node?: InputMaybe<UserWhere>
  node_NOT?: InputMaybe<UserWhere>
}

export type TypeBaseOwnerCreateFieldInput = {
  node: UserCreateInput
}

export type TypeBaseOwnerDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type TypeBaseOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type TypeBaseOwnerFieldInput = {
  connect?: InputMaybe<TypeBaseOwnerConnectFieldInput>
  connectOrCreate?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
  create?: InputMaybe<TypeBaseOwnerCreateFieldInput>
}

export type TypeBaseOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeBaseOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TypeBaseOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type TypeBaseOwnerRelationship = {
  __typename?: 'TypeBaseOwnerRelationship'
  cursor: Scalars['String']
  node: User
}

export type TypeBaseOwnerUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>
}

export type TypeBaseOwnerUpdateFieldInput = {
  connect?: InputMaybe<TypeBaseOwnerConnectFieldInput>
  connectOrCreate?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
  create?: InputMaybe<TypeBaseOwnerCreateFieldInput>
  delete?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
  disconnect?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
  update?: InputMaybe<TypeBaseOwnerUpdateConnectionInput>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

export type TypeBaseUpdateInput = {
  _on?: InputMaybe<TypeBaseImplementationsUpdateInput>
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
}

export type TypeBaseWhere = {
  _on?: InputMaybe<TypeBaseImplementationsWhere>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<TypeBaseOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

/**
 * Connection between two types in a TypeGraph.
 * Can be:
 * Array -> ArrayItem (Edge)
 * Interface -> Field type - (InterfaceTypeEdge)
 * Union -> Union member (Edge)
 */
export type TypeEdge = Edge | InterfaceTypeEdge

export type TypeGraph = {
  __typename?: 'TypeGraph'
  edges: Array<TypeEdge>
  vertices: Array<AnyType>
}

export type TypeReference = {
  __typename?: 'TypeReference'
  /** The type of resource - Atom, InterfaceType, etc. */
  label: Scalars['String']
  /** The name of the resource referencing the type */
  name: Scalars['String']
}

export type TypeReferenceAggregateSelection = {
  __typename?: 'TypeReferenceAggregateSelection'
  count: Scalars['Int']
  label: StringAggregateSelection
  name: StringAggregateSelection
}

export type TypeReferenceCreateInput = {
  label: Scalars['String']
  name: Scalars['String']
}

export type TypeReferenceOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more TypeReferenceSort objects to sort TypeReferences by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<TypeReferenceSort>>>
}

/** Fields to sort TypeReferences by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeReferenceSort object. */
export type TypeReferenceSort = {
  label?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type TypeReferenceUpdateInput = {
  label?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type TypeReferenceWhere = {
  AND?: InputMaybe<Array<TypeReferenceWhere>>
  OR?: InputMaybe<Array<TypeReferenceWhere>>
  label?: InputMaybe<Scalars['String']>
  label_CONTAINS?: InputMaybe<Scalars['String']>
  label_ENDS_WITH?: InputMaybe<Scalars['String']>
  label_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  label_NOT?: InputMaybe<Scalars['String']>
  label_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  label_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  label_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  label_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  label_STARTS_WITH?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
}

/** Allows picking one of a set of types */
export type UnionType = TypeBase & {
  __typename?: 'UnionType'
  graph: TypeGraph
  id: Scalars['ID']
  name: Scalars['String']
  owner?: Maybe<User>
  ownerAggregate?: Maybe<UnionTypeUserOwnerAggregationSelection>
  ownerConnection: TypeBaseOwnerConnection
  typesOfUnionType?: Maybe<Array<TypeBase>>
  typesOfUnionTypeConnection: UnionTypeTypesOfUnionTypeConnection
}

/** Allows picking one of a set of types */
export type UnionTypeOwnerArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows picking one of a set of types */
export type UnionTypeOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

/** Allows picking one of a set of types */
export type UnionTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<TypeBaseOwnerConnectionSort>>
  where?: InputMaybe<TypeBaseOwnerConnectionWhere>
}

/** Allows picking one of a set of types */
export type UnionTypeTypesOfUnionTypeArgs = {
  options?: InputMaybe<QueryOptions>
  where?: InputMaybe<TypeBaseWhere>
}

/** Allows picking one of a set of types */
export type UnionTypeTypesOfUnionTypeConnectionArgs = {
  where?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
}

export type UnionTypeAggregateSelection = {
  __typename?: 'UnionTypeAggregateSelection'
  count: Scalars['Int']
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type UnionTypeConnectInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectFieldInput>
  typesOfUnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeConnectFieldInput>
  >
}

export type UnionTypeConnectOrCreateInput = {
  owner?: InputMaybe<TypeBaseOwnerConnectOrCreateFieldInput>
}

export type UnionTypeCreateInput = {
  name: Scalars['String']
  owner?: InputMaybe<TypeBaseOwnerFieldInput>
  typesOfUnionType?: InputMaybe<UnionTypeTypesOfUnionTypeFieldInput>
}

export type UnionTypeDeleteInput = {
  owner?: InputMaybe<TypeBaseOwnerDeleteFieldInput>
  typesOfUnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeDeleteFieldInput>
  >
}

export type UnionTypeDisconnectInput = {
  owner?: InputMaybe<TypeBaseOwnerDisconnectFieldInput>
  typesOfUnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeDisconnectFieldInput>
  >
}

export type UnionTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more UnionTypeSort objects to sort UnionTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<UnionTypeSort>>>
}

export type UnionTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<UnionTypeOwnerAggregateInput>>
  OR?: InputMaybe<Array<UnionTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<UnionTypeOwnerNodeAggregationWhereInput>
}

export type UnionTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UnionTypeOwnerNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<UnionTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  auth0Id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  auth0Id_EQUAL?: InputMaybe<Scalars['String']>
  auth0Id_GT?: InputMaybe<Scalars['Int']>
  auth0Id_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_LT?: InputMaybe<Scalars['Int']>
  auth0Id_LTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  auth0Id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  email_EQUAL?: InputMaybe<Scalars['String']>
  email_GT?: InputMaybe<Scalars['Int']>
  email_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  email_LT?: InputMaybe<Scalars['Int']>
  email_LTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
  id_EQUAL?: InputMaybe<Scalars['ID']>
}

export type UnionTypeRelationInput = {
  owner?: InputMaybe<TypeBaseOwnerCreateFieldInput>
  typesOfUnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCreateFieldInput>
  >
}

/** Fields to sort UnionTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one UnionTypeSort object. */
export type UnionTypeSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type UnionTypeTypesOfUnionTypeConnectFieldInput = {
  connect?: InputMaybe<TypeBaseConnectInput>
  where?: InputMaybe<TypeBaseConnectWhere>
}

export type UnionTypeTypesOfUnionTypeConnection = {
  __typename?: 'UnionTypeTypesOfUnionTypeConnection'
  edges: Array<UnionTypeTypesOfUnionTypeRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type UnionTypeTypesOfUnionTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypeConnectionWhere>>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeConnectionWhere>>
  node?: InputMaybe<TypeBaseWhere>
  node_NOT?: InputMaybe<TypeBaseWhere>
}

export type UnionTypeTypesOfUnionTypeCreateFieldInput = {
  node: TypeBaseCreateInput
}

export type UnionTypeTypesOfUnionTypeDeleteFieldInput = {
  delete?: InputMaybe<TypeBaseDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeBaseDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeFieldInput = {
  connect?: InputMaybe<Array<UnionTypeTypesOfUnionTypeConnectFieldInput>>
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypeCreateFieldInput>>
}

export type UnionTypeTypesOfUnionTypeRelationship = {
  __typename?: 'UnionTypeTypesOfUnionTypeRelationship'
  cursor: Scalars['String']
  node: TypeBase
}

export type UnionTypeTypesOfUnionTypeUpdateConnectionInput = {
  node?: InputMaybe<TypeBaseUpdateInput>
}

export type UnionTypeTypesOfUnionTypeUpdateFieldInput = {
  connect?: InputMaybe<Array<UnionTypeTypesOfUnionTypeConnectFieldInput>>
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypeCreateFieldInput>>
  delete?: InputMaybe<Array<UnionTypeTypesOfUnionTypeDeleteFieldInput>>
  disconnect?: InputMaybe<Array<UnionTypeTypesOfUnionTypeDisconnectFieldInput>>
  update?: InputMaybe<UnionTypeTypesOfUnionTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
}

export type UnionTypeUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<TypeBaseOwnerUpdateFieldInput>
  typesOfUnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUpdateFieldInput>
  >
}

export type UnionTypeUserOwnerAggregationSelection = {
  __typename?: 'UnionTypeUserOwnerAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<UnionTypeUserOwnerNodeAggregateSelection>
}

export type UnionTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'UnionTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelection
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type UnionTypeWhere = {
  AND?: InputMaybe<Array<UnionTypeWhere>>
  OR?: InputMaybe<Array<UnionTypeWhere>>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  name_CONTAINS?: InputMaybe<Scalars['String']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT?: InputMaybe<Scalars['String']>
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<UnionTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<TypeBaseOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TypeBaseOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
  typesOfUnionTypeConnection?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
  typesOfUnionTypeConnection_NOT?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
}

export type UpdateAppTypesMutationResponse = {
  __typename?: 'UpdateAppTypesMutationResponse'
  appTypes: Array<AppType>
  info: UpdateInfo
}

export type UpdateAppsMutationResponse = {
  __typename?: 'UpdateAppsMutationResponse'
  apps: Array<App>
  info: UpdateInfo
}

export type UpdateArrayTypesMutationResponse = {
  __typename?: 'UpdateArrayTypesMutationResponse'
  arrayTypes: Array<ArrayType>
  info: UpdateInfo
}

export type UpdateAtomsMutationResponse = {
  __typename?: 'UpdateAtomsMutationResponse'
  atoms: Array<Atom>
  info: UpdateInfo
}

export type UpdateCreateInfosMutationResponse = {
  __typename?: 'UpdateCreateInfosMutationResponse'
  createInfos: Array<CreateInfo>
  info: UpdateInfo
}

export type UpdateDeleteFieldResponsesMutationResponse = {
  __typename?: 'UpdateDeleteFieldResponsesMutationResponse'
  deleteFieldResponses: Array<DeleteFieldResponse>
  info: UpdateInfo
}

export type UpdateEdgesMutationResponse = {
  __typename?: 'UpdateEdgesMutationResponse'
  edges: Array<Edge>
  info: UpdateInfo
}

export type UpdateElementTypesMutationResponse = {
  __typename?: 'UpdateElementTypesMutationResponse'
  elementTypes: Array<ElementType>
  info: UpdateInfo
}

export type UpdateElementsMutationResponse = {
  __typename?: 'UpdateElementsMutationResponse'
  elements: Array<Element>
  info: UpdateInfo
}

export type UpdateEnumTypeValuesMutationResponse = {
  __typename?: 'UpdateEnumTypeValuesMutationResponse'
  enumTypeValues: Array<EnumTypeValue>
  info: UpdateInfo
}

export type UpdateEnumTypesMutationResponse = {
  __typename?: 'UpdateEnumTypesMutationResponse'
  enumTypes: Array<EnumType>
  info: UpdateInfo
}

export type UpdateImportAtomsMutationResponsesMutationResponse = {
  __typename?: 'UpdateImportAtomsMutationResponsesMutationResponse'
  importAtomsMutationResponses: Array<ImportAtomsMutationResponse>
  info: UpdateInfo
}

export type UpdateInfo = {
  __typename?: 'UpdateInfo'
  bookmark?: Maybe<Scalars['String']>
  nodesCreated: Scalars['Int']
  nodesDeleted: Scalars['Int']
  relationshipsCreated: Scalars['Int']
  relationshipsDeleted: Scalars['Int']
}

export type UpdateInterfaceTypesMutationResponse = {
  __typename?: 'UpdateInterfaceTypesMutationResponse'
  info: UpdateInfo
  interfaceTypes: Array<InterfaceType>
}

export type UpdateLambdaTypesMutationResponse = {
  __typename?: 'UpdateLambdaTypesMutationResponse'
  info: UpdateInfo
  lambdaTypes: Array<LambdaType>
}

export type UpdateMonacoTypesMutationResponse = {
  __typename?: 'UpdateMonacoTypesMutationResponse'
  info: UpdateInfo
  monacoTypes: Array<MonacoType>
}

export type UpdatePageTypesMutationResponse = {
  __typename?: 'UpdatePageTypesMutationResponse'
  info: UpdateInfo
  pageTypes: Array<PageType>
}

export type UpdatePagesMutationResponse = {
  __typename?: 'UpdatePagesMutationResponse'
  info: UpdateInfo
  pages: Array<Page>
}

export type UpdatePrimitiveTypesMutationResponse = {
  __typename?: 'UpdatePrimitiveTypesMutationResponse'
  info: UpdateInfo
  primitiveTypes: Array<PrimitiveType>
}

export type UpdateReactNodeTypesMutationResponse = {
  __typename?: 'UpdateReactNodeTypesMutationResponse'
  info: UpdateInfo
  reactNodeTypes: Array<ReactNodeType>
}

export type UpdateRenderPropsTypesMutationResponse = {
  __typename?: 'UpdateRenderPropsTypesMutationResponse'
  info: UpdateInfo
  renderPropsTypes: Array<RenderPropsType>
}

export type UpdateTagEdgesMutationResponse = {
  __typename?: 'UpdateTagEdgesMutationResponse'
  info: UpdateInfo
  tagEdges: Array<TagEdge>
}

export type UpdateTagsMutationResponse = {
  __typename?: 'UpdateTagsMutationResponse'
  info: UpdateInfo
  tags: Array<Tag>
}

export type UpdateTypeReferencesMutationResponse = {
  __typename?: 'UpdateTypeReferencesMutationResponse'
  info: UpdateInfo
  typeReferences: Array<TypeReference>
}

export type UpdateUnionTypesMutationResponse = {
  __typename?: 'UpdateUnionTypesMutationResponse'
  info: UpdateInfo
  unionTypes: Array<UnionType>
}

export type UpsertFieldInput = {
  description?: InputMaybe<Scalars['String']>
  interfaceTypeId: Scalars['ID']
  key: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  targetTypeId: Scalars['ID']
}

export type User = {
  __typename?: 'User'
  apps?: Maybe<Array<Maybe<App>>>
  appsAggregate?: Maybe<UserAppAppsAggregationSelection>
  appsConnection: UserAppsConnection
  auth0Id: Scalars['String']
  email: Scalars['String']
  id: Scalars['ID']
}

export type UserAppsArgs = {
  options?: InputMaybe<AppOptions>
  where?: InputMaybe<AppWhere>
}

export type UserAppsAggregateArgs = {
  where?: InputMaybe<AppWhere>
}

export type UserAppsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<UserAppsConnectionSort>>
  where?: InputMaybe<UserAppsConnectionWhere>
}

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection'
  auth0Id: StringAggregateSelection
  count: Scalars['Int']
  email: StringAggregateSelection
  id: IdAggregateSelection
}

export type UserAppAppsAggregationSelection = {
  __typename?: 'UserAppAppsAggregationSelection'
  count: Scalars['Int']
  node?: Maybe<UserAppAppsNodeAggregateSelection>
}

export type UserAppAppsNodeAggregateSelection = {
  __typename?: 'UserAppAppsNodeAggregateSelection'
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type UserAppsAggregateInput = {
  AND?: InputMaybe<Array<UserAppsAggregateInput>>
  OR?: InputMaybe<Array<UserAppsAggregateInput>>
  count?: InputMaybe<Scalars['Int']>
  count_GT?: InputMaybe<Scalars['Int']>
  count_GTE?: InputMaybe<Scalars['Int']>
  count_LT?: InputMaybe<Scalars['Int']>
  count_LTE?: InputMaybe<Scalars['Int']>
  node?: InputMaybe<UserAppsNodeAggregationWhereInput>
}

export type UserAppsConnectFieldInput = {
  connect?: InputMaybe<Array<AppConnectInput>>
  where?: InputMaybe<AppConnectWhere>
}

export type UserAppsConnectOrCreateFieldInput = {
  onCreate: UserAppsConnectOrCreateFieldInputOnCreate
  where: AppConnectOrCreateWhere
}

export type UserAppsConnectOrCreateFieldInputOnCreate = {
  node: AppCreateInput
}

export type UserAppsConnection = {
  __typename?: 'UserAppsConnection'
  edges: Array<UserAppsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type UserAppsConnectionSort = {
  node?: InputMaybe<AppSort>
}

export type UserAppsConnectionWhere = {
  AND?: InputMaybe<Array<UserAppsConnectionWhere>>
  OR?: InputMaybe<Array<UserAppsConnectionWhere>>
  node?: InputMaybe<AppWhere>
  node_NOT?: InputMaybe<AppWhere>
}

export type UserAppsCreateFieldInput = {
  node: AppCreateInput
}

export type UserAppsDeleteFieldInput = {
  delete?: InputMaybe<AppDeleteInput>
  where?: InputMaybe<UserAppsConnectionWhere>
}

export type UserAppsDisconnectFieldInput = {
  disconnect?: InputMaybe<AppDisconnectInput>
  where?: InputMaybe<UserAppsConnectionWhere>
}

export type UserAppsFieldInput = {
  connect?: InputMaybe<Array<UserAppsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserAppsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserAppsCreateFieldInput>>
}

export type UserAppsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserAppsNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<UserAppsNodeAggregationWhereInput>>
  id_EQUAL?: InputMaybe<Scalars['ID']>
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>
  name_EQUAL?: InputMaybe<Scalars['String']>
  name_GT?: InputMaybe<Scalars['Int']>
  name_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>
  name_LT?: InputMaybe<Scalars['Int']>
  name_LTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>
}

export type UserAppsRelationship = {
  __typename?: 'UserAppsRelationship'
  cursor: Scalars['String']
  node: App
}

export type UserAppsUpdateConnectionInput = {
  node?: InputMaybe<AppUpdateInput>
}

export type UserAppsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserAppsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserAppsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserAppsCreateFieldInput>>
  delete?: InputMaybe<Array<UserAppsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<UserAppsDisconnectFieldInput>>
  update?: InputMaybe<UserAppsUpdateConnectionInput>
  where?: InputMaybe<UserAppsConnectionWhere>
}

export type UserConnectInput = {
  apps?: InputMaybe<Array<UserAppsConnectFieldInput>>
}

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere
}

export type UserConnectWhere = {
  node: UserWhere
}

export type UserCreateInput = {
  apps?: InputMaybe<UserAppsFieldInput>
  auth0Id: Scalars['String']
  email: Scalars['String']
}

export type UserDeleteInput = {
  apps?: InputMaybe<Array<UserAppsDeleteFieldInput>>
}

export type UserDisconnectInput = {
  apps?: InputMaybe<Array<UserAppsDisconnectFieldInput>>
}

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>
}

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  auth0Id?: InputMaybe<SortDirection>
  email?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
}

export type UserUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>
}

export type UserUpdateInput = {
  apps?: InputMaybe<Array<UserAppsUpdateFieldInput>>
  auth0Id?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
}

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>
  OR?: InputMaybe<Array<UserWhere>>
  apps?: InputMaybe<AppWhere>
  appsAggregate?: InputMaybe<UserAppsAggregateInput>
  appsConnection?: InputMaybe<UserAppsConnectionWhere>
  appsConnection_NOT?: InputMaybe<UserAppsConnectionWhere>
  apps_NOT?: InputMaybe<AppWhere>
  auth0Id?: InputMaybe<Scalars['String']>
  auth0Id_CONTAINS?: InputMaybe<Scalars['String']>
  auth0Id_ENDS_WITH?: InputMaybe<Scalars['String']>
  auth0Id_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  auth0Id_NOT?: InputMaybe<Scalars['String']>
  auth0Id_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  auth0Id_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  auth0Id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  auth0Id_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  auth0Id_STARTS_WITH?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  email_CONTAINS?: InputMaybe<Scalars['String']>
  email_ENDS_WITH?: InputMaybe<Scalars['String']>
  email_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  email_NOT?: InputMaybe<Scalars['String']>
  email_NOT_CONTAINS?: InputMaybe<Scalars['String']>
  email_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>
  email_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  email_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>
  email_STARTS_WITH?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  id_CONTAINS?: InputMaybe<Scalars['ID']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT?: InputMaybe<Scalars['ID']>
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>
}