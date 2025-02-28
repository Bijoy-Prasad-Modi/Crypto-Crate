import React from "react";
import Carousel from "./Carousel";
import { Container, Typography, Box } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(./banner2.jpg)",
        backgroundSize: "cover", // ✅ Image covers entire box
        backgroundPosition: "center", // ✅ Centers image properly
        backgroundRepeat: "no-repeat", // ✅ Prevents repeating
        width: "100%", // ✅ Full width of parent/container
      }}
    >
      <Container
        sx={{
          height: 360,
          display: "flex",
          flexDirection: "column",
          paddingTop: -5,
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "40%",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 0,
              fontFamily: "Montserrat",
              paddingTop: 65,
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="body1"
            style={{
              
              fontWeight: "bold",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              paddingTop: 25,
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </Box>
        <Carousel />
      </Container>
    </Box>
  );
};

export default Banner;
