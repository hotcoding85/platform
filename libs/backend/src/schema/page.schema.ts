import { gql } from 'apollo-server-micro'

export const pageSchema = gql`
  type Page {
    id: ID! @id
    name: String!
    rootElement: Element!
      @relationship(type: "ROOT_PAGE_ELEMENT", direction: IN)
    app: App! @relationship(type: "PAGES", direction: OUT)
  }
`