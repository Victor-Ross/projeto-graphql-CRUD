import 'reflect-metadata';
import { config } from 'dotenv';
config();
import { ApolloServer } from 'apollo-server';

import './database';

import { schemaFn } from './schemas';
import { getCustomRepository } from 'typeorm';


const app = async () => {
  const schema = await schemaFn();

  const server = new ApolloServer({ 
    schema, 
    context: ({ req }) => {
      const context = {
        req,
        token: req?.headers?.authorization,
      }

      return context;
  } });

  server.listen({ port: 4000 }, () => console.log('GraphQL server is running on port 4000'));
}

app();