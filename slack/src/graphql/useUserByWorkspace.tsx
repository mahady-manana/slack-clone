import { gql, useQuery } from "@apollo/client";
import {
  getUserOfWorkspace,
  getUserOfWorkspaceVariables,
} from "./__generated__/getUserOfWorkspace";

export const useUserByWorkspace = (workspace?: string) => {
  const GET_USER_WORKSPACE = gql`
    query getUserOfWorkspace($data: UserOfWorkspaceInput!) {
      getUserOfWorkspace(data: $data) {
        id
        name
        email
        workspace
        created
        photo
      }
    }
  `;
  const { data, loading, error } = useQuery<
    getUserOfWorkspace,
    getUserOfWorkspaceVariables
  >(GET_USER_WORKSPACE, {
    skip: !Boolean(workspace),
    variables: { data: { workspace: workspace as string } },
  });
  return {
    userByWorkspace: data,
    loadingUseByWorkspace: loading,
    error,
  };
};
