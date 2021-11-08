import { gql, useQuery } from "@apollo/client";
import { Query, QueryVariables } from "./__generated__/Query";

export const useMessageByWorkspace = (workspace?: string) => {
  const GET_MESSAGE_WORKSPACE = gql`
    query Query($data: MessageByWorkspace!) {
      getMessageByWorkspace(data: $data) {
        id
        message
        user
        channel
        receiver
        workspace
        timestamp
      }
    }
  `;
  const { data, loading, error, refetch } = useQuery<Query, QueryVariables>(
    GET_MESSAGE_WORKSPACE,
    {
      skip: !Boolean(workspace),
      variables: { data: { workspace: workspace as string } },
    }
  );
  return {
    messageByWorkspace: data,
    loadingMessageByWorkspace: loading,
    error,
    refetch,
  };
};
