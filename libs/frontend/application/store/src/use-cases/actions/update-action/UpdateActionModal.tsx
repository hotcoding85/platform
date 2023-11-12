import type { IUpdateActionData } from '@codelab/frontend/abstract/domain'
import { useStore } from '@codelab/frontend/application/shared/store'
import {
  SelectAction,
  SelectResource,
} from '@codelab/frontend/application/type'
import { DisplayIfField, ModalForm } from '@codelab/frontend/presentation/view'
import { createFormErrorNotificationHandler } from '@codelab/frontend/shared/utils'
import { IActionKind, IResourceType } from '@codelab/shared/abstract/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import type { Context } from 'uniforms'
import { AutoField, AutoFields } from 'uniforms-antd'
import { updateActionSchema } from './update-action.schema'

export const UpdateActionModal = observer(() => {
  const { actionService, resourceService } = useStore()
  const closeModal = () => actionService.updateModal.close()
  const actionToUpdate = actionService.updateModal.action

  const onSubmit = (actionDTO: IUpdateActionData) => {
    return actionService.update(actionDTO)
  }

  const onSubmitError = createFormErrorNotificationHandler({
    title: 'Error while updating action',
  })

  const baseModel = {
    id: actionToUpdate?.id,
    name: actionToUpdate?.name,
    storeId: actionToUpdate?.store.current.id,
    type: actionToUpdate?.type,
  }

  const model =
    actionToUpdate?.type === IActionKind.ApiAction
      ? {
          config: {
            data: actionToUpdate.config.values,
            id: actionToUpdate.config.id,
          },
          ...baseModel,
          errorActionId: actionToUpdate.errorAction?.id,
          resourceId: actionToUpdate.resource.id,
          successActionId: actionToUpdate.successAction?.id,
        }
      : {
          ...baseModel,
          code: actionToUpdate?.code,
        }

  const getResourceType = (context: Context<IUpdateActionData>) =>
    context.model.resourceId
      ? resourceService.resource(context.model.resourceId)?.type
      : null

  const getResourceApiUrl = (context: Context<IUpdateActionData>) =>
    context.model.resourceId
      ? resourceService.resource(context.model.resourceId)?.config.get('url')
      : null

  return (
    <ModalForm.Modal
      okText="Update Action"
      onCancel={closeModal}
      open={actionService.updateModal.isOpen}
    >
      <ModalForm.Form<IUpdateActionData>
        model={model}
        onSubmit={onSubmit}
        onSubmitError={onSubmitError}
        onSubmitSuccess={closeModal}
        schema={updateActionSchema}
      >
        <AutoFields fields={['name']} />

        {actionToUpdate?.type === IActionKind.CodeAction && (
          <AutoField name="code" />
        )}

        {actionToUpdate?.type === IActionKind.ApiAction && (
          <>
            <SelectResource name="resourceId" />
            <AutoField
              component={SelectAction}
              name="successActionId"
              updatedAction={{ id: actionToUpdate.id }}
            />
            <AutoField
              component={SelectAction}
              name="errorActionId"
              updatedAction={{ id: actionToUpdate.id }}
            />

            {/** GraphQL Config Form */}
            <DisplayIfField<IUpdateActionData>
              condition={(context) =>
                getResourceType(context) === IResourceType.GraphQl
              }
            >
              <AutoField getUrl={getResourceApiUrl} name="config.data.query" />
              <AutoField name="config.data.variables" />
              <AutoField name="config.data.headers" />
            </DisplayIfField>

            {/** Rest Config Form */}
            <DisplayIfField<IUpdateActionData>
              condition={(context) =>
                getResourceType(context) === IResourceType.Rest
              }
            >
              <AutoField name="config.data.urlSegment" />
              <AutoField name="config.data.method" />
              <AutoField name="config.data.body" />
              <AutoField name="config.data.queryParams" />
              <AutoField name="config.data.headers" />
              <AutoField name="config.data.responseType" />
            </DisplayIfField>
          </>
        )}
      </ModalForm.Form>
    </ModalForm.Modal>
  )
})