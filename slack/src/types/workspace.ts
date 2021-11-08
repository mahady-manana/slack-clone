import { UserType } from "./user";

export interface WorkspaceType {
  id: string;
  name: string;
  users?: UserType[];
  channels: string;
}
