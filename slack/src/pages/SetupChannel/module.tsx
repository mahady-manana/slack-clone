import { ModuleType } from "../../types/module";
import { SignupChannelContainer } from "./Container";

export const SetupChannelModule: ModuleType = {
  id: "SETUP_CHANNEL",
  path: "/setup-channels",
  component: <SignupChannelContainer />,
};
