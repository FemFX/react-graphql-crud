import CreateUser from "./components/CreateUser";
import UpdatePassword from "./components/UpdatePassword";
import Users from "./components/Users";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <CreateUser />
      <UpdatePassword />
      <Users />
    </>
  );
};

export default App;
