import React, { useState } from "react"
import {
  CoinLink,
  Container,
  Desc,
  Img,
  Name,
  Button,
} from "./Watchlist.styled"

const Watchlist = () => {
  // retrieve watchlist data from local storage
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  )

  const removeFromWatchlist = (id) => {
    const updatedWatchlist = watchlist.filter((coin) => coin.id !== id)
    setWatchlist(updatedWatchlist)
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist))
  }

  return (
    <Container>
      {watchlist.map((coin) => (
        <>
          <CoinLink key={coin.id} to={`/coin/${coin.id}`}>
            <Img src={coin.image.small} alt="img" />
            <Name>{coin.name}</Name>
            <Desc>{coin.market_data.current_price.usd}$</Desc>
          </CoinLink>
          <Button onClick={() => removeFromWatchlist(coin.id)}>Remove</Button>
        </>
      ))}
    </Container>
  )
}

export default Watchlist
