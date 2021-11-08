import React, { FC } from "react";
import { GoogleLogin } from "react-google-login";
import { useStyles } from "./styles";
interface GoogleLoginFCProps {
  onGoogleSuccess?: (googleData: any) => void;
  onGoogleFailure?: (error: any) => void;
}
export const GoogleLoginFC: FC<GoogleLoginFCProps> = ({
  onGoogleFailure,
  onGoogleSuccess,
}) => {
  const classes = useStyles();

  const onSuccess = (googleData: any) => {
    onGoogleSuccess && onGoogleSuccess(googleData);
  };
  const onFailure = (error: any) => {
    console.log(error);
    onGoogleFailure && onGoogleFailure(error);
  };
  return (
    <GoogleLogin
      clientId="32127140915-c4jo9opb0onl3c25heieothb27l24rn8.apps.googleusercontent.com"
      buttonText="Continue with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      // isSignedIn
      autoLoad={false}
      className={classes.buttonSocial}
      cookiePolicy={"single_host_origin"}
    />
  );
};
