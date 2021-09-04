import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $username: String!, $password: String!) {
    createUser(name: $name, username: $username, password: $password) {
      id
      name
      username
    }
  }
`;
export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;
export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword(
    $username: String!
    $oldPassword: String!
    $newPassword: String!
  ) {
    updateUser(
      username: $username
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) {
      message
    }
  }
`;
