import React from "react";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { makeStyles, styled } from "@mui/material";
const App = () => {
  const AppContainer = styled("div")(({ theme }) => ({
    backgroundColor: "#14161a",
    minHeight: "100vh",
    color: "white",
  }));

  return (
    <AppContainer>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
