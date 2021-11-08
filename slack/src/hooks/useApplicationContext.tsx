import { useContext, useEffect } from "react";
import { ApplicationContext } from "../contexts/ApplicationContext";
import { useGetWorkspace } from "../graphql/useGetWorkspace";
import { useUserByWorkspace } from "../graphql/useUserByWorkspace";
import { UserType } from "../types/user";

export const useApplicationContext = () => {
  const {
    user,
    setUser,
    workspace,
    setWorkspace,
    workspaceUser,
    currentSelectedUser,
    setCurrentSelectedUser,
    setWorkspaceUser,
  } = useContext(ApplicationContext);

  const Authentication = {
    isAuth: () => {
      if (typeof window === undefined) return false;
      if (localStorage.getItem("session_infos"))
        return JSON.parse(localStorage.getItem("session_infos") as any);
      else return false;
    },
    authenticate: (token: any, callback: (tokens: any) => void) => {
      if (typeof window !== undefined && token !== undefined) {
        localStorage.setItem("session_infos", JSON.stringify(token));
        return callback(token);
      }
    },

    clearToken: (callback: () => void) => {
      if (typeof window !== undefined) localStorage.removeItem("session_infos");
      callback();
    },
  };
  const { workspaceData, loadingWorkspace } = useGetWorkspace(
    Authentication.isAuth().workspace
  );
  const { userByWorkspace } = useUserByWorkspace(
    workspaceData?.getWorkspace.id
  );

  useEffect(() => {
    if (Authentication.isAuth()) {
      setUser(Authentication.isAuth());
    }
  }, []);
  useEffect(() => {
    console.log(workspaceData);

    if (workspaceData) {
      setWorkspace(
        (prev) =>
          prev && {
            ...workspaceData.getWorkspace,
            users: undefined,
          }
      );
    }
  }, [setWorkspace, workspaceData]);

  useEffect(() => {
    console.log(workspace);
    setWorkspaceUser(userByWorkspace?.getUserOfWorkspace as UserType[]);
    setWorkspace(
      (prev) =>
        workspaceData && {
          ...workspaceData.getWorkspace,
          users: userByWorkspace?.getUserOfWorkspace as UserType[],
        }
    );
  }, [setWorkspace, setWorkspaceUser, userByWorkspace, workspaceData]);
  return {
    user,
    workspace,
    workspaceUser,
    currentSelectedUser,
    setUser,
    setWorkspace,
    setCurrentSelectedUser,
    setWorkspaceUser,
    Authentication,
  };
};
