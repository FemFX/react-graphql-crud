import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_PASSWORD } from "../graphql/Mutations";
import { GET_USERS } from "../graphql/Queries";

const UpdatePassword: React.FC = (): JSX.Element => {
  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  const [username, setUsername] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const updatePass = (): void => {
    updatePassword({
      variables: { oldPassword, username, newPassword },
      refetchQueries: [{ query: GET_USERS }],
    });
    setUsername("");
    setOldPassword("");
    setNewPassword("");
  };
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        placeholder="Current Password"
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="New Password"
      />
      <button onClick={updatePass}>Update</button>
    </div>
  );
};

export default UpdatePassword;
