import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGetUser } from "../../../graphql/useGetUser";
import { useApplicationContext } from "../../../hooks/useApplicationContext";
import { Signin } from "./Signin";

export const SigninContainer = () => {
  const [email, setEmail] = useState<string>();
  const { Authentication } = useApplicationContext();
  const navigate = useNavigate();
  const { userData, loadingUser, error } = useGetUser(email);
  const handleLoginWithGoogle = (google: any) => {
    const { email } = google?.profileObj;
    setEmail(email);
  };
  const handleLogWithEmail = (email: string) => {
    setEmail(email);
  };
  useEffect(() => {
    if (userData) {
      Authentication.authenticate(userData.getUser, (t) => {
        navigate("/slack");
      });
    }
  }, [Authentication, navigate, userData]);
  return (
    <Signin
      error={Boolean(error)}
      loading={loadingUser}
      onContinueWithGoogle={handleLoginWithGoogle}
      onContinueWithEmail={handleLogWithEmail}
    />
  );
};
