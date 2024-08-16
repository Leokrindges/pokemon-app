import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#d89504aa",
    },
    secondary: {
      main: "#808080",
    },
    text: {
      primary: "#f93200",
      secondary: "#ff0606",
    },
    background: {
      default: "#f4ea6a",
      paper: "#e5c600bd",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#604500ae",
          color: "#FFFFFF",
          fontWeight: "bolder",
          "&:hover": {
            backgroundColor: "#ba7103bc",
          },
        },
      },
    },
  },
});
