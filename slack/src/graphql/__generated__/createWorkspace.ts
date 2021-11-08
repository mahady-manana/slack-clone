/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateWorkspaceInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createWorkspace
// ====================================================

export interface createWorkspace_createWorkspace {
  __typename: "Workspace";
  id: string;
  name: string;
  users: string;
  channels: string;
}

export interface createWorkspace {
  createWorkspace: createWorkspace_createWorkspace;
}

export interface createWorkspaceVariables {
  data: CreateWorkspaceInput;
}
