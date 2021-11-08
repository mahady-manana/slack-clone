import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC, useEffect } from "react";
import moment from "moment";
import { useMessageByWorkspace } from "../../../graphql/useMessageByWorkspace";
import { useApplicationContext } from "../../../hooks/useApplicationContext";
import { MessageType } from "../../../types/message";
import { useMessageSubscription } from "../../../graphql/useMessageSubscription";
import { AvatarSlack } from "../../../components";

interface MessageListProps {}
export const MessageList: FC<MessageListProps> = () => {
  const classes = useStyles();
  const { workspace, currentSelectedUser } = useApplicationContext();
  const { data } = useMessageSubscription();
  const { messageByWorkspace, refetch } = useMessageByWorkspace(workspace?.id);
  const msgFilter = (message: MessageType) => {
    if (currentSelectedUser) {
      return message.receiver === currentSelectedUser.id;
    } else {
      return message.channel === workspace?.channels;
    }
  };
  console.log(data, messageByWorkspace);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const userCon = (uId: string) =>
    workspace?.users?.find((user) => user.id === uId);
  const timer = (time: string) => moment(time).calendar();
  return (
    <>
      {messageByWorkspace?.getMessageByWorkspace
        .filter(msgFilter)
        .map((message: MessageType) => {
          return (
            <Box key={message.timestamp} className={classes.box}>
              <Box display="flex" alignItems="center">
                <Box>
                  <AvatarSlack
                    photo={userCon(message.user)?.photo}
                    type="light"
                  />
                </Box>
                <Box ml={1} mb={1}>
                  <Typography sx={{ fontWeight: 700 }}>
                    {userCon(message.user)?.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: 12 }}>
                    {timer(message.timestamp)}
                  </Typography>
                </Box>
              </Box>
              <Box ml={4}>
                <Typography>{message.message}</Typography>
              </Box>
            </Box>
          );
        })}
    </>
  );
};

const useStyles = makeStyles({
  box: {
    padding: 10,
    "&:nth-child(odd)": {
      background: "#ccc5",
    },
  },
});
