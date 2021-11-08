import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useMessageByWorkspace } from "../../graphql/useMessageByWorkspace";
import { usePostMessage } from "../../graphql/usePostMessage";
import { useApplicationContext } from "../../hooks/useApplicationContext";
import { Dashboard } from "./Dashboard";

export const DashboardContainer = () => {
  const navigate = useNavigate();
  const { user, workspace, Authentication, currentSelectedUser } =
    useApplicationContext();
  const { refetch } = useMessageByWorkspace();
  const { postMessageFn, messages, loadingMessage } = usePostMessage();
  console.log(user, workspace);
  useEffect(() => {
    if (!Authentication.isAuth()) {
      navigate("/signin");
    }
  }, [Authentication, navigate]);

  const handleSendMessage = (value: string) => {
    postMessageFn({
      variables: {
        data: {
          user: user?.id as string,
          channel: !currentSelectedUser ? workspace?.channels : undefined,
          message: value,
          workspace: workspace?.id as string,
          receiver: currentSelectedUser?.id,
        },
      },
    });
    refetch();
  };

  return <Dashboard sendMessage={handleSendMessage} />;
};
