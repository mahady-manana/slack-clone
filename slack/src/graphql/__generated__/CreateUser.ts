/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_createUser {
  __typename: "User";
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
}

export interface createUser {
  createUser: createUser_createUser;
}

export interface createUserVariables {
  data: CreateUserInput;
}
