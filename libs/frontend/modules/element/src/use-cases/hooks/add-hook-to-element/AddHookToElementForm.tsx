import { SelectLambda, SelectPage } from '@codelab/frontend/modules/type'
import { createNotificationHandler } from '@codelab/frontend/shared/utils'
import {
  DisplayIfField,
  EntityType,
  FormUniforms,
  graphqlEditorFieldFactory,
  monacoFieldFactory,
  UniFormUseCaseProps,
  useCrudModalMutationForm,
} from '@codelab/frontend/view/components'
import { HookType } from '@codelab/shared/abstract/core'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import React from 'react'
import { AutoField, AutoFields, HiddenField } from 'uniforms-antd'
import { refetchGetElementQuery } from '../../get-element/GetElement.web.graphql.gen'
import { useAddHookToElementMutation } from './AddHookToElement.web.graphql.gen'
import {
  AddHookToElementSchema,
  addHookToElementSchema,
  mapDataToInput,
  QueryHookVariant,
} from './addHookToElementSchema'

export type AddHookToElementFormProps =
  UniFormUseCaseProps<AddHookToElementSchema> & { elementId: string }

export const DisplayIfType = ({
  type,
  children,
}: React.PropsWithChildren<{
  type: HookType
}>) => (
  <DisplayIfField<AddHookToElementSchema>
    condition={(c) => c.model.type === type}
  >
    {children}
  </DisplayIfField>
)

const QueryBodyField = monacoFieldFactory({
  editorOptions: { language: 'json', lineNumbers: 'off' },
  containerProps: { style: { height: '15rem' } },
})

const DefaultValueField = monacoFieldFactory({
  editorOptions: {
    language: 'json',
    lineNumbers: 'off',
    wordWrap: 'off',
    lineNumbersMinChars: 0,
    overviewRulerLanes: 0,
    overviewRulerBorder: false,
    lineDecorationsWidth: 0,
    hideCursorInOverviewRuler: true,
    glyphMargin: false,
    folding: false,
    scrollBeyondLastColumn: 0,
    scrollbar: { horizontal: 'hidden', vertical: 'hidden' },
    find: {
      addExtraSpaceOnTop: false,
      autoFindInSelection: 'never',
      seedSearchStringFromSelection: 'never',
    },
    minimap: { enabled: false },
  },
  containerProps: { style: { height: '1.5rem' } },
})

export const AddHookToElementForm = ({
  elementId,
  ...props
}: AddHookToElementFormProps) => {
  const router = useRouter()

  const {
    crudModal: { reset },
    handleSubmit,
  } = useCrudModalMutationForm({
    entityType: EntityType.Hook,
    useMutationFunction: useAddHookToElementMutation,
    mutationOptions: {
      refetchQueries: [
        refetchGetElementQuery({
          input: { elementId },
        }),
      ],
    },
    mapVariables: (data: AddHookToElementSchema, state) => ({
      input: mapDataToInput(elementId ?? state.metadata.element.id, data),
    }),
  })

  return (
    <FormUniforms<AddHookToElementSchema>
      onSubmit={handleSubmit}
      schema={addHookToElementSchema}
      onSubmitError={createNotificationHandler({
        title: 'Error while creating app',
      })}
      onSubmitSuccess={() => reset()}
      {...props}
    >
      {/* Base fields */}
      <AutoFields
        omitFields={[
          'queryHook',
          'queryPageHook',
          'queryPagesHook',
          'queryHookVariant',
          'graphqlQueryHook',
          'graphqlMutationHook',
          'recoilStateHook',
        ]}
      />

      {/* Graphql query fields */}
      <DisplayIfType type={HookType.QueryPages}>
        <HiddenField
          name="queryPagesHook.appId"
          value={String(router.query.appId)}
        />
      </DisplayIfType>

      <DisplayIfType type={HookType.QueryPage}>
        <AutoField name="queryPageHook.pageId" component={SelectPage} />
      </DisplayIfType>

      <DisplayIfType type={HookType.GraphqlQuery}>
        <div
          css={css`
            display: grid;
            grid-template-rows: auto 26rem auto;
          `}
        >
          <AutoFields fields={['graphqlQueryHook.url']} />

          <AutoField
            name={'graphqlQueryHook.body'}
            component={graphqlEditorFieldFactory({
              schemaUrlFieldKey: 'graphqlQueryHook.url',
              editorOptions: { lineNumbers: 'off' },
            })}
          />
          <AutoFields fields={['graphqlQueryHook.dataKey']} />
        </div>
      </DisplayIfType>

      {/* Graphql mutation fields */}
      <DisplayIfType type={HookType.GraphqlMutation}>
        <div
          css={css`
            display: grid;
            grid-template-rows: auto 26rem auto;
          `}
        >
          <AutoFields fields={['graphqlMutationHook.url']} />

          <AutoField
            name={'graphqlMutationHook.body'}
            component={graphqlEditorFieldFactory({
              schemaUrlFieldKey: 'graphqlMutationHook.url',
              editorOptions: { lineNumbers: 'off' },
            })}
          />
          <AutoFields fields={['graphqlMutationHook.dataKey']} />
        </div>
      </DisplayIfType>

      {/* Query fields */}
      <DisplayIfType type={HookType.Query}>
        <AutoFields fields={['queryHookVariant']} />

        <DisplayIfField<AddHookToElementSchema>
          condition={(c) =>
            c.model.queryHookVariant === QueryHookVariant.Config
          }
        >
          <AutoFields
            fields={['queryHook.queryKey', 'queryHook.url', 'queryHook.method']}
          />

          <QueryBodyField name={'queryHook.body'} />
        </DisplayIfField>

        <DisplayIfField<AddHookToElementSchema>
          condition={(c) =>
            c.model.queryHookVariant === QueryHookVariant.Lambda
          }
        >
          <AutoFields fields={['queryHook.queryKey']} />{' '}
          <AutoField name="queryHook.lambdaId" component={SelectLambda} />
        </DisplayIfField>
      </DisplayIfType>

      {/* Recoil state fields */}
      <DisplayIfType type={HookType.RecoilState}>
        <AutoFields
          fields={['recoilStateHook.stateKey', 'recoilStateHook.persisted']}
        />
        <DefaultValueField name="recoilStateHook.defaultValue" />
      </DisplayIfType>
    </FormUniforms>
  )
}