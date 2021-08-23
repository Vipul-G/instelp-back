import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { createApplication } from 'graphql-modules';
import { BookModule }  from './graphq-modules/user';

// This is your application, it contains your GraphQL schema and the implementation of it.
const application = createApplication({
  modules: [BookModule]
});
// This is your actual GraphQL schema
const mySchema = application.createSchemaForApollo();

async function startApolloServer() {
  const server = new ApolloServer({ schema: mySchema, context: ()=>({ 
    name: 'vipul gautam' 
  }) })
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise((resolve: any, reject) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer().catch(console.log)

