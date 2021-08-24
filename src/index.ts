import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { merge } from 'lodash';
import * as Question from './modules/question';
import * as User from './modules/user';

async function startApolloServer() {

  const typeDef = gql`
    type Query {
      _empty: String 
    }
  `

  const server = new ApolloServer({ 
    typeDefs: [typeDef, Question.typeDefs, User.typeDefs], 
    resolvers: merge(Question.resolvers, User.resolvers)
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise((resolve: any) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer().catch(console.log)