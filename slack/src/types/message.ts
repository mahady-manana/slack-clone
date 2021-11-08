export interface MessageType {
  id: string;
  message: string;
  user: string;
  channel: string | null;
  receiver: string | null;
  workspace: string;
  timestamp: any;
}
