import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

function graphqlStartServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));
}

export default graphqlStartServer;
