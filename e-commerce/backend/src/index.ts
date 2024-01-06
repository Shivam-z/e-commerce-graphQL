import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { categories, products, reviews } from "../db";
import Category from "../resolvers/Category";
import Mutation from "../resolvers/Mutation";
import Product from "../resolvers/Product";
import Query from "../resolvers/Query";
import dateScalar from "../scalars/date";
import { typeDefs } from "../schema";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation,
    Date: dateScalar,
  },
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => ({ categories, products, reviews }),
  listen: { port: 4000 },
});
console.log(`server started at ${url}`);
