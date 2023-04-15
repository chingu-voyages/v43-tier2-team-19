import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const Input = styled.input`
  padding: 10px 0px 10px 10px;
  border-radius: 6px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  outline: none;
  font-size: 14px;
  line-height: 16px;
  color: rgb(45, 55, 72);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus {
    border: 2px solid #fca13a;
  }

  &:not(:placeholder-shown) {
    border: 2px solid #01b0c8;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 16px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 80%;
    border-spacing: 0 10px;
  }
`;

export const Th = styled.th`
  font-size: 16px;
  line-height: 26px;
  text-align: start;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
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

  @media screen and (max-width: 768px) {
    gap: 10px;
    margin-left: 5px;
    max-width: 200px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  background: #ffffff;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const Name = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: #fca13a;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const Symbol = styled.span`
  font-size: 13px;
  opacity: 0.3;
  color: #0c0b0b;

  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

export const CoinDesc = styled.td`
  font-size: 13px;
  line-height: 15px;

  @media screen and (max-width: 768px) {
    font-size: 11px;
    line-height: 21px;
  }
`;
