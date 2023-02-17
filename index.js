import express from "express";
import serverless from "serverless-http";
import graphiql from "graphql-playground-middleware-express";
import { ApolloServer, gql } from "apollo-server-express";
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
    Query: {
        hello: () => "world"
    }
};
const app = express();
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     path: "/graphql"
// });
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();
app.get("/playground", graphiql({ endpoint: "/dev/graphql" }));
const handler = serverless(app);
export { handler };