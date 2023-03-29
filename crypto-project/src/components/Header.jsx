import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
      </header>
    </div>
  );
};

export default Header;
