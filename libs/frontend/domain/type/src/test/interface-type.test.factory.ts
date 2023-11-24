import type { ITypeDomainService } from '@codelab/frontend/abstract/domain'
import { chance } from '@codelab/frontend/domain/shared'
import type { IInterfaceTypeDTO } from '@codelab/shared/abstract/core'
import { ITypeKind } from '@codelab/shared/abstract/core'
import { v4 } from 'uuid'

export const interfaceTypeFactory =
  (typeDomainService: ITypeDomainService) =>
  (dto: Partial<IInterfaceTypeDTO> = {}) => {
    const interfaceType: IInterfaceTypeDTO = {
      __typename: `${ITypeKind.InterfaceType}`,
      fields: [],
      id: dto.id ?? v4(),
      kind: ITypeKind.InterfaceType,
      name: dto.name ?? `${chance.word({ capitalize: true })} API`,
    }

    return typeDomainService.hydrateInterface(interfaceType)
  }
