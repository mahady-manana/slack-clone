/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserWorkspaceInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateUserWorkspace
// ====================================================

export interface updateUserWorkspace_updateUserWorkspace {
  __typename: "User";
  id: string;
  name: string | null;
  email: string;
  workspace: string | null;
  photo: string | null;
}

export interface updateUserWorkspace {
  updateUserWorkspace: updateUserWorkspace_updateUserWorkspace;
}

export interface updateUserWorkspaceVariables {
  data: UpdateUserWorkspaceInput;
}
