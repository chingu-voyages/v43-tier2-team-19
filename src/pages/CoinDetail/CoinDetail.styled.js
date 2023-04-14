import styled from 'styled-components';

export const Container = styled.div``;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Img = styled.img`
  width: 10rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Desc = styled.p`
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Btn = styled.button`
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
`;
