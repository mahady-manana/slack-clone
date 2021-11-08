import { gql, useSubscription } from "@apollo/client";
import {
  Subscription,
  SubscriptionVariables,
} from "./__generated__/Subscription";

export const useMessageSubscription = () => {
  const SUBS_MESSAGE = gql`
    subscription Subscription($topic: String!) {
      subscriptionChannel(topic: $topic) {
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
  const { loading, data, error } = useSubscription<
    Subscription,
    SubscriptionVariables
  >(SUBS_MESSAGE, {
    variables: {
      topic: "MESSAGES",
    },
  });
  console.log("sub", loading, data, error);

  return {
    loading,
    data,
    error,
  };
};
