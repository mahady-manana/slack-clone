import { Box } from "@mui/material";
import { FC } from "react";
import { SetupContainer } from "../../components";
import { Loading } from "../../components/atoms/Loading";
import { LeftContent } from "./components/LeftContent";
import { Stepper } from "./components/Stepper";
import { SetupChannelProps } from "./interface";

export const SetupChannel: FC<SetupChannelProps> = ({
  setupValues,
  loading,
  onChangeValues,
  onClickNext,
}) => {
  return (
    <Box>
      {loading ? (
        <Box height="100vh">
          <Loading />
        </Box>
      ) : (
        <SetupContainer
          mainComponent={
            <Stepper
              step={setupValues.step}
              onChangeValue={onChangeValues}
              onClickNext={onClickNext}
            />
          }
          leftComponent={
            <LeftContent
              companyName={setupValues.companyName}
              channel={setupValues.channel}
            />
          }
        />
      )}
    </Box>
  );
};
