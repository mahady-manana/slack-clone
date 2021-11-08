import { gql, useMutation } from "@apollo/client";
import {
  updateUserWorkspaceVariables,
  updateUserWorkspace,
} from "./__generated__/updateUserWorkspace";

export const useUpdateUserWorkspace = () => {
  const UPDATE_USER_WORKSPACE = gql`
    mutation updateUserWorkspace($data: UpdateUserWorkspaceInput!) {
      updateUserWorkspace(data: $data) {
        id
        name
        email
        workspace
        photo
      }
    }
  `;
  const [updateUserWorkspaceFn, { data, loading, error }] = useMutation<
    updateUserWorkspace,
    updateUserWorkspaceVariables
  >(UPDATE_USER_WORKSPACE);
  return {
    updateUserWorkspaceFn,
    dataUpdateUserWrks: data,
    loadingUUW: loading,
    error,
  };
};
