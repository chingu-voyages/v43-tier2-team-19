import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 16px;
`;

export const Th = styled.th`
  font-size: 16px;
  line-height: 26px;
  text-align: start;
`;

export const Tr = styled.tr`
  background: #f5f5f7;
  height: 80px;
`;

export const CoinTd = styled.td`
  border-radius: 14px 0 0 14px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: 8px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  background: #ffffff;
  border-radius: 12px;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
`;

export const Name = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: #fca13a;
`;

export const Symbol = styled.span`
  font-size: 13px;
  opacity: 0.3;
  color: #0c0b0b;
`;

export const CoinDesc = styled.td`
  font-size: 13px;
  line-height: 15px;
`;
