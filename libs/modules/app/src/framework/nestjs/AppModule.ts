import { Module, Provider } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { Connection } from 'typeorm'
import { CreateAppCommandHandler } from '../../core/application/handlers/CreateAppCommandHandler'
import { DeleteAppCommandHandler } from '../../core/application/handlers/DeleteAppCommandHandler'
import { GetAppQueryHandler } from '../../core/application/handlers/GetAppQueryHandler'
import { GetAppsQueryHandler } from '../../core/application/handlers/GetAppsQueryHandler'
import { CreateAppService } from '../../core/application/useCases/createApp/CreateAppService'
import { DeleteAppService } from '../../core/application/useCases/deleteApp/DeleteAppService'
import { GetAppService } from '../../core/application/useCases/getApp/GetAppService'
import { GetAppsService } from '../../core/application/useCases/getApps/GetAppsService'
import { TypeOrmAppRepositoryAdapter } from '../../infrastructure/persistence/TypeOrmAppRepositoryAdapter'
import { AppCommandQueryAdapter } from '../../presentation/controllers/AppCommandQueryAdapter'
import { AppDITokens } from '../AppDITokens'

export const persistenceProviders: Array<Provider> = [
  {
    provide: AppDITokens.AppRepository,
    useFactory: (connection) =>
      connection.getCustomRepository(TypeOrmAppRepositoryAdapter),
    inject: [Connection],
  },
  AppCommandQueryAdapter,
]

export const useCaseProviders: Array<Provider> = [
  {
    provide: AppDITokens.GetAppUseCase,
    useFactory: (appRepository) => new GetAppService(appRepository),
    inject: [AppDITokens.AppRepository],
  },
  {
    provide: AppDITokens.GetAppsUseCase,
    useFactory: (appRepository) => new GetAppsService(appRepository),
    inject: [AppDITokens.AppRepository],
  },
  {
    provide: AppDITokens.DeleteAppUseCase,
    useFactory: (appRepository) => new DeleteAppService(appRepository),
    inject: [AppDITokens.AppRepository],
  },
  {
    provide: AppDITokens.CreateAppUseCase,
    useFactory: (appRepository) => new CreateAppService(appRepository),
    inject: [AppDITokens.AppRepository],
  },
]

export const handlerProviders: Array<Provider> = [
  // AddPageToAppCommandHandler,
  GetAppQueryHandler,
  GetAppsQueryHandler,
  GetAppQueryHandler,
  CreateAppCommandHandler,
  DeleteAppCommandHandler,
]

@Module({
  imports: [CqrsModule],
  providers: [
    ...persistenceProviders,
    ...useCaseProviders,
    ...handlerProviders,
  ],
})
export class AppModule {}