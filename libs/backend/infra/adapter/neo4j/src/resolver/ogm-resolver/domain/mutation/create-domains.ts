import type { GraphQLRequestContext } from '@codelab/backend/abstract/types'
import { vercelApis } from '@codelab/backend/infra/adapter/vercel'
import type { OGM_TYPES } from '@codelab/shared/abstract/codegen'
import type { IFieldResolver } from '@graphql-tools/utils'
import { Repository } from '../../../../infra'
import { domainSelection } from '../../../../selectionSet'
import { domainExistsError } from '../validation/domain.error'

export const createDomains: IFieldResolver<
  unknown,
  GraphQLRequestContext,
  { input: Array<OGM_TYPES.DomainCreateInput> },
  Promise<OGM_TYPES.CreateDomainsMutationResponse>
> = async (_, args, { req }) => {
  console.log(args)

  const { app, id, name } = args.input[0]!
  const res = await vercelApis.domain.addDomain(name)

  if (res.status === 409) {
    throw domainExistsError
  }

  const Domain = await Repository.instance.Domain

  return Domain.create({
    input: [{ app, id, name }],
    selectionSet: `{
        domains {
          ${domainSelection}
        }
      }`,
  })
}