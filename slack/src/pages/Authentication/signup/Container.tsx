import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateNewUser } from "../../../graphql";
import { useApplicationContext } from "../../../hooks/useApplicationContext";
import { UserType } from "../../../types/user";
import { Signup } from "./Signup";

export const SignupContainer = () => {
  const navigate = useNavigate();
  const { setUser } = useApplicationContext();
  const { createNewUserFn, dataCreateUser, loadingCNU, error } =
    useCreateNewUser();
  const handleLogWithGoogle = (google: any) => {
    const { email, name, imageUrl } = google?.profileObj;
    const dateNow = new Date();
    createNewUserFn({
      variables: {
        data: {
          email,
          name,
          photo: imageUrl,
          created: dateNow.toLocaleString(),
        },
      },
    });
  };

  const handleLogWithEmail = (email: string) => {
    const dateNow = new Date();
    createNewUserFn({
      variables: {
        data: {
          email,
          name: email.split("@")[0],
          created: dateNow.toLocaleString(),
        },
      },
    });
  };

  const navigateToNext = useCallback((): void => {
    if (dataCreateUser) {
      setUser(dataCreateUser.createUser as UserType);
      navigate("/setup-channels");
    }
  }, [dataCreateUser, navigate, setUser]);

  useEffect(() => navigateToNext(), [navigateToNext]);
  return (
    <Signup
      onContinueWithGoogle={handleLogWithGoogle}
      onContinueWithEmail={handleLogWithEmail}
      loading={loadingCNU}
      error={Boolean(error)}
    />
  );
};
