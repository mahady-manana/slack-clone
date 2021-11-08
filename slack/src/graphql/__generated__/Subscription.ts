/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: Subscription
// ====================================================

export interface Subscription_subscriptionChannel {
  __typename: "Message";
  id: string;
  message: string;
  user: string;
  channel: string | null;
  receiver: string | null;
  workspace: string;
  timestamp: any;
}

export interface Subscription {
  subscriptionChannel: Subscription_subscriptionChannel;
}

export interface SubscriptionVariables {
  topic: string;
}
