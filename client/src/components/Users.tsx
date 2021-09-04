import { useMutation, useQuery } from "@apollo/client";
import { Key } from "react";
import { DELETE_USER } from "../graphql/Mutations";
import { GET_USERS } from "../graphql/Queries";

const Users: React.FC = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_USERS);
  const [deleteUser] = useMutation(DELETE_USER);

  if (error) {
    <div>{error}</div>;
  }
  if (loading) {
    <div>Loading...</div>;
  }
  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any, idx: Key) => (
          <div key={idx}>
            <div>{user.name}</div>
            <button
              onClick={() =>
                deleteUser({
                  variables: { id: user.id },
                  refetchQueries: [{ query: GET_USERS }],
                })
              }
            >
              Delete User
            </button>
          </div>
        ))}
    </div>
  );
};

export default Users;
