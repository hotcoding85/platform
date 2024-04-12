import { createContext } from 'mobx-keystone'
import type { IRouterService } from './router.service.interface'

export const routerServiceContext = createContext<IRouterService>()

export const getRouterService = (self: object) => {
  const routerService = routerServiceContext.get(self)

  if (!routerService) {
    throw new Error('routerServiceContext is not defined')
  }

  return routerService
}
