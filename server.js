const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./modules');
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv');
dotenv.config()

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

async function startServer() {
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app });
}
startServer();

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000`)
);
