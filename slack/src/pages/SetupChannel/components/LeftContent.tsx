import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";

interface LeftContentProps {
  companyName: string;
  channel: string;
}
export const LeftContent: FC<LeftContentProps> = ({ companyName, channel }) => {
  const classes = useStyles();
  return (
    <Box>
      {companyName && (
        <Box className={classes.titleBg}>
          <Typography className={classes.title}>{companyName}</Typography>
        </Box>
      )}
      {channel && (
        <Box p={2}>
          <Box pt={3} mb={2}>
            <Typography className={classes.text}>Channels</Typography>
          </Box>
          <Box mb={2}>
            <Typography className={classes.text}># {channel}</Typography>
          </Box>
          <Box>
            <Typography className={classes.text}>Direct messages</Typography>
          </Box>
        </Box>
      )}
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
