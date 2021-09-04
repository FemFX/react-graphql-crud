import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { User } from "./Entities/User";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "react_graphql_crud",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
    entities: [User],
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`Server started on port ${port}`));
};
main();
