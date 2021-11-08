import { Box } from "@mui/material";
import { FC } from "react";
import { DashboardContainer } from "../../components";
import { LeftComponent } from "./components/LeftComponent";
import { MainComponent } from "./components/MainComponent";
import { TopComponent } from "./components/TopComponent";

interface DashboardProps {
  sendMessage: (message: string) => void;
}
export const Dashboard: FC<DashboardProps> = ({ sendMessage }) => {
  return (
    <Box>
      <DashboardContainer
        mainComponent={<MainComponent sendMessage={sendMessage} />}
        leftComponent={<LeftComponent />}
        topComponent={<TopComponent />}
      />
    </Box>
  );
};
