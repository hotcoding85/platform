import type { IRedirectDTO } from '@codelab/shared/abstract/core'
import type { ObjectMap } from 'mobx-keystone'
import type { IHydrateable } from '../shared'
import type { IRedirectModel } from './redirect.model.interface'

export interface IRedirectDomainService
  extends IHydrateable<IRedirectDTO, IRedirectModel> {
  redirects: ObjectMap<IRedirectModel>
}
