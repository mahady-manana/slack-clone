import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { useStyles } from "./styles";

interface SetupContainerProps {
  leftComponent: ReactNode;
  mainComponent: ReactNode;
}
export const SetupContainer: FC<SetupContainerProps> = ({
  leftComponent,
  mainComponent,
}) => {
  const classes = useStyles();

  return (
    <Box height="100vh" style={{ overflow: "hidden" }}>
      <Box className={classes.topbar} />
      <Box display="flex" height="100%">
        <Box width={300} className={classes.leftbar}>
          {leftComponent}
        </Box>
        <Box flexGrow={1}>{mainComponent}</Box>
      </Box>
    </Box>
  );
};
