import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { User } from '../../models/User';
import {
  CreateUserInput,
  UpdateUserWorkspaceInput,
  UserByEmailInput,
  UserOfWorkspaceInput,
} from './types';

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(@Arg('data') data: CreateUserInput) {
    const { email, name, created, photo, workspace } = data;
    const user = User.create({
      email,
      name,
      created,
      photo,
      workspace,
    });
    await user.save();
    return user;
  }
  @Mutation(() => User)
  async updateUserWorkspace(@Arg('data') data: UpdateUserWorkspaceInput) {
    const { id, workspace } = data;
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (user) {
      user.workspace = workspace;
      await user.save();
      return user;
    }
    return null;
  }
  @Query(() => User)
  async getUser(@Arg('data') data: UserByEmailInput) {
    const { email } = data;
    const user = await User.findOne({ where: { email } });
    return user;
  }
  @Query(() => [User])
  async getUserOfWorkspace(@Arg('data') data: UserOfWorkspaceInput) {
    const { workspace } = data;
    const user = await User.find({ where: { workspace } });
    return user;
  }
}
