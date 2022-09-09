import { gql } from 'apollo-server-micro'
import { getTagGraphs, tagIsRoot } from '../../cypher'

export const tagSchema = gql`
  type Tag {
    id: ID! @id(autogenerate: false)
    name: String! @unique
    isRoot: Boolean
      @cypher(statement: """${tagIsRoot}""")
    parent: Tag @relationship(type: "CHILDREN", direction: IN)
    children: [Tag!]! @relationship(type: "CHILDREN", direction: OUT)
    owner: User! @relationship(type: "OWNED_BY", direction: OUT)
  }

  extend type Tag
    @auth(
      rules: [
        {
          operations: [UPDATE, CREATE, DELETE]
          roles: ["Admin"]
          bind: { owner: { auth0Id: "$jwt.sub" } }
        }
        {
          roles: ["User"]
          operations: [UPDATE, CREATE, DELETE]
          where: { owner: { auth0Id: "$jwt.sub" } }
          bind: { owner: { auth0Id: "$jwt.sub" } }
        }
      ]
    )

  # should be removed, added as a workaround to fix the build issue
  type TagGraphOptions {
    sort: Int
    limit: Int
  }

  # We represent the TagGraph as a root node
  type TagGraph @exclude {
    id: ID!
    name: String!
    descendants: [ID!]!
    isRoot: Boolean!
  }

  type Query {
    tagGraphs: [TagGraph!]!
      @cypher(statement: """${getTagGraphs}""")
  }
`