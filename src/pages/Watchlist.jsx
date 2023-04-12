import React from "react"
import { Link } from "react-router-dom"

const Watchlist = () => {
  // retrieve watchlist data from local storage
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || []
  console.log(watchlist)

  return (
    <div>
      {watchlist.map((coin) => (
        <Link to={`/coin/${coin.id}`}>
          <img src={coin.image.small} alt="img" />
          <h3>{coin.name}</h3>
          <p>{coin.market_data.current_price.usd}$</p>
        </Link>
      ))}
    </div>
  )
}

export default Watchlist
