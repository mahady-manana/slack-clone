import { InputType, Field, ObjectType } from 'type-graphql';

@InputType()
export class CreateMessageInput {
  @Field()
  user: string;

  @Field({ nullable: true })
  channel: string;

  @Field({ nullable: true })
  receiver: string;

  @Field()
  workspace: string;

  @Field()
  message: string;
}

@InputType()
export class MessageByUserId {
  @Field()
  id: string;
}

@InputType()
export class MessageByWorkspace {
  @Field()
  workspace: string;
}

@InputType()
export class SubscriptionChannelInput {
  @Field()
  workspaceId: string;
  userId: string;
}

@ObjectType()
export class MessageSubType {
  @Field()
  id: number;

  @Field(() => String)
  message: string;

  @Field(() => String)
  user: string;

  @Field({ nullable: true })
  channel: string;

  @Field({ nullable: true })
  receiver: string;

  @Field(() => String)
  workspace: string;

  @Field(() => Date)
  timestamp: Date;
}
