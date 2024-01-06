import { gql } from "@apollo/client";

export const ADD_CATEGORY = gql`
  mutation ($body: CategoryBody) {
    addCategory(body: $body) {
      id
      name
    }
  }
`;
