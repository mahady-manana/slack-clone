/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserByEmailInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: QueryUser
// ====================================================

export interface QueryUser_getUser {
  __typename: "User";
  id: string;
  name: string | null;
  email: string;
  workspace: string | null;
  created: any;
  photo: string | null;
}

export interface QueryUser {
  getUser: QueryUser_getUser;
}

export interface QueryUserVariables {
  data: UserByEmailInput;
}
