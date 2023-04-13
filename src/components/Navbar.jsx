import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import { useUserContext } from '../context/userContext';
import Auth from './Auth';
import { SignOut } from './SignOut';
import { Crypto, CryptoState } from '../context/CurrencyContext';

const options = [
  { label: 'US Dollar', value: 'USD' },
  { label: 'Euro', value: 'EUR' },
  { label: 'Ukrainian Hrivna', value: 'UAH' },
];

const Navbar = () => {
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
    <header>
      <NavLink to="/" end>
        <div>Our Logo Should be here</div>
      </NavLink>

      {user && (
        <nav>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </nav>
      )}

      {!user ? (
        <div>
          <button type="button" onClick={() => toggleAuthModal('login')}>
            {' '}
            Login
          </button>

          <button type="button" onClick={() => toggleAuthModal('signup')}>
            {' '}
            Sign Up
          </button>

          {isAuthModalOpen && (
            <Auth
              onClose={() => setIsAuthModalOpen(false)}
              action={authModalAction}
            />
          )}
        </div>
      ) : (
        <SignOut />
      )}

      <Crypto.Provider value={{ currency, setCurrency }}>
        <Select
          options={options}
          isSearchable={false}
          menuPosition="fixed"
          getOptionLabel={(option) => option.label}
          value={options.find((option) => option.value === currency)}
          onChange={handleCurrencyChange}
        />
      </Crypto.Provider>
    </header>
  );
};

export default Navbar;
