import styled from 'styled-components';

export const FooterSection = styled.footer`
  background: #f5f7fb;
`;

export const Container = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;

  @media only screen and (min-width: 768px) {
    width: 90%;
  }

  @media only screen and (min-width: 992px) {
    width: 800px;
  }
`;

export const TrebinaLink = styled.a`
  color: #fca13a;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #01b0c8;
  }
`;

export const ZinkovLink = styled.a`
  color: #01b0c8;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #fca13a;
  }
`;
