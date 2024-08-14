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
      primary: "#c29800",
      secondary: "#f4b46c",
    },
    background: {
      default: "#fdf69c",
      paper: "#e5c600bd",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#604500ae", 
          color: "#FFFFFF",
          fontWeight:'bolder' ,
          '&:hover': {
            backgroundColor: "#ba7103bc",
          },
        },
      },
    },
  },
});
