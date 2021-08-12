import { gql } from 'apollo-server-express'

export const typeDefs = gql`
extend type Query {
    user(id: ID!): User!
    users: [User!]!
}
type User {
    name: String!
    phoneNumber: String!
    email: String!
    questions: [Question!]! 
}
`
