import type { Static } from '@sinclair/typebox'
import { Type } from '@sinclair/typebox'
import { IActionKind } from '../action-kind.enum'
import { IRef } from '../model/node-type.interface'

export const IBaseActionDTO = Type.Object({
  __typename: Type.Optional(
    Type.Union([
      Type.Literal(`${IActionKind.ApiAction}`),
      Type.Literal(`${IActionKind.CodeAction}`),
    ]),
  ),
  id: Type.String(),
  name: Type.String(),
  store: IRef,
})

export type IBaseActionDTO = Static<typeof IBaseActionDTO>