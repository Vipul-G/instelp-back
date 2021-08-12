import { createModule } from 'graphql-modules';
import { gql } from 'graphql-modules';

const Author = gql`
    type Author 
`;
export const AuthorModule = createModule({
  id: 'book-module',
  dirname: __dirname,
  typeDefs: [Author],
  resolvers: [AuthorResolvers]
});


// genre.module.graphql.ts
// import{ Genre } from './genre.type.graphql';
// import { GenreResolver } '.genre.resolver.graphql';
// import { createModule } from 'graphql-modules';

// export const GenreModule = createModule({
//   id: 'book-module',
//   dirname: __dirname,
//   typeDefs: [Genre],
//   resolvers: [GenreResolvers]
// });