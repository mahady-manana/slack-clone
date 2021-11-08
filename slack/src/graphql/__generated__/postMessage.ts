/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateMessageInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: postMessage
// ====================================================

export interface postMessage_postMessage {
  __typename: "Message";
  id: string;
  message: string;
  user: string;
  channel: string | null;
  receiver: string | null;
  workspace: string;
  timestamp: any;
}

export interface postMessage {
  postMessage: postMessage_postMessage;
}

export interface postMessageVariables {
  data: CreateMessageInput;
}
