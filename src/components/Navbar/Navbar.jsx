import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import { useUserContext } from '../../context/userContext';
import { Auth } from '../Auth';
import { SignOut } from './SignOut';
import {
  AuthWrapper,
  Btn,
  BtnWrapper,
  Container,
  Header,
  Icon,
  LinkWrapper,
  StyledLink,
} from './Navbar.styled';
import { Crypto, CryptoState } from '../../context/CurrencyContext';
import { customStyles } from '../../utils/selectorConfig';

const options = [
  { label: 'US Dollar', value: 'USD' },
  { label: 'Euro', value: 'EUR' },
  { label: 'Ukrainian Hrivna', value: 'UAH' },
];

export const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalAction, setAuthModalAction] = useState('login');
  const { user } = useUserContext();
  const { currency, setCurrency } = CryptoState();

  const toggleAuthModal = useCallback((action) => {
    setIsAuthModalOpen((prev) => !prev);
    setAuthModalAction(action);
  }, []);

  const handleCurrencyChange = useCallback(
    (selectedOption) => {
      console.log('selectedOption:', selectedOption);
      setCurrency(selectedOption.value);
    },
    [setCurrency]
  );

  return (
    <Header>
      <Container>
        <LinkWrapper>
          <NavLink to="/" end>
            <Icon />
          </NavLink>

          {user && (
            <nav>
              <StyledLink to="/watchlist">Watchlist</StyledLink>
            </nav>
          )}
        </LinkWrapper>

        <BtnWrapper>
          {!user ? (
            <AuthWrapper>
              <Btn type="button" onClick={() => toggleAuthModal('login')}>
                {' '}
                Login
              </Btn>

              <Btn type="button" onClick={() => toggleAuthModal('signup')}>
                {' '}
                Sign Up
              </Btn>

              {isAuthModalOpen && (
                <Auth
                  onClose={() => setIsAuthModalOpen(false)}
                  action={authModalAction}
                />
              )}
            </AuthWrapper>
          ) : (
            <SignOut />
          )}

          <Crypto.Provider value={{ currency, setCurrency }}>
            <Select
              options={options}
              isSearchable={false}
              menuPosition="fixed"
              styles={customStyles}
              getOptionLabel={(option) => option.value}
              value={options.find((option) => option.value === currency)}
              onChange={handleCurrencyChange}
            />
          </Crypto.Provider>
        </BtnWrapper>
      </Container>
    </Header>
  );
};
