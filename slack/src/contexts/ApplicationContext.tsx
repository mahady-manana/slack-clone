import { createContext, FC, useState } from "react";
import { UserType } from "../types/user";
import { WorkspaceType } from "../types/workspace";
import { IApplicationContext } from "./interfaces";

export const ApplicationContext = createContext<IApplicationContext>(
  {} as IApplicationContext
);
export const ApplicationContextPorvider: FC = ({ children }): JSX.Element => {
  const [user, setUser] = useState<UserType>();
  const [workspace, setWorkspace] = useState<WorkspaceType>();
  const [workspaceUser, setWorkspaceUser] = useState<UserType[]>();
  const [currentSelectedUser, setCurrentSelectedUser] = useState<UserType>();

  return (
    <ApplicationContext.Provider
      value={{
        user,
        workspace,
        workspaceUser,
        currentSelectedUser,
        setUser,
        setWorkspace,
        setCurrentSelectedUser,
        setWorkspaceUser,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
