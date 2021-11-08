import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  btnGoogle: {
    borderWidth: 2,
    "&:hover": {
      borderWidth: 2,
    },
    color: "#4285f4",
    borderColor: "#4285f4",
    textTransform: "none",
    fontWeight: 700,
  },
  input: {
    "& input": {
      padding: 11,
    },
  },
  btnNext: {
    fontWeight: 700,
    textTransform: "none",
  },
});
