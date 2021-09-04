import { GraphQLList } from "graphql";
import { User } from "../../Entities/User";
import { UserType } from "../TypeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find();
  },
};
