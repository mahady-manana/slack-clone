/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateMessageInput {
  user: string;
  channel?: string | null;
  receiver?: string | null;
  workspace: string;
  message: string;
}

export interface CreateUserInput {
  name?: string | null;
  email: string;
  created: string;
  photo?: string | null;
  workspace?: string | null;
}

export interface CreateWorkspaceInput {
  name: string;
  users: string;
  channels: string;
}

export interface MessageByWorkspace {
  workspace: string;
}

export interface UpdateUserWorkspaceInput {
  id: string;
  workspace: string;
}

export interface UserByEmailInput {
  email: string;
}

export interface UserOfWorkspaceInput {
  workspace: string;
}

export interface WorkspaceById {
  id: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
