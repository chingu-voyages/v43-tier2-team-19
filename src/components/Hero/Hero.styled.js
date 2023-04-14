import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #333;
`;

export const Img = styled.img`
  height: 150px;
`;

export const CoinSymbol = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const PriceChange = styled.span`
  color: ${({ profit }) => (profit ? '#01b0c8' : '#c23501')};
`;

export const Price = styled.span`
  margin-left: 5px;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f1f1f1;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;
