import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CryptoContext from './context/CurrencyContext';
import 'react-alice-carousel/lib/alice-carousel.css';
import { UserContextProvider } from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CryptoContext>
          <App />
        </CryptoContext>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
