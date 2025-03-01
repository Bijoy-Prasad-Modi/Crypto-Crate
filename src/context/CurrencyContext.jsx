import React, { createContext, useContext, useEffect, useState } from "react";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD"); //Default value
  const [symbol, setSymbol] = useState("$"); //Default value

  useEffect(() => {
    const currencySymbols = {
      USD: "$",
      EUR: "€",
      INR: "₹",
    };
    setSymbol(currencySymbols[currency] || ""); // Fallback to empty if not found
  }, [currency]); // Runs when currency changes

  return (
    <CryptoContext.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </CryptoContext.Provider>
  );
};

// Custom hook to consume context
export const useCrypto = () => {
  const context = useContext(CryptoContext);

  if (!context) {
    throw new Error("useCrypto must be used within a CryptoProvider");
  }
  return context;
};

export default CryptoProvider;
