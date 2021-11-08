import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { useStyles } from "./styles";

interface DashboardContainerProps {
  leftComponent: ReactNode;
  mainComponent: ReactNode;
  topComponent: ReactNode;
}
export const DashboardContainer: FC<DashboardContainerProps> = ({
  leftComponent,
  mainComponent,
  topComponent,
}) => {
  const classes = useStyles();

  return (
    <Box height="100vh" style={{ overflow: "hidden" }}>
      <Box className={classes.topbar}>{topComponent}</Box>
      <Box display="flex" height="100%">
        <Box width={250} className={classes.leftbar}>
          {leftComponent}
        </Box>
        <Box flexGrow={1}>{mainComponent}</Box>
      </Box>
    </Box>
  );
};
