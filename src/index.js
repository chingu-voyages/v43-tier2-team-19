import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import { UserContextProvider } from './context/userContext';
import CurrencyContext from './context/CurrencyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CurrencyContext selectedCurrency="EUR">
          <App />
        </CurrencyContext>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
