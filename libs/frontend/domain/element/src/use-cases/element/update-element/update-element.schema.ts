import type { IUpdateBaseElementData } from '@codelab/frontend/abstract/core'
import { IRenderTypeKind } from '@codelab/frontend/abstract/core'
import {
  idSchema,
  titleCaseValidation,
} from '@codelab/frontend/view/components'
import type { JSONSchemaType } from 'ajv'

export const updateElementSchema: JSONSchemaType<IUpdateBaseElementData> = {
  properties: {
    ...idSchema,
    name: {
      autoFocus: true,
      nullable: true,
      type: 'string',
      ...titleCaseValidation,
    },
    postRenderAction: {
      nullable: true,
      properties: {
        id: {
          label: 'Post Render action',
          type: 'string',
        },
      },
      required: [],
      type: 'object',
    },
    preRenderAction: {
      nullable: true,
      properties: {
        id: {
          label: 'Pre Render action',
          type: 'string',
        },
      },
      required: [],
      type: 'object',
    },
    renderForEachPropKey: {
      label: 'Render for each',
      nullable: true,
      type: 'string',
    },
    renderIfExpression: {
      label: 'Render if',
      nullable: true,
      type: 'string',
    },
    renderType: {
      label: 'Render Type',
      nullable: true,
      properties: {
        id: {
          type: 'string',
        },
        kind: {
          enum: Object.values(IRenderTypeKind),
          label: 'Render Type',
          type: 'string',
        },
      },
      required: ['id', 'kind'],
      type: 'object',
    },
  },
  required: [],
  title: 'Update Element Input',
  type: 'object',
} as const