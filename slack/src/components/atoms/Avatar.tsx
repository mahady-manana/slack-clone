import * as React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Icons } from "../../icons/icons";

interface AvatarSlackProps {
  type?: "light" | "primary";
  isOnline?: boolean;
  photo?: string;
}
export const AvatarSlack: React.FC<AvatarSlackProps> = ({
  type,
  isOnline,
  photo,
}) => {
  const IconOffline = (
    <Icons.Offline
      style={{ background: type === "light" ? "#fff" : "#3f0e40" }}
      stroke={type === "light" ? "#999" : undefined}
    />
  );
  const IconOnline = (
    <Icons.Online
      style={{ background: type === "light" ? "#fff" : "#3f0e40" }}
    />
  );
  return (
    <Stack direction="row" spacing={2}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={isOnline ? IconOnline : IconOffline}
      >
        <Avatar
          alt="Travis Howard"
          src={photo}
          variant="square"
          sx={{ borderRadius: 1, width: 28, height: 28 }}
        />
      </Badge>
    </Stack>
  );
};
