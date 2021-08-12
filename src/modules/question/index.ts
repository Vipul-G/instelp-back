const { typeDefs } = require('./question.typeDefs') 
const { resolvers } = require('./question.resolvers')
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { ReplaceDirective } = require('../../directives')

export default makeExecutableSchema({ 
    schemaDirectives: {
        replace: ReplaceDirective
    },
    typeDefs,
    resolvers
})
// module.exports = Object.freeze({ typeDefs, resolvers, schemaDirectives: { replace: ReplaceDirective } })