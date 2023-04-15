import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const Loading = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`;
