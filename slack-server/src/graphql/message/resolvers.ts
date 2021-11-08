import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Subscription,
  PubSub,
  PubSubEngine,
  Root,
} from 'type-graphql';
import { Message } from '../../models/Message';
import {
  CreateMessageInput,
  MessageByUserId,
  MessageByWorkspace,
  MessageSubType,
} from './types';

@Resolver()
export class MessageResolver {
  @Query(() => Message)
  async getMessage(@Arg('data') data: MessageByUserId) {
    const { id } = data;
    const message = await Message.findOne({ where: { id } });
    return message;
  }

  @Query(() => [Message])
  async getMessageByWorkspace(@Arg('data') data: MessageByWorkspace) {
    const { workspace } = data;
    const message = await Message.find({ where: { workspace } });
    return message;
  }

  @Mutation(() => Message)
  async postMessage(
    @Arg('data') data: CreateMessageInput,
    @PubSub() pubSub: PubSubEngine,
  ) {
    const { channel, message, user, workspace, receiver } = data;
    const msg = Message.create({
      channel,
      message,
      workspace,
      user,
      receiver,
    });
    await msg.save();
    await pubSub.publish('MESSAGES', msg);
    await msg.save();
    return msg;
  }
  @Subscription((_returns) => Message, {
    topics: 'MESSAGES',
  })
  subscriptionChannel(
    @Root() notificationPayload: MessageSubType,
    @Arg('topic') _topic: string,
  ): MessageSubType | null {
    return notificationPayload;
  }
}
