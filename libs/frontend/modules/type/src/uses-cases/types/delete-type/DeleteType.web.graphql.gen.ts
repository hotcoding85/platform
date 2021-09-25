import * as Types from '@codelab/shared/codegen/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type DeleteTypeMutationVariables = Types.Exact<{
  input: Types.DeleteTypeInput;
}>;


export type DeleteTypeMutation = { deleteType?: Types.Maybe<void> };


export const DeleteTypeGql = gql`
    mutation DeleteType($input: DeleteTypeInput!) {
  deleteType(input: $input)
}
    `;
export type DeleteTypeMutationFn = Apollo.MutationFunction<DeleteTypeMutation, DeleteTypeMutationVariables>;

/**
 * __useDeleteTypeMutation__
 *
 * To run a mutation, you first call `useDeleteTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTypeMutation, { data, loading, error }] = useDeleteTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTypeMutation, DeleteTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTypeMutation, DeleteTypeMutationVariables>(DeleteTypeGql, options);
      }
export type DeleteTypeMutationHookResult = ReturnType<typeof useDeleteTypeMutation>;
export type DeleteTypeMutationResult = Apollo.MutationResult<DeleteTypeMutation>;
export type DeleteTypeMutationOptions = Apollo.BaseMutationOptions<DeleteTypeMutation, DeleteTypeMutationVariables>;