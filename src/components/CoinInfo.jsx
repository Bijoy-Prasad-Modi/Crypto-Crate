import React, { useEffect, useState } from "react";
import { useCrypto } from "../context/CurrencyContext";
import axios from "axios";
import { HistoricalChart } from "../config/api";
import { ThemeProvider } from "@emotion/react";
import { Box, CircularProgress, createTheme, useTheme } from "@mui/material";
import { Line } from "react-chartjs-2";

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const [flag, setFlag] = useState(false);

  const { currency } = useCrypto();

  const theme = useTheme();

  const fetchHistoricalData = async () => {
    //if(!coin) return; //✅ Prevents errors if `coin` is undefined
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setFlag(true);
    setHistoricalData(data.prices);
  };

  console.log("data", historicalData);

  useEffect(() => {
    fetchHistoricalData();
  }, [coin, days]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
          padding: 40,
          [theme.breakpoints.down("md")]: {
            width: "100%",
            marginTop: 0,
            padding: 20,
            paddingTop: 0,
          },
        }}
      >
        {!historicalData ? (
          <CircularProgress sx={{ color: "gold" }} size={250} thickness={1} />
        ) : (
          <>
            <Line
              data={{
                labels: historicalData.map((coin) => {}),
              }}
            />
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default CoinInfo;
