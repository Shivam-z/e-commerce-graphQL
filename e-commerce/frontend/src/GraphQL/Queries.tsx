import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      description
      quantity
      image
      price
      onSale
    }
  }
`;
