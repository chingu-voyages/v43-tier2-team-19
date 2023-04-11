import React, { useContext, useState, useEffect } from "react"
import { createContext } from "react"

const Crypto = createContext()

const CurrencyContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD")
  const [symbol, setSymbol] = useState("$")

  useEffect(() => {
    if (currency === "USD") {
      setSymbol("$")
    } else if (currency === "EUR") {
      setSymbol("€")
    } else if (currency === "UAH") {
      setSymbol("₴")
    }
  }, [currency])

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  )
}

export default CurrencyContext

export const CryptoState = () => {
  return useContext(Crypto)
}
