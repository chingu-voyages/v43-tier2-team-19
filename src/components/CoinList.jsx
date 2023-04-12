import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import ReactPaginate from "react-paginate"

import { CoinsList } from "../utils/api"

const CoinList = () => {
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const coinsPerPage = 20

  useEffect(() => {
    setIsLoading(true)
    axios.get(CoinsList()).then((res) => {
      setCoins(res.data)
      setFilteredCoins(res.data)
      setIsLoading(false)
      setPageCount(Math.ceil(res.data.length / coinsPerPage))
    })
  }, [])

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected)
  }

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
    setPageCount(Math.ceil(newFilteredCoins.length / coinsPerPage))
    setCurrentPage(0)
  }

  const offset = currentPage * coinsPerPage

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
            {filteredCoins
              .slice(offset, offset + coinsPerPage)
              .map((coin, index) => (
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
      {/* pagination */}
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"previous-page"}
          nextLinkClassName={"next-page"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"pagination-active"}
        />
      )}
    </div>
  )
}

export default CoinList
