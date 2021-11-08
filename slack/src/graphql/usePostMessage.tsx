import { gql, useMutation } from "@apollo/client";
import { Mutation, MutationVariables } from "./__generated__/Mutation";

export const usePostMessage = () => {
  const POST_MESSAGE = gql`
    mutation Mutation($data: CreateMessageInput!) {
      postMessage(data: $data) {
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
  const [postMessageFn, { data, loading, error }] = useMutation<
    Mutation,
    MutationVariables
  >(POST_MESSAGE);
  return {
    postMessageFn,
    messages: data,
    loadingMessage: loading,
    error,
  };
};
