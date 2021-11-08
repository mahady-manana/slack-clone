import React from "react";
import { UserType } from "../types/user";
import { WorkspaceType } from "../types/workspace";

export interface IApplicationContext {
  user: UserType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  workspace?: WorkspaceType;
  setWorkspace: React.Dispatch<React.SetStateAction<WorkspaceType | undefined>>;
  workspaceUser?: UserType[];
  setWorkspaceUser: React.Dispatch<
    React.SetStateAction<UserType[] | undefined>
  >;
  currentSelectedUser?: UserType;
  setCurrentSelectedUser: React.Dispatch<
    React.SetStateAction<UserType | undefined>
  >;
}
