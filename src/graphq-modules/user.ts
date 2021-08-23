// // book.type.graphql
// import { gql } from 'graphql-modules';

// const Book = gql`
//   type Query {
//       book(id: ID!): Book
//   }
//   type Book {
//     id: String
//     title: String
//     author: String
//     summary: String
//     isbn: String
//     genre: [String]
//     url: String
//   }
// `;


// // book.resolver.graphql

// const BookResolvers = {
//     Query: {
//       book(root:any, args: any, context: any) {
//         console.log({ context })
//         return {
//           _id: args.id,
//           title: "To The Lighthouse",
//           author: "Virginia Woolf",
//           summary:"Book summary",
//           isbn: "12345678EDB",
//           genre: ["ficton"],
//           url: "http://lighouse.com"
//         };
//       },
//     },
//     Book: {
//       id(book: any) {
//         return book._id;
//       },
//       title(book: any) {
//         return book.title;
//       },
//       author(book: any) {
//         return book.author;
//       },
//       summary(book: any) {
//         return book.summary;
//       },
//       isbn(book: any) {
//         return book.isbn;
//       },
//       genre(book: any) {
//         return book.genre;
//       },
//       url(book: any) {
//         return book.url;
//       },
//     },
//   }

// function myMiddleware({ root, args, context, info }: any, next: any): any {
//   console.log(1)

//   return next()
// }
// function myMiddleware2(_: any, next: any) {
//   console.log(2)
//   return next()
// }

// // book.module.graphql.ts

// import { createModule } from 'graphql-modules';

// export const BookModule = createModule({
//   id: 'book-module',
//   dirname: __dirname,
//   typeDefs: [Book],
//   resolvers: [BookResolvers],
//   middlewares: {
//     Query: {
//       book: [myMiddleware, myMiddleware2]
//     }
//   }
// });