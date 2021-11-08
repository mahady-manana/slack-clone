import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { AuthContainer } from "../../../components";
import { Loading } from "../../../components/atoms/Loading";
import { SignupProps } from "./types";

export const Signup: FC<SignupProps> = ({
  onContinueWithGoogle,
  onContinueWithEmail,
  loading,
  error,
}) => {
  return (
    <Box>
      {loading || error ? (
        <Box height="100vh">
          {loading && <Loading />}
          {error && <Typography>Sorry judge! An error occured.</Typography>}
        </Box>
      ) : (
        <AuthContainer
          type="signup"
          onContinueWithGoogle={onContinueWithGoogle}
          onContinueWithEmail={onContinueWithEmail}
        />
      )}
    </Box>
  );
};
