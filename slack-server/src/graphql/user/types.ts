import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  name: string;

  @Field()
  email: string;

  @Field(() => String)
  created: string;

  @Field({ nullable: true })
  photo?: string;

  @Field({ nullable: true })
  workspace: string;
}

@InputType()
export class UserByEmailInput {
  @Field()
  email: string;
}

@InputType()
export class UserOfWorkspaceInput {
  @Field()
  workspace: string;
}

@InputType()
export class UpdateUserWorkspaceInput {
  @Field()
  id: string;

  @Field()
  workspace: string;
}
