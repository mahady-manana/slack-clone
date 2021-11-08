import { gql, useMutation } from "@apollo/client";
import { createUserVariables, createUser } from "./__generated__/CreateUser";

export const useCreateNewUser = () => {
  const CREATE_USER = gql`
    mutation createUser($data: CreateUserInput!) {
      createUser(data: $data) {
        id
        name
        email
        photo
      }
    }
  `;
  const [createNewUserFn, { data, loading, error }] = useMutation<
    createUser,
    createUserVariables
  >(CREATE_USER);
  return {
    createNewUserFn,
    dataCreateUser: data,
    loadingCNU: loading,
    error,
  };
};
