import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { execute, subscribe } from 'graphql';
// import { PubSub } from 'graphql-subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import {
  AuthResolver,
  MessageResolver,
  UserResolver,
  WorkspaceResolver,
} from '../graphql';
import { buildSchema } from 'type-graphql';
import { subSchema } from './subscription';

export const apolloServer = async (app: Application, httpServer: any) => {
  const schema = await buildSchema({
    resolvers: [UserResolver, WorkspaceResolver, MessageResolver, AuthResolver],
  });
  const server = new ApolloServer({
    schema,
  });
  // const pubsub = new PubSub();
  await createConnection({
    url: process.env.DATABASE_URL,
    type: 'postgres',
    entities: ['build/models/*.js'],
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  SubscriptionServer.create(
    { schema: subSchema, execute, subscribe },
    { server: httpServer, path: '/subscriptions' },
  );
};
