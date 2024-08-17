import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            onClick={() => navigate("/pokemon")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }}
          >
            POKEMON
          </Typography>
          <Button onClick={() => navigate("/pokedex")} color="inherit">
            Pokedex
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
