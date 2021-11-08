import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      light: "#3f0e40",
      main: "#3f0e40",
      dark: "#3f0e40",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffd95b",
      main: "#4c00d2",
      dark: "#c77800",
      contrastText: "#000",
    },
  },
  typography: {
    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      fontSize: 36,
      marginBlock: 10,
      fontWeight: 700,
    },
    h3: {
      fontSize: 22,
      marginBlock: 10,
    },
    h4: {
      fontSize: 18,
      marginBlock: 10,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: 18,
    },
  },
});

export default theme;
