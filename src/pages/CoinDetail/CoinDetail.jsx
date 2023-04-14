import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import parse from 'html-react-parser';

import { SingleCoin } from '../../utils/api';
import { Chart } from '../../components/Chart';
import {
  Btn,
  Container,
  Desc,
  Img,
  Price,
  Sidebar,
  Title,
} from './CoinDetail.styled';

const CoinDetail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [watchlist, setWatchlist] = useState([]);

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
    fetchCoin();
    // eslint-disable-next-line
  }, []);

  const handleAddToWatchlist = (selectedCoin) => {
    // check if watchlist exists in local storage
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    const existingCoinIndex = watchlist.findIndex(
      (coin) => coin.id === selectedCoin.id
    );

    if (existingCoinIndex !== -1) {
      alert('This coin is already in your watchlist.');
      return;
    }

    watchlist.push(selectedCoin);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert(`${selectedCoin.name} has been added to your watchlist.`);
  };

  return (
    <Container>
      {coin ? (
        <Sidebar>
          {/* sidebar */}
          <Img src={coin.image.small} alt={coin.name} />
          <Title>{coin.name}</Title>
          <Desc>{parse(coin.description.en.split('. ')[0])}</Desc>
          <Price>Price: {coin.market_data.current_price.usd}$</Price>
          <Btn onClick={() => handleAddToWatchlist(coin)}>Add to Watchlist</Btn>
        </Sidebar>
      ) : (
        'loading'
      )}

      {/* chart */}
      {coin && <Chart coin={coin} />}
    </Container>
  );
};

export default CoinDetail;
