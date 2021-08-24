import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    extend type Query {
        user(id: ID!): User!
        users: [User!]!
    }
    type User {
        fullName: String!
        phoneNumber: String!
        email: String!
        deviceToken: String
    }
`

export const resolvers = {
    Query: { 
        user(_: any, args: any, context: any) {
            console.log(_, context)
            return { fullName:'test', phoneNumber: '1234567890', email:'test@gmail.com', questions: [{ id: '1', content: 'question 1' }] }
        }, 
        users() {
            console.log('api hit')
            return [{fullName:'test', phoneNumber: '1234567890', email:'test@gmail.com', questions: [{ id: '1', content: 'question 1' }]}]

        } 
    }  
}

