import { IResolvers } from '@graphql-tools/utils'
import { getDriver } from '../../infra/driver'
import { Page } from '../../model'
import { MutationDeletePagesArgs, PageWhere } from '../../ogm-types.gen'
import { elementRepository } from '../../repositories'
import { pageSelectionSet } from '../selectionSets/pageSelectionSet'

const driver = getDriver()

export const pageMutationResolvers: IResolvers = {
  deletePages: async (_source, args: MutationDeletePagesArgs) => {
    const session = driver.rxSession()

    if (!args.where) {
      throw new Error('No argument provided for delete operation')
    }

    const pages = await Page().find({
      where: args.where,
      selectionSet: pageSelectionSet,
    })

    const rootElementIds = pages.map((x) => x.rootElement.id)

    await session
      .writeTransaction((txn) =>
        elementRepository.deleteElementsSubgraph(txn, rootElementIds),
      )
      .toPromise()
      .finally(() => session.close())

    return Page().delete({
      where: args.where as PageWhere,
      rootValue: '',
    })
  },
}