import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/Mutations";
import { GET_USERS } from "../graphql/Queries";

const CreateUser: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [createUser, { error, loading }] = useMutation(CREATE_USER);
  const addUser = () => {
    createUser({
      variables: { name, username, password },
      refetchQueries: [{ query: GET_USERS }],
    });
    setName("");
    setUsername("");
    setPassword("");
  };
  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="createUser">
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => addUser()}>Create User</button>
    </div>
  );
};

export default CreateUser;
