import { gql, useMutation } from "@apollo/client";
import {
  createWorkspaceVariables,
  createWorkspace,
} from "./__generated__/createWorkspace";

export const useCreateWorkspace = () => {
  const CREATE_WORKSPACE = gql`
    mutation createWorkspace($data: CreateWorkspaceInput!) {
      createWorkspace(data: $data) {
        id
        name
        users
        channels
      }
    }
  `;
  const [createWorkspaceFn, { data, loading, error }] = useMutation<
    createWorkspace,
    createWorkspaceVariables
  >(CREATE_WORKSPACE);
  return {
    createWorkspaceFn,
    dataCreateWorkspace: data,
    loadingCW: loading,
    error,
  };
};
