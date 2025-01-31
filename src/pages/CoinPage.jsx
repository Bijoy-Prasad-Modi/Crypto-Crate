import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import { useCrypto } from "../context/CurrencyContext";
import CoinInfo from "../components/CoinInfo";
import { useTheme } from "@emotion/react";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = useCrypto();

  const theme = useTheme();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <div>sidebar{/*sidebar*/}</div>
      {/*chart*/}
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
