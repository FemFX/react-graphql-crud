import { gql } from "@apollo/client";

export const GET_USERS = gql`
  {
    getAllUsers {
      id
      name
      username
    }
  }
`;
