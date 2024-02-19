import { createContext } from 'mobx-keystone'
import type { IAuthGuardDomainService } from './auth-guard.domain.service.interface'

export const authGuardDomainServiceContext =
  createContext<IAuthGuardDomainService>()

export const getAuthGuardDomainService = (self: object) => {
  const authGuardService = authGuardDomainServiceContext.get(self)

  if (!authGuardService) {
    throw new Error('AuthGuardDomainService context is not defined')
  }

  return authGuardService
}
