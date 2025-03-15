import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
                paddingLeft: 20,
              }}
            >
              Crypto Hunter
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", paddingRight: 4 }}
            >
              <Select
                variant="outlined"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                sx={{ width: 100, height: 40, marginRight: 15 }} // ✅ Using `sx` instead of `style`
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
