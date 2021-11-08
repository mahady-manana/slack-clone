import { Box, Typography } from "@mui/material";
import { AvatarSlack } from "../../../components";
import { Loading } from "../../../components/atoms/Loading";
import { useApplicationContext } from "../../../hooks/useApplicationContext";
import { useWorkspaceBuilder } from "../../../hooks/useWorkspaceBuilder";
import { UserType } from "../../../types/user";

export const LeftUserList = () => {
  const { workspaceUser, loadingUseByWorkspace } = useWorkspaceBuilder();
  const { setCurrentSelectedUser } = useApplicationContext();

  const onClickUser = (
    event: React.SyntheticEvent<HTMLDivElement>,
    user: UserType
  ) => {
    event.preventDefault();
    setCurrentSelectedUser(user);
  };

  return (
    <Box>
      {loadingUseByWorkspace && <Loading />}
      {!loadingUseByWorkspace &&
        workspaceUser &&
        workspaceUser.map((user, index) => {
          return (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              mb={1}
              sx={{ cursor: "pointer" }}
              onClick={(event) => onClickUser(event, user)}
            >
              <AvatarSlack photo={user.photo} />
              <Typography sx={{ marginLeft: 1, color: "#fff9" }}>
                {user.name}
              </Typography>
            </Box>
          );
        })}
    </Box>
  );
};
