import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import Auth from './Auth';

const options = [
  { label: 'US Dollar', value: 'USD' },
  { label: 'Indonesian Rupiah', value: 'IDR' },
  { label: 'New Taiwan Dollar', value: 'TWD' },
  { label: 'Euro', value: 'EUR' },
  { label: 'South Korean Won', value: 'KRW' },
  { label: 'Japanese Yen', value: 'JPY' },
  { label: 'Ukrainian Hrivna', value: 'UAH' },
  { label: 'Chinese Yuan', value: 'CNY' },
];

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalAction, setAuthModalAction] = useState('login');

  const toggleAuthModal = useCallback((action) => {
    setIsAuthModalOpen((prev) => !prev);
    setAuthModalAction(action);
  }, []);

  return (
    <header>
      <NavLink to="/" end>
        <div>Our Logo Should be here</div>
      </NavLink>

      <nav>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </nav>

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
      <Select
        options={options}
        isSearchable={false}
        menuPosition="fixed"
        getOptionLabel={(option) => option.label}
      />
    </header>
  );
};

export default Navbar;
