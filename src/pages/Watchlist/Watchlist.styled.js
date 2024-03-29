import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CoinLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
`

export const Name = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #c23501;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }
`

export const Desc = styled.p`
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Button = styled.button`
  margin-bottom: 20px;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #01b0c8;
  color: #fff;
  cursor: pointer;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #3792cb;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.25rem 0.75rem;
  }
`
