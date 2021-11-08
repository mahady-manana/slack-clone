import dotenv from 'dotenv';
// import { createServer } from 'http';
// import { apolloServer } from './server/apolloServer';
// import app from './server/express';

// const PORT = process.env.PORT || 4000;
// // entry point for apolloServer
// const httpServer = createServer(app);

// apolloServer(app, httpServer);

// // initiate the server
// httpServer.listen(PORT, () => {
//   console.log(`Express server running at ${PORT}`);
// });
import express from 'express';
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
} from './graphql';
import { buildSchema } from 'type-graphql';
// import { subSchema } from './server/subscription';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import { createServer } from 'http';
dotenv.config();
(async () => {
  const PORT = process.env.PORT || 4000;
  const app = express();
  app.use(cors());
  app.use(compression());
  app.use(helmet());
  const httpServer = createServer(app);
  const schema = await buildSchema({
    resolvers: [UserResolver, WorkspaceResolver, MessageResolver, AuthResolver],
  });

  const server = new ApolloServer({
    schema,
  });

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
  server.applyMiddleware({ app });

  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath },
  );

  httpServer.listen(PORT, () => {
    console.log(
      `🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`,
    );
    console.log(
      `🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`,
    );
  });
})();
