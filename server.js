const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./modules');

const app = express();

async function startServer() {
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app });
}
startServer();

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000`)
);
