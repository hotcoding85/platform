import {
  CodeMirrorLanguage,
  ElementTypeKind,
} from '@codelab/shared/abstract/codegen'
import { IPropData } from '../prop'
import { TypeFragment } from './fragments'
import {
  IEnumTypeExport,
  IEnumTypeValue,
  IInterfaceTypeExport,
  IPrimitiveTypeExport,
  IPrimitiveTypeKind,
  IReactNodeTypeExport,
  IRenderPropsTypeExport,
  ITypeKind,
} from './types'

export interface IBaseTypeDTO {
  id: string
  name: string
  kind: ITypeKind
  primitiveKind?: IPrimitiveTypeKind
  elementKind?: ElementTypeKind
  language?: CodeMirrorLanguage
  allowedValues?: Array<IEnumTypeValue>
  unionTypeIds?: Array<string>
  arrayTypeId?: string
  interfaceDefaults?: { data: IPropData; auth0Id: string }
}

/**
 * Create
 */
export interface ICreateTypeDTO
  extends Omit<IBaseTypeDTO, 'interfaceDefaults'> {
  auth0Id: string
}

/**
 * Update
 */
export type IUpdateTypeDTO = IBaseTypeDTO

export type ITypeDTO = TypeFragment

// Uses OGM types
export type ITypeExport =
  | IPrimitiveTypeExport
  | IEnumTypeExport
  | IInterfaceTypeExport
  | IReactNodeTypeExport
  | IRenderPropsTypeExport
