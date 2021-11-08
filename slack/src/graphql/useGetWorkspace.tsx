import { gql, useQuery } from "@apollo/client";
import {
  QueryWorkspace,
  QueryWorkspaceVariables,
} from "./__generated__/QueryWorkspace";

export const useGetWorkspace = (workspace?: string) => {
  const GET_WORKSPACE = gql`
    query QueryWorkspace($data: WorkspaceById!) {
      getWorkspace(data: $data) {
        id
        name
        users
        channels
      }
    }
  `;
  const { data, loading, error } = useQuery<
    QueryWorkspace,
    QueryWorkspaceVariables
  >(GET_WORKSPACE, {
    skip: !Boolean(workspace),
    variables: { data: { id: workspace as string } },
  });
  console.log(error, data);

  return {
    workspaceData: data,
    loadingWorkspace: loading,
    error,
  };
};
