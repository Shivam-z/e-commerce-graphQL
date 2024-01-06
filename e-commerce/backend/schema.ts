export const typeDefs = `#graphql
type Product{
  id: ID!
  name: String!
  description: String!
  quantity: Int!
  image: String!
  price: Float!
  onSale: Boolean!
  category:Category
  reviews:[Review!]!
}

type Category{
  id:ID!
  name:String!
  products:[Product!]!
}

scalar Date

type Review{
  id: ID!
  date: Date!,
  title: String!,
  comment: String!,
  rating: Int,
}

input ProductsFilterInputs{
  onSale:Boolean
}

type Query {
  products(filter:ProductsFilterInputs): [Product!]!
  product(id:ID!): Product
  categories:[Category!]!
  category(id:ID!): Category
}

type Mutation {
  addCategory(body:CategoryBody):Category!
  addProduct(body:ProductBody):Product!
  addReview(body:ReviewBody):Review!
  deleteCategory(id:ID!):Boolean!
}

input CategoryBody{
  name:String!
}

input ProductBody{
  name: String!
  description: String!
  quantity: Int!
  image: String!
  price: Float!
  onSale: Boolean!
  categoryId:String!
}

input ReviewBody{
  date: Date!,
  title: String!,
  comment: String!,
  rating: Int!,
  productId:String!
}
`;
