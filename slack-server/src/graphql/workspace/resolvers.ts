import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Workspace } from '../../models/Workspace';
import { CreateWorkspaceInput, WorkspaceById } from './types';

@Resolver()
export class WorkspaceResolver {
  @Mutation(() => Workspace)
  async createWorkspace(@Arg('data') data: CreateWorkspaceInput) {
    const { name, channels, users } = data;
    const works = Workspace.create({
      name,
      channels,
      users,
    });
    await works.save();
    return works;
  }
  @Query(() => Workspace)
  async getWorkspace(@Arg('data') data: WorkspaceById) {
    const { id } = data;
    const works = await Workspace.findOne({ where: { id } });
    return works;
  }
}
