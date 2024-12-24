import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Select } from "@mui/material";

const Header = () => {
    // const AppContainer = styled("div")(({ theme }) => ({
    //     backgroundColor: "#14161a",
    //     minHeight: "100vh",
    //     color: "white",
    //   }));

    

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crypto Hunter
          </Typography>
          <Select
            variant="outlined"
            style={{ width: 100, height: 40, marginLeft: 15 }}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>EURO</MenuItem>
            <MenuItem>INR</MenuItem>
          </Select>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
