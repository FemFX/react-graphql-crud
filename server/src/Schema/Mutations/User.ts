import { GraphQLID, GraphQLString } from "graphql";
import { User } from "../../Entities/User";
import { MessageType } from "../TypeDefs/Messages";
import { UserType } from "../TypeDefs/User";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await User.insert({
      name,
      username,
      password,
    });
    return args;
  },
};
export const DELETE_USER = {
  type: MessageType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await User.delete(id);
    return {
      successful: true,
      message: "Delete successfully",
    };
  },
};
export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: {
      type: GraphQLString,
    },
    oldPassword: {
      type: GraphQLString,
    },
    newPassword: {
      type: GraphQLString,
    },
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Username doesnt exist");
    }
    const userPass = user?.password;
    if (userPass === oldPassword) {
      await User.update({ username: username }, { password: newPassword });
    } else {
      throw new Error("Passwords do not match");
    }
    return {
      successful: true,
      message: "Update successfully",
    };
  },
};
