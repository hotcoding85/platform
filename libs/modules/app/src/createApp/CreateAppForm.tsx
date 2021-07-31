import {
  CreateAppInput,
  refetchGetAppsQuery,
  useCreateAppMutation,
} from '@codelab/codegen/graphql'
import {
  createNotificationHandler,
  EntityType,
  FormUniforms,
  UniFormUseCaseProps,
  useCrudModalMutationForm,
} from '@codelab/frontend/shared'
import React from 'react'
import { AutoFields } from 'uniforms-antd'
import { createAppSchema } from './createAppSchema'

export const CreateAppForm = (props: UniFormUseCaseProps<CreateAppInput>) => {
  const {
    crudModal: { reset },
    handleSubmit,
  } = useCrudModalMutationForm({
    entityType: EntityType.App,
    useMutationFunction: useCreateAppMutation,
    mutationOptions: { refetchQueries: [refetchGetAppsQuery()] },
    mapVariables: ({ name }: CreateAppInput) => ({ input: { name } }),
  })

  return (
    <FormUniforms<CreateAppInput>
      onSubmit={handleSubmit}
      schema={createAppSchema}
      onSubmitError={createNotificationHandler({
        title: 'Error while creating app',
      })}
      onSubmitSuccess={() => reset()}
      {...props}
    >
      <AutoFields />
    </FormUniforms>
  )
}
