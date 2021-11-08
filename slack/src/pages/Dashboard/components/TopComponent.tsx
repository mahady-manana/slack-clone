import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { AvatarSlack, TopSearch } from "../../../components";
import { useApplicationContext } from "../../../hooks/useApplicationContext";

export const TopComponent = () => {
  const { user } = useApplicationContext();
  return (
    <Box height="100%" display="flex" alignItems="center" width="100%">
      <Box display="flex" alignItems="center" width="100%" px={2}>
        <Box width={218} textAlign="right" mr={2}>
          <AccessTimeIcon style={{ color: "#fff9" }} />
        </Box>
        <Box flexGrow={1} display="flex" alignItems="center">
          <Box flexGrow={1} mr={3}>
            <TopSearch />
          </Box>
          <Box
            width={200}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <HelpOutlineIcon style={{ color: "#fff9" }} />
            <AvatarSlack photo={user?.photo} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const useStyles = makeStyles({
  input: {
    "& input": {
      padding: 11,
    },
  },
});
