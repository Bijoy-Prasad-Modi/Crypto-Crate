import React, { useEffect, useState } from "react";
import { useCrypto } from "../context/CurrencyContext";
import axios from "axios";
import { HistoricalChart } from "../config/api";
import { ThemeProvider } from "@emotion/react";
import { Box, CircularProgress, createTheme, useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale, // Fixes "category is not a registered scale"
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);
import { Line } from "react-chartjs-2";
import { chartDays } from "../config/data";
import SelectButton from "./Banner/SelectButton";

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const [flag, setFlag] = useState(false);

  const { currency } = useCrypto();

  const theme = useTheme();

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setFlag(true);
    setHistoricalData(data.prices || []);
  };

  console.log("Fetched Historical Data:", historicalData);

  useEffect(() => {
    fetchHistoricalData();
  }, [days]);

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
          width: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 4,
          padding: 4,
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
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicalData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                marginTop: 2,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton 
                  key={day.value}
                  onClick={() => {
                    setDays(day.value);
                    setFlag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </Box>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default CoinInfo;
