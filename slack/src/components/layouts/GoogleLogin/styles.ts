import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  buttonSocial: {
    width: "100%",
    padding: "5px !important",
    color: "#4285f4 !important",
    fontWeight: "bold !imprtant" as any,
    borderColor: "#4285f4 !important",
    borderWidth: "2px  !important",
    display: "flex !important",
    justifyContent: "center",
    "& >div": {
      padding: "8px !important",
      display: "flex",
    },
  },
});
