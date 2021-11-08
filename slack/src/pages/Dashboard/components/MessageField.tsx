import { Box, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import React, { FC, useState } from "react";

interface MessageFieldProps {
  sendMessage: (mes: string) => void;
}
export const MessageField: FC<MessageFieldProps> = ({ sendMessage }) => {
  const classes = useStyles();
  const [message, setMessage] = useState<string>();
  const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  const handleSendMessage = (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (message) {
      setMessage(undefined);
      sendMessage(message);
    }
  };
  return (
    <Box className={classes.box}>
      <Box sx={{ borderBottom: "1px solid #ccc" }}>
        <TextField
          multiline
          fullWidth
          className={classes.field}
          value={message || ""}
          onChange={handleChangeMessage}
        />
      </Box>
      <Box textAlign="right">
        <IconButton onClick={handleSendMessage}>
          <SendIcon color="primary" />
        </IconButton>
      </Box>
    </Box>
  );
};

export const useStyles = makeStyles({
  box: {
    border: `1px solid #000`,
    borderRadius: 10,
  },
  field: {
    "& fieldset": {
      border: "none",
    },
  },
});
