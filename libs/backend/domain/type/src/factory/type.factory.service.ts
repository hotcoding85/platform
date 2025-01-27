import type {
  ActionTypeWhere,
  ArrayTypeWhere,
  CodeMirrorTypeWhere,
  EnumTypeWhere,
  InterfaceTypeWhere,
  PrimitiveTypeWhere,
  ReactNodeTypeWhere,
  RenderPropTypeWhere,
  RichTextTypeWhere,
  UnionTypeWhere,
} from '@codelab/backend/abstract/codegen'
import type { IType, ITypeWhere } from '@codelab/backend/abstract/core'
import {
  getTypeDescendantsOGM,
  NEO4J_DRIVER_PROVIDER,
} from '@codelab/backend/infra/adapter/neo4j'
import type { ITypeDto, ITypeMaybeRef } from '@codelab/shared/abstract/core'
import { ITypeKind } from '@codelab/shared/abstract/core'
import { Inject, Injectable } from '@nestjs/common'
import { Driver } from 'neo4j-driver'
import {
  ActionType,
  CodeMirrorType,
  EnumType,
  InterfaceType,
  PrimitiveType,
  ReactNodeType,
  RenderPropType,
  RichTextType,
  UnionType,
} from '../model'
import { ArrayType } from '../model/array-type.model'
import {
  ActionTypeRepository,
  ArrayTypeRepository,
  CodeMirrorTypeRepository,
  EnumTypeRepository,
  InterfaceTypeRepository,
  PrimitiveTypeRepository,
  ReactNodeTypeRepository,
  RenderPropTypeRepository,
  RichTextTypeRepository,
  UnionTypeRepository,
} from '../repository'

/**
 * Used for dynamic data when we don't know what type we are creating
 */
@Injectable()
export class TypeFactory {
  constructor(
    private readonly primitiveTypeRepository: PrimitiveTypeRepository,
    private readonly enumTypeRepository: EnumTypeRepository,
    private readonly interfaceTypeRepository: InterfaceTypeRepository,
    private readonly reactNodeTypeRepository: ReactNodeTypeRepository,
    private readonly renderPropTypeRepository: RenderPropTypeRepository,
    private readonly richTextTypeRepository: RichTextTypeRepository,
    private readonly actionTypeRepository: ActionTypeRepository,
    private readonly unionTypeRepository: UnionTypeRepository,
    private readonly arrayTypeRepository: ArrayTypeRepository,
    private readonly codeMirrorRepository: CodeMirrorTypeRepository,
    @Inject(NEO4J_DRIVER_PROVIDER) private driver: Driver,
  ) {}

  async descendantEntities(typeId: string) {
    const session = this.driver.session()

    const results = await session.run(getTypeDescendantsOGM, {
      id: typeId,
    })

    // We pass in a single id, so only get 1 record, for each record, we want the first column
    const descendants = [
      ...(results.records[0]?.values() ?? []),
    ][0] as Array<ITypeMaybeRef>

    // We only get interface type descendants, since other types are pushed in front of interfaces
    const sortedDescendants = descendants.sort((a, b) =>
      a.__typename === ITypeKind.InterfaceType ? 1 : -1,
    )

    return sortedDescendants
  }

  async findOne({ __typename, id }: ITypeMaybeRef) {
    switch (__typename) {
      case ITypeKind.PrimitiveType: {
        return (await this.primitiveTypeRepository).findOne({ where: { id } })
      }

      case ITypeKind.EnumType: {
        return (await this.enumTypeRepository).findOne({ where: { id } })
      }

      case ITypeKind.InterfaceType: {
        return (await this.interfaceTypeRepository).findOne({ where: { id } })
      }

      case ITypeKind.ReactNodeType: {
        return (await this.reactNodeTypeRepository).findOne({ where: { id } })
      }

      case ITypeKind.RichTextType: {
        return (await this.richTextTypeRepository).findOne({ where: { id } })
      }

      case ITypeKind.RenderPropType: {
        return (await this.renderPropTypeRepository).findOne({ where: { id } })
      }

      case ITypeKind.ActionType: {
        return (await this.actionTypeRepository).findOne({ where: { id } })
      }

      case ITypeKind.UnionType: {
        return (await this.unionTypeRepository).findOne({ where: { id } })
      }

      case ITypeKind.CodeMirrorType: {
        return (await this.codeMirrorRepository).findOne({ where: { id } })
      }

      case ITypeKind.ArrayType: {
        return (await this.arrayTypeRepository).findOne({ where: { id } })
      }

      default: {
        console.log({ __typename })
        throw new Error('No type factory found')
      }
    }
  }

  async save<T extends IType>(type: ITypeDto, where?: ITypeWhere): Promise<T> {
    /**
     * Type narrow using discriminated union
     */
    switch (type.__typename) {
      case ITypeKind.PrimitiveType: {
        const primitiveType = new PrimitiveType(type)

        return (await this.primitiveTypeRepository.save(
          primitiveType,
          where as PrimitiveTypeWhere,
        )) as T
      }

      case ITypeKind.EnumType: {
        const enumType = new EnumType(type)

        return (await this.enumTypeRepository.save(
          enumType,
          where as EnumTypeWhere,
        )) as T
      }

      case ITypeKind.InterfaceType: {
        const interfaceType = new InterfaceType(type)

        return (await this.interfaceTypeRepository.save(
          interfaceType,
          where as InterfaceTypeWhere,
        )) as T
      }

      case ITypeKind.ReactNodeType: {
        const reactNodeType = new ReactNodeType(type)

        return (await this.reactNodeTypeRepository.save(
          reactNodeType,
          where as ReactNodeTypeWhere,
        )) as T
      }

      case ITypeKind.RenderPropType: {
        const renderPropType = new RenderPropType(type)

        return (await this.renderPropTypeRepository.save(
          renderPropType,
          where as RenderPropTypeWhere,
        )) as T
      }

      case ITypeKind.RichTextType: {
        const richTextType = new RichTextType(type)

        return (await this.richTextTypeRepository.save(
          richTextType,
          where as RichTextTypeWhere,
        )) as T
      }

      case ITypeKind.ActionType: {
        const actionType = new ActionType(type)

        return (await this.actionTypeRepository.save(
          actionType,
          where as ActionTypeWhere,
        )) as T
      }

      case ITypeKind.UnionType: {
        const unionType = new UnionType(type)

        return (await this.unionTypeRepository.save(
          unionType,
          where as UnionTypeWhere,
        )) as T
      }

      case ITypeKind.CodeMirrorType: {
        const codeMirrorType = new CodeMirrorType(type)

        return (await this.codeMirrorRepository.save(
          codeMirrorType,
          where as CodeMirrorTypeWhere,
        )) as T
      }

      case ITypeKind.ArrayType: {
        const arrayType = new ArrayType(type)

        return (await this.arrayTypeRepository.save(
          arrayType,
          where as ArrayTypeWhere,
        )) as T
      }

      default: {
        console.log('Data:', type)
        throw new Error('No type factory found')
      }
    }
  }
}
