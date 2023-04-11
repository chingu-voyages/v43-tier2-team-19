import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const CoinList = () => {
  const [coins, setCoins] = useState([])
  const [query, setQuery] = useState("")
  const [filteredCoins, setFilteredCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )

      .then((res) => {
        setCoins(res.data)
        setFilteredCoins(res.data)
        setIsLoading(false)
      })
  }, [])

  const onChange = (e) => {
    e.preventDefault()
    const newQuery = e.target.value
    setQuery(newQuery)
    const newFilteredCoins = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(newQuery.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(newQuery.toLowerCase())
    )
    setFilteredCoins(newFilteredCoins)
  }

  return (
    <div>
      {/* search */}
      <div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={onChange}
        />
      </div>
      {/* table of coins */}
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            <tr>
              <td>Loading...</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {filteredCoins.map((coin, index) => (
              <tr key={index}>
                <td style={{ display: "flex", flexDirection: "column" }}>
                  <Link to={`/coin/${coin.id}`}>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={coin.image}
                      alt="logo"
                    />
                    <span>{coin.symbol}</span>
                    <span>{coin.name}</span>
                  </Link>
                </td>
                <td>{coin.current_price} $</td>
                <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                <td>{coin.market_cap.toLocaleString()} $</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}

export default CoinList
