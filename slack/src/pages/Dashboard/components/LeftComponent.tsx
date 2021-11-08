import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import { useApplicationContext } from "../../../hooks/useApplicationContext";
import { LeftUserList } from "./LeftUserList";

export const LeftComponent: FC = () => {
  const { workspace, setCurrentSelectedUser } = useApplicationContext();
  const classes = useStyles();
  console.log(workspace);

  return (
    <Box>
      <Box className={classes.titleBg}>
        <Typography className={classes.title}>{workspace?.name}</Typography>
      </Box>
      <Box p={2}>
        <Box pt={3} mb={2}>
          <Typography className={classes.text}>Channels</Typography>
        </Box>
        <Box
          mb={2}
          sx={{ cursor: "pointer" }}
          onClick={(_event) => setCurrentSelectedUser(undefined)}
        >
          <Typography className={classes.text}>
            # {workspace?.channels}
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.text}>Direct messages</Typography>
        </Box>
        <Box mt={2}>
          <LeftUserList />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  title: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: 700,
  },
  titleBg: {
    background: "#3f0e40",
    borderBottom: "1px solid rgb(82,38,83)",
    borderTop: "1px solid rgb(82,38,83)",
    padding: 10,
  },
  text: {
    color: "#fff9",
  },
});
