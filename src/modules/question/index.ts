
import { gql } from 'apollo-server-express'

// directive @replace(replacement: String) on FIELD_DEFINITION
// @replace(replacement: "replaced string")
export const typeDefs = gql`
extend type Query {
    question(id: ID!): Question!
    questions: [Question!]!
}
type Question {
    id: ID!
    content: String! 
}
`
export const resolvers = {
    Query: {
        question(_: any, args: any, context: any) {
            console.log(_, context)
            return { id: '1', content: 'question 1' }
        },
        questions() {
            console.log('api hit')
            return [{ id: '1', content: 'question 1' }]
        }
    }
}
