import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { TrendingCoins } from '../../utils/api';
import axios from 'axios';
import {
  HeroSection,
  Img,
  Title,
  CoinSymbol,
  LinkWrapper,
  PriceChange,
  Price,
} from './Hero.styled';
import { useContext } from 'react';
import { Crypto } from '../../context/CurrencyContext';

export const Hero = () => {
  const [trending, setTrending] = useState([]);
  const { symbol } = useContext(Crypto);

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
      <LinkWrapper to={`/coin/${coin.id}`}>
        <Img src={coin?.image} alt={coin.name} />
        <div>
          <CoinSymbol>{coin?.symbol}</CoinSymbol>
          <PriceChange profit={profit}>
            {profit && '+'} {coin?.price_change_percentage_24h?.toFixed(2)}%
          </PriceChange>
          <Price>
            {numberWithCommas(coin?.current_price.toFixed(2))}
            {symbol}
          </Price>
        </div>
      </LinkWrapper>
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
    <HeroSection>
      <div>
        <Title>Crypto Pulse</Title>
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
    </HeroSection>
  );
};
