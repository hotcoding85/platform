import { DomainWhere } from '@codelab/shared/abstract/codegen'
import { Maybe } from '@codelab/shared/abstract/types'
import { ObjectMap, Ref } from 'mobx-keystone'
import { ICRUDModalService, ICRUDService, IQueryService } from '../../service'
import { ICreateDomainDTO, IUpdateDomainDTO } from './domain.dto.interface'
import { IDomain } from './domain.model.interface'

export interface IDomainService
  extends Omit<
      ICRUDService<IDomain, ICreateDomainDTO, ICreateDomainDTO>,
      'update' | 'create'
    >,
    Omit<IQueryService<IDomain, DomainWhere>, 'getAll' | 'getOne'>,
    ICRUDModalService<Ref<IDomain>, { domain: Maybe<IDomain> }> {
  domains: ObjectMap<IDomain>
  domainsList: Array<IDomain>
  createModal: ICRUDModalService<
    Ref<IDomain>,
    { domain: Maybe<string> }
  >['createModal']
  getAll(where?: DomainWhere): Promise<Array<IDomain>>
  update(input: IUpdateDomainDTO): Promise<void>
  create(input: ICreateDomainDTO): Promise<void>
}