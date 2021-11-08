/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserOfWorkspaceInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getUserOfWorkspace
// ====================================================

export interface getUserOfWorkspace_getUserOfWorkspace {
  __typename: "User";
  id: string;
  name: string | null;
  email: string;
  workspace: string | null;
  created: any;
  photo: string | null;
}

export interface getUserOfWorkspace {
  getUserOfWorkspace: getUserOfWorkspace_getUserOfWorkspace[];
}

export interface getUserOfWorkspaceVariables {
  data: UserOfWorkspaceInput;
}
