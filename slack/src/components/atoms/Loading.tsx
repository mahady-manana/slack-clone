import { Box, CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
    >
      <CircularProgress size={30} />
    </Box>
  );
};
