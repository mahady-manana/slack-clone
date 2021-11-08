import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { AuthContainer } from "../../../components";
import { Loading } from "../../../components/atoms/Loading";
import { SigninProps } from "./types";

export const Signin: FC<SigninProps> = ({
  onContinueWithGoogle,
  onContinueWithEmail,
  loading,
  error,
}) => {
  return (
    <Box>
      {loading ? (
        <Box
          display="flex"
          alignContent="center"
          alignItems="center"
          height="100vh"
        >
          <Loading />
        </Box>
      ) : error ? (
        <Box
          display="flex"
          alignContent="center"
          alignItems="center"
          height="100vh"
        >
          <Typography variant="h1">
            I Think that you don't want an error but this is an error! Sorry!
          </Typography>
        </Box>
      ) : (
        <AuthContainer
          type="signin"
          onContinueWithGoogle={onContinueWithGoogle}
          onContinueWithEmail={onContinueWithEmail}
        />
      )}
    </Box>
  );
};
