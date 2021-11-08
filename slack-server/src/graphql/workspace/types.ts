import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateWorkspaceInput {
  @Field()
  name: string;

  @Field(() => String)
  users: string;

  @Field(() => String)
  channels: string;
}

@InputType()
export class WorkspaceById {
  @Field()
  id: string;
}
