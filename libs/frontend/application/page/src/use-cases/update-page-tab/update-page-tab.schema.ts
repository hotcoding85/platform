import type { IUpdatePageData } from '@codelab/frontend/abstract/domain'
import {
  getSelectElementComponent,
  SelectAuthGuard,
} from '@codelab/frontend/application/type'
import {
  appSchema,
  idSchema,
  pageUrlSchema,
} from '@codelab/frontend/presentation/view'
import { ElementTypeKind } from '@codelab/shared/abstract/codegen'
import { IPageKind } from '@codelab/shared/abstract/core'
import type { JSONSchemaType } from 'ajv'

// pageContentContainer is not required in interface, but is required for _app page
export const schema = (kind: IPageKind): JSONSchemaType<IUpdatePageData> =>
  ({
    properties: {
      ...idSchema(),
      ...appSchema,
      name: { disabled: kind !== IPageKind.Regular, type: 'string' },
      pageContentContainer: {
        label: '',
        nullable: true,
        properties: {
          ...idSchema({
            label: 'Page Content Container',
            component: getSelectElementComponent(ElementTypeKind.AllElements),
          }),
        },
        required: ['id'],
        type: 'object',
      },
      ...pageUrlSchema,
    },
    required: ['name', 'app'],
    type: 'object',
  } as const)
