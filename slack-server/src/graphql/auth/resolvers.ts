import { Resolver, Query, Arg } from 'type-graphql';
import { User } from '../../models/User';
import { Workspace } from '../../models/Workspace';
import { UserByEmail } from './types';

@Resolver()
export class AuthResolver {
  @Query(() => [User, Workspace])
  async authUser(@Arg('data') data: UserByEmail) {
    const { email } = data;
    const user = await User.findOne({
      where: { email },
    });
    const workspace = Workspace.findOne({ where: { id: user?.workspace } });
    return [user, workspace];
  }
}
