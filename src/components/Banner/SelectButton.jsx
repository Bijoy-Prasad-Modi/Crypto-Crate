import { Box } from "@mui/material";
import React from "react";

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <Box
      component="span"
      sx={{
        border: "1px solid gold",
        borderRadius: 5,
        padding: "10px 20px",
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "gold" : "transparent",
        color: selected ? "black" : "inherit",
        fontWeight: selected ? 700 : 500,
        width: "22%",
        "&:hover": {
          backgroundColor: "gold",
          color: "black",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default SelectButton;
