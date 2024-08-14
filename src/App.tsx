import { CssBaseline, ThemeProvider } from "@mui/material/";
import { AppRoutes } from "./routes/AppRoutes";
import { theme } from "./config/layout/theme/DefaultTheme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}
