import styled from 'styled-components';

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 0;
  min-height: 90vh;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 0;
  }
`;
