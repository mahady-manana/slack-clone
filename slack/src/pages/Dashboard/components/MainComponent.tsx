import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { AvatarSlack } from "../../../components";
import { useApplicationContext } from "../../../hooks/useApplicationContext";
import { MessageField } from "./MessageField";
import { MessageList } from "./MessageList";

interface MainComponentProps {
  sendMessage: (message: string) => void;
}
export const MainComponent: FC<MainComponentProps> = ({ sendMessage }) => {
  const { currentSelectedUser, workspace } = useApplicationContext();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="95vh"
    >
      <Box>
        {currentSelectedUser ? (
          <Box display="flex" px={2} py={1} alignItems="center">
            <AvatarSlack type="light" photo={currentSelectedUser.photo} />
            <Typography sx={{ marginLeft: 1 }}>
              {currentSelectedUser.name}
            </Typography>
          </Box>
        ) : (
          <Box display="flex" px={2} py={1} alignItems="center">
            <Typography># {workspace?.channels}</Typography>
          </Box>
        )}
        <Box
          sx={{ borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc" }}
          px={2}
          py={1}
        >
          # Bookmark
        </Box>
      </Box>
      <Box p={2} height="75%" sx={{ overflowY: "scroll" }}>
        <MessageList />
      </Box>
      <Box p={2}>
        <MessageField sendMessage={sendMessage} />
      </Box>
    </Box>
  );
};
