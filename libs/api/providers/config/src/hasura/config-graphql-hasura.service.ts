import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql'
import { ApolloLink, GraphQLRequest } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { GraphQLError, GraphQLSchema } from 'graphql'
import {
  introspectSchema,
  makeRemoteExecutableSchema,
  mergeSchemas,
} from 'graphql-tools'
import nodeFetch from 'node-fetch'
import { ApiConfig, ApiConfigTypes } from '@codelab/api/providers/config'

@Injectable()
export class ConfigGraphqlHasuraService implements GqlOptionsFactory {
  constructor(private readonly config: ConfigService<ApiConfig>) {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    let remoteExecutableSchema: any = null

    try {
      remoteExecutableSchema = await this.createRemoteSchema()
    } catch (e) {
      console.log(e)
    }

    return {
      autoSchemaFile: true,
      installSubscriptionHandlers: false,
      transformSchema: async (schema: GraphQLSchema) => {
        return mergeSchemas({
          schemas: [schema, remoteExecutableSchema],
        })
      },
      transformAutoSchemaFile: true,
      path: '/graphql',
      debug: true,
      tracing: true,
      playground: true,
      formatError: (err: GraphQLError) => {
        // Don't give the specific errors to the client.
        // const a = err;
        // if (err.message.startsWith("Nothing was")) {
        //
        // }
        // return new Error('Internal server error');
        // Otherwise return the original error.  The error can also
        // be manipulated in other ways, so long as it's returned.
        return err
      },
    }
  }

  private async createRemoteSchema(): Promise<GraphQLSchema> {
    try {
      const httpLink = new HttpLink({
        uri: this.config.get(ApiConfigTypes.HASURA_GRAPHQL_URI),
        fetch: nodeFetch as any,
      })

      const adminSecretLink: ApolloLink = setContext(() => ({
        headers: {
          'x-hasura-admin-secret': this.config.get(
            ApiConfigTypes.HASURA_GRAPHQL_ADMIN_SECRET,
          ),
        },
      })).concat(httpLink)

      // This will trigger every time there is a graphql request through this server to hasura
      // we will use it to pass JWT to Hasura
      const authLink: ApolloLink = setContext(
        (_request: GraphQLRequest, prevContext: any) => {
          const { authorization } = prevContext.graphQLContext.req.headers

          return {
            headers: {
              Authorization: authorization,
            },
          }
        },
      ).concat(httpLink)

      // First we get the schema using our hasura admin key
      const remoteIntrospectedSchema = await introspectSchema(adminSecretLink)

      // Next two line appear to be not needed
      // const remoteSchema = printSchema(remoteIntrospectedSchema)
      // const builtHasuraSchema = buildSchemaGraphql(remoteSchema)

      /**
       * Need to be using graphql-tools@4 for stitching
       * But here we pass our JWT token to execute the queries that are
       * forwarded to Hasura through our server
       */
      const remoteExecutableSchema = makeRemoteExecutableSchema({
        // schema: builtHasuraSchema,
        schema: remoteIntrospectedSchema,
        link: authLink,
      })

      return Promise.resolve(remoteExecutableSchema)
    } catch (err) {
      console.log(err)

      return Promise.reject(err)
    }
  }
}