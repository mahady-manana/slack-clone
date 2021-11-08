import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateNewUser } from "../../graphql";
import { useCreateWorkspace } from "../../graphql/useCreateWorkspace";
import { useUpdateUserWorkspace } from "../../graphql/useUpdateUserWorkspace";
import { useApplicationContext } from "../../hooks/useApplicationContext";
import { UserType } from "../../types/user";
import { ISetupValues } from "./interface";
import { SetupChannel } from "./SetupChannel";

export const SignupChannelContainer = () => {
  const navigate = useNavigate();
  const { user, setUser, setWorkspace, Authentication } =
    useApplicationContext();
  const { createNewUserFn, loadingCNU } = useCreateNewUser();
  const { updateUserWorkspaceFn, loadingUUW, dataUpdateUserWrks } =
    useUpdateUserWorkspace();
  const { createWorkspaceFn, loadingCW, dataCreateWorkspace } =
    useCreateWorkspace();
  const dateNow = new Date();
  const [setupValues, setSetupValues] = useState<ISetupValues>({
    step: 1,
    companyName: "",
    channel: "",
    userEmails: {},
  });

  const handleValueChange = (name: string, value: string) => {
    if (setupValues.step === 3) {
      setSetupValues((prev) => ({
        ...prev,
        userEmails: { ...prev.userEmails, [name]: value },
      }));
    } else {
      setSetupValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleClickNextStep = () => {
    if (setupValues.step !== 3) {
      setSetupValues((prev) => ({
        ...prev,
        step: (prev.step + 1) as 1 | 2 | 3,
      }));
    } else {
      const usersEmail = Object.values({
        ...setupValues.userEmails,
        owner: user?.email,
      }).join(",");
      createWorkspaceFn({
        variables: {
          data: {
            name: setupValues.companyName,
            channels: setupValues.channel,
            users: usersEmail,
          },
        },
      });
    }
  };
  const goToSlackApp = useCallback(() => {
    if (dataCreateWorkspace) {
      setWorkspace({
        ...dataCreateWorkspace.createWorkspace,
        users: undefined,
      });
      updateUserWorkspaceFn({
        variables: {
          data: {
            id: user?.id as string,
            workspace: dataCreateWorkspace.createWorkspace.id,
          },
        },
      });
      Object.values(setupValues.userEmails).forEach((email) => {
        createNewUserFn({
          variables: {
            data: {
              email,
              name: email.split("@")[0],
              workspace: dataCreateWorkspace.createWorkspace.id,
              created: dateNow.toLocaleString(),
            },
          },
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataCreateWorkspace, setWorkspace]);
  useEffect(() => {
    if (dataCreateWorkspace) {
      goToSlackApp();
    }
  }, [dataCreateWorkspace, goToSlackApp]);
  useEffect(() => {
    if (dataUpdateUserWrks) {
      setUser(dataUpdateUserWrks.updateUserWorkspace as UserType);
      Authentication.authenticate(
        dataUpdateUserWrks.updateUserWorkspace,
        (_t) => {
          navigate("/slack");
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUpdateUserWrks]);

  return (
    <SetupChannel
      loading={loadingCW || loadingUUW || loadingCNU}
      setupValues={setupValues}
      onChangeValues={handleValueChange}
      onClickNext={handleClickNextStep}
    />
  );
};
