import type { GqlContext } from '@codelab/backend/abstract/types'
import type { ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloDriver } from '@nestjs/apollo'
import type { ModuleMetadata } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { Test, type TestingModule } from '@nestjs/testing'
import type { GraphQLSchema } from 'graphql'
import { GraphQLSchemaModule } from '../graphql-schema.module'
import { DatabaseService, Neo4jModule, OgmModule, OgmService } from '../infra'
import { GRAPHQL_SCHEMA_PROVIDER } from '../schema'

export const nestNeo4jGraphqlModule =
  GraphQLModule.forRootAsync<ApolloDriverConfig>({
    driver: ApolloDriver,
    imports: [GraphQLSchemaModule],
    inject: [GRAPHQL_SCHEMA_PROVIDER],
    useFactory: async (graphqlSchema: GraphQLSchema) => {
      return {
        context: (context: GqlContext) => {
          return {
            ...context,
            jwt: {
              // Add roles that would satisfy your @authorization rules
              roles: ['Admin'],
            },
          }
        },
        schema: graphqlSchema,
      }
    },
  })

export const setupTestingContext = async (metadata: ModuleMetadata = {}) => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [
      nestNeo4jGraphqlModule,
      Neo4jModule,
      OgmModule,
      ...(metadata.imports ?? []),
    ],
  })
    .overrideGuard(AuthGuard('jwt'))
    .useValue({ canActivate: () => true })
    .compile()

  const databaseService = module.get(DatabaseService)
  const ogmService = module.get(OgmService)
  const nestApp = module.createNestApplication()

  const beforeAll = async () => {
    await nestApp.init()
    await databaseService.resetDatabase()
  }

  const afterAll = async () => {
    await nestApp.close()
  }

  return {
    afterAll,
    beforeAll,
    module,
    nestApp,
  }
}
