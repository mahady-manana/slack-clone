import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlackLogo } from "../../../icons/SlackLogo";
import { GoogleLoginFC } from "../../layouts";
import { useStyles } from "./styles";

interface AuthConainterProps {
  type: "signin" | "signup";
  onContinueWithGoogle: (googleData: any) => void;
  onContinueWithEmail: (email: string) => void;
}
export const AuthContainer: FC<AuthConainterProps> = ({
  type,
  onContinueWithGoogle,
  onContinueWithEmail,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const title =
    type === "signin" ? "Sign in to Slack" : "First, enter your email";
  const hasAccount =
    type === "signin" ? "New to Slack?" : "Already using Slack?";
  const hasAccountBtnText =
    type === "signin"
      ? "Create an account"
      : "Sign in to an existing workspace";

  const goToSignupOrSignin = (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    if (type === "signin") {
      navigate("/signup");
    }
    if (type === "signup") {
      navigate("/signin");
    }
  };
  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };
  const continueWithEmail = (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    onContinueWithEmail(email);
  };
  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Box>
        <Box textAlign="center" mb={4}>
          <SlackLogo />
        </Box>
        <Box textAlign="center" mb={4}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="subtitle1">
            We suggest using the email address you use at work.
          </Typography>
        </Box>
        <Box mb={3}>
          <GoogleLoginFC onGoogleSuccess={onContinueWithGoogle} />
        </Box>
        <Box display="flex" alignItems="center" mb={3}>
          <Divider style={{ flexGrow: 1 }} />
          <Typography style={{ paddingInline: 20 }}>OR</Typography>
          <Divider style={{ flexGrow: 1 }} />
        </Box>
        <Box mb={3}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="name@work-email.com"
            className={classes.input}
            onChange={handleChangeEmail}
          />
        </Box>
        <Box mb={2}>
          <Button
            variant="contained"
            fullWidth
            className={classes.btnNext}
            onClick={continueWithEmail}
          >
            Continue
          </Button>
        </Box>
        <Box textAlign="center">
          <Typography>{hasAccount}</Typography>
          <Button
            style={{ textTransform: "none" }}
            onClick={goToSignupOrSignin}
          >
            {hasAccountBtnText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
