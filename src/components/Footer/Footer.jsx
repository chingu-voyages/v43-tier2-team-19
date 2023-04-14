import React from 'react';
import {
  FooterSection,
  Container,
  TrebinaLink,
  ZinkovLink,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        Developed with 💙💛 by:{' '}
        <TrebinaLink
          target="_blank"
          href="https://www.linkedin.com/in/olesia-trebina/"
        >
          Olesia Trebina
        </TrebinaLink>{' '}
        &{' '}
        <ZinkovLink
          target="_blank"
          href="https://www.linkedin.com/in/evgeniyzinkov/"
        >
          Evgeniy Zinkov
        </ZinkovLink>
      </Container>
    </FooterSection>
  );
};
