import { gql } from 'apollo-server-express'

export const typeDefs = gql`
directive @replace(replacement: String) on FIELD_DEFINITION
type Query {
    question(id: ID!): Question!
    questions: [Question!]!
}
type Question {
    id: ID!
    content: String! @replace(replacement: "replaced string")
}
`



// module.exports = Object.freeze({ typeDefs })