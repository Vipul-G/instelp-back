// const { SchemaDirectiveVisitor } = require('graphql-tools');

// class ReplaceDirective extends SchemaDirectiveVisitor {
//     visitFieldDefinition(field) {
//         const { replacement } = this.args;
//         console.log('[custom directive]', replacement )
//         field.resolve = () => {
//             return replacement
//         }
//     }
// }

// module.exports = Object.freeze({ ReplaceDirective })
