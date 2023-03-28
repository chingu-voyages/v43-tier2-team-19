import React, { useEffect, useState } from 'react'

const CoinList = () => {
  const [coins, setCoins] = useState([])
  const [query, setQuery] = useState('')
  const [filteredCoins, setFilteredCoins] = useState([])

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data)
        setFilteredCoins(data)
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
        <tbody>
          {filteredCoins.map((coin, index) => (
            <tr key={index}>
              <td style={{ display: 'flex', flexDirection: 'column' }}>
                <img
                  style={{ width: '40px', height: '40px' }}
                  src={coin.image}
                  alt="logo"
                />
                <span>{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>{coin.current_price} $</td>
              <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
              <td>{coin.market_cap.toLocaleString()} $</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CoinList
