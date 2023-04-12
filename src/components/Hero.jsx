import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { TrendingCoins } from '../utils/api';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());

    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // display comas and points in the correct way
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const items = trending.map((coin) => {
    // shows profit in %
    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <Link to={`/coin/${coin.id}`}>
        <img src={coin?.image} alt={coin.name} height="80" />
        <span>
          {coin?.symbol}{' '}
          <span>
            {profit && '+'} {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span>{numberWithCommas(coin?.current_price.toFixed(2))}$</span>
      </Link>
    );
  });

  // < 512px screen shows only 2 items;
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div>
      <div>
        <h1>Crypto Application</h1>
      </div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Hero;
