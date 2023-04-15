import { NavLink } from 'react-router-dom';
import { SiBitcoincash } from 'react-icons/si';
import styled from 'styled-components';

export const Header = styled.header`
  background: #f5f7fb;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Icon = styled(SiBitcoincash)`
  width: 40px;
  height: 40px;
  color: #fca13a;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #004a4b;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 480px) {
    gap: 10px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #01b0c8;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  padding: 10px 5px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #004a4b;
  }

  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Btn = styled.button`
  background-color: transparent;
  color: #01b0c8;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  padding: 10px 5px;
  border-color: transparent;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: #004a4b;
  }

  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;
