import { ModuleType } from "../../types/module";
import { DashboardContainer } from "./Container";

export const DashboardModule: ModuleType = {
  id: "APP_MAIN",
  path: "/slack",
  component: <DashboardContainer />,
};
