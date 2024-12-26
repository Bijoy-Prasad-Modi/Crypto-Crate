import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { useCrypto } from "../context/CurrencyContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  const { currency, symbol, setCurrency } = useCrypto();

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="transparent" position="static">
          <Toolbar>
            <Typography
              onClick={handleNavigation}
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "gold",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Crypto Hunter
            </Typography>
            <Select
              variant="outlined"
              value={currency}
              onChange={(e) => {
                if (e.target.value !== currency) {
                  setCurrency(e.target.value);
                }
              }}
              style={{ width: 100, height: 40, marginRight: 15 }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EURO"}>EURO</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
