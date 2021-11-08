import { useEffect } from "react";
import { useUserByWorkspace } from "../graphql/useUserByWorkspace";
import { UserType } from "../types/user";
import { useApplicationContext } from "./useApplicationContext";

export const useWorkspaceBuilder = () => {
  const { setWorkspaceUser, workspaceUser, setWorkspace, workspace } =
    useApplicationContext();

  const { loadingUseByWorkspace, userByWorkspace } = useUserByWorkspace(
    workspace?.id
  );
  useEffect(() => {
    if (userByWorkspace) {
      setWorkspace(
        (prev) =>
          prev && {
            ...prev,
            users: userByWorkspace.getUserOfWorkspace as UserType[],
          }
      );
      setWorkspaceUser(userByWorkspace.getUserOfWorkspace as UserType[]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userByWorkspace]);
  return {
    workspaceUser,
    loadingUseByWorkspace,
  };
};
