/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WorkspaceById } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: QueryWorkspace
// ====================================================

export interface QueryWorkspace_getWorkspace {
  __typename: "Workspace";
  id: string;
  name: string;
  users: string;
  channels: string;
}

export interface QueryWorkspace {
  getWorkspace: QueryWorkspace_getWorkspace;
}

export interface QueryWorkspaceVariables {
  data: WorkspaceById;
}
