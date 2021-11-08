/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateMessageInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Mutation
// ====================================================

export interface Mutation_postMessage {
  __typename: "Message";
  id: string;
  message: string;
  user: string;
  channel: string | null;
  receiver: string | null;
  workspace: string;
  timestamp: any;
}

export interface Mutation {
  postMessage: Mutation_postMessage;
}

export interface MutationVariables {
  data: CreateMessageInput;
}
