import React from 'react';
import { CoinLink, Container, Desc, Img, Name } from './Watchlist.styled';

const Watchlist = () => {
  // retrieve watchlist data from local storage
  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  console.log(watchlist);

  return (
    <Container>
      {watchlist.map((coin) => (
        <CoinLink to={`/coin/${coin.id}`}>
          <Img src={coin.image.small} alt="img" />
          <Name>{coin.name}</Name>
          <Desc>{coin.market_data.current_price.usd}$</Desc>
        </CoinLink>
      ))}
    </Container>
  );
};

export default Watchlist;
