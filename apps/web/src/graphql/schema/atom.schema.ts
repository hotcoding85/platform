import { AtomType } from '@codelab/shared/abstract/core'
import { gql } from 'apollo-server-micro'

const atomTypeSchema = `enum AtomType {
    ${Object.values(AtomType).join('\n')}
  }`

export const atomSchema = gql`
  ${atomTypeSchema}

  type Atom {
    id: ID! @id
    type: AtomType! @unique
    name: String! @unique
    tags: [String!]
    api: InterfaceType! @relationship(type: "ATOM_API", direction: OUT)
  }

  extend type Atom @auth(rules: [{ roles: ["Admin"] }])

  # Can't reuse from Neo4j schema
  type CreateInfo {
    bookmark: String
    nodesCreated: Int!
    relationshipsCreated: Int!
  }

  type ImportAtomsMutationResponse {
    atoms: [Atom!]
  }

  input ImportAtomsInput {
    payload: [JSONObject!]
  }

  type Mutation {
    importAtoms(input: ImportAtomsInput!): ImportAtomsMutationResponse
  }
`