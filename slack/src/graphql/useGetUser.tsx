import { gql, useQuery } from "@apollo/client";
import { QueryUser, QueryUserVariables } from "./__generated__/QueryUser";

export const useGetUser = (email?: string) => {
  const GET_USER_WORKSPACE = gql`
    query QueryUser($data: UserByEmailInput!) {
      getUser(data: $data) {
        id
        name
        email
        workspace
        created
        photo
      }
    }
  `;
  const { data, loading, error } = useQuery<QueryUser, QueryUserVariables>(
    GET_USER_WORKSPACE,
    {
      skip: !Boolean(email),
      variables: { data: { email: email as string } },
    }
  );
  return {
    userData: data,
    loadingUser: loading,
    error,
  };
};
