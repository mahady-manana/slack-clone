import { gql } from 'apollo-server-express';
import { PubSub } from 'graphql-subscriptions';
import { makeExecutableSchema } from '@graphql-tools/schema';

const pubsub = new PubSub();

// Schema definition
const typeDefs = gql`
  type Subscription {
    subscriptionChannels: SubscriptionChannel!
  }
  type SubscriptionChannel {
    id: String!
    message: String!
    user: String!
    channel: String!
    workspace: String!
    timestamp: String!
  }
`;

// Resolver map
const resolvers = {
  Subscription: {
    subscriptionChannels: {
      subscribe: () => pubsub.asyncIterator('MESSAGES'),
    },
  },
};

export const subSchema = makeExecutableSchema({ typeDefs, resolvers });
