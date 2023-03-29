import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from './Auth';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const toggleLoginModal = () => setIsLoginModalOpen((prev) => !prev);
  const toggleSignUpModal = () => setIsSignUpModalOpen((prev) => !prev);

  return (
    <div>
      <header>
        <NavLink to="/" end>
          <div>Our Logo Should be here</div>
        </NavLink>

        <nav>
          <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </nav>

        <div>
          <button type="button" onClick={toggleLoginModal}>
            {' '}
            Login
            {isLoginModalOpen && <Auth onClose={toggleLoginModal} />}
          </button>
          <button type="button" onClick={toggleSignUpModal}>
            {' '}
            Sign Up
            {isSignUpModalOpen && <Auth onClose={toggleSignUpModal} />}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
