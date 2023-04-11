import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import parse from "html-react-parser"

import Chart from "../components/Chart"

const CoinDetail = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState()

  const fetchCoin = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    )
    setCoin(data)
  }

  useEffect(() => {
    fetchCoin()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {coin ? (
        <div>
          {/* sidebar */}
          <img src={coin.image.small} alt={coin.name} />
          <h2>{coin.name}</h2>
          <p>{parse(coin.description.en.split(". ")[0])}</p>
          <span>Price: {coin.market_data.current_price.usd}$</span>
        </div>
      ) : (
        "loading"
      )}

      {/* chart */}
      {coin && <Chart coin={coin} />}
    </div>
  )
}

export default CoinDetail
