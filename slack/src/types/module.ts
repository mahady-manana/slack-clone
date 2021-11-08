export interface ModuleType {
  path: string;
  label?: string;
  id: string;
  component: JSX.Element;
  private?: boolean;
}
