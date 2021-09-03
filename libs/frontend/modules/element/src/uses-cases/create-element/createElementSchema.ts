import { CreateElementInput } from '@codelab/shared/codegen/graphql'
import { JSONSchemaType } from 'ajv'

export const createElementSchema: JSONSchemaType<CreateElementInput> = {
  title: 'Create Page Element Input',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      nullable: true,
    },
    atomId: {
      type: 'string',
      nullable: true,
    },
    componentId: {
      type: 'string',
      nullable: true,
    },
    parentElementId: {
      type: 'string',
      nullable: true,
    },
    order: {
      type: 'integer',
      nullable: true,
    },
  },
  required: [],
}