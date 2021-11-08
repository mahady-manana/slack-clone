import { AuthModules } from "../pages/Authentication/modules";
import { DashboardModule } from "../pages/Dashboard";
import { HomeModule } from "../pages/Home";
import { SetupChannelModule } from "../pages/SetupChannel";
import { ModuleType } from "../types/module";

export const modules: ModuleType[] = [
  ...AuthModules,
  HomeModule,
  SetupChannelModule,
  DashboardModule,
];
