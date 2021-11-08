/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageByWorkspace } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Query
// ====================================================

export interface Query_getMessageByWorkspace {
  __typename: "Message";
  id: string;
  message: string;
  user: string;
  channel: string | null;
  receiver: string | null;
  workspace: string;
  timestamp: any;
}

export interface Query {
  getMessageByWorkspace: Query_getMessageByWorkspace[];
}

export interface QueryVariables {
  data: MessageByWorkspace;
}
