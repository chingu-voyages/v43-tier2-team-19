import React, { useEffect, useState } from "react"
import axios from "axios"
import ReactPaginate from "react-paginate"

import { CoinsList } from "../../utils/api"
import {
  Img,
  ImgWrapper,
  Table,
  CoinTd,
  Th,
  Tr,
  CoinDesc,
  Name,
  PricesSection,
  StyledLink,
  Symbol,
  Input,
} from "./CoinList.styled"

export const CoinList = () => {
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const coinsPerPage = 10

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
    <PricesSection>
      {/* search */}
      <div>
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={onChange}
        />
      </div>
      {/* table of coins */}
      <Table>
        <thead>
          <tr>
            <Th>Coin</Th>
            <Th>Price</Th>
            <Th>24h Change</Th>
            <Th>Market Cap</Th>
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
                <Tr key={index}>
                  <CoinTd>
                    <StyledLink to={`/coin/${coin.id}`}>
                      <ImgWrapper>
                        <Img src={coin.image} alt={coin.name} />
                      </ImgWrapper>
                      <Name>{coin.name}</Name>
                      <Symbol>{coin.symbol}</Symbol>
                    </StyledLink>
                  </CoinTd>
                  <CoinDesc>{coin.current_price} $</CoinDesc>
                  <CoinDesc>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </CoinDesc>
                  <CoinDesc style={{ borderRadius: "0 14px 14px 0" }}>
                    {coin.market_cap.toLocaleString()} $
                  </CoinDesc>
                </Tr>
              ))}
          </tbody>
        )}
      </Table>
      {/* pagination */}
      {pageCount > 1 && (
        <ReactPaginate
          nextLabel={""}
          previousLabel={""}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          pageClassName={"pagination"}
          breakLabel=""
          activeClassName={"activePage"}
          pageLinkClassName={"page"}
        />
      )}
    </PricesSection>
  )
}
