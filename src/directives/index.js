// const { ReplaceDirective } = require('./replaceDirective');

// const { makeExecutableSchema } = require('@graphql-tools/schema');

// module.exports = makeExecutableSchema({ 
    // schemaDirectives: {
        // replace: ReplaceDirective
    // } 
// })

module.exports = Object.freeze({ ReplaceDirective: require('./replaceDirective').ReplaceDirective })