export interface ISetupValues {
  step: 1 | 2 | 3;
  companyName: string;
  channel: string;
  userEmails: { [key: string]: string };
}

export interface SetupChannelProps {
  setupValues: ISetupValues;
  onChangeValues: (name: string, value: string) => void;
  onClickNext: () => void;
  loading: boolean;
}
