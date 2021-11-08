import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SlackLogo } from "../../icons/SlackLogo";

export const Home = () => {
  const navigate = useNavigate();
  const goToSlack = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/slack");
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      flexDirection="column"
    >
      <Box mt={2}>
        <SlackLogo />
      </Box>
      <Box mt={2}>
        <Button
          variant="contained"
          onClick={goToSlack}
          sx={{ padding: 2, paddingInline: 5 }}
        >
          Launch Slack
        </Button>
      </Box>
    </Box>
  );
};
