import { ModuleType } from "../../types/module";
import { SigninContainer } from "./signin";
import { SignupContainer } from "./signup";

export const AuthModules: ModuleType[] = [
  {
    id: "AUTH_SIGNUP",
    path: "/signup",
    component: <SignupContainer />,
  },
  {
    id: "AUTH_SIGNIN",
    path: "/signin",
    component: <SigninContainer />,
  },
];
