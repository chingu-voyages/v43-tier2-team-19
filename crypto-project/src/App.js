import { Route, Routes } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';

import Home from './pages/Home';
import CoinDetail from './pages/CoinDetail';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <div className="app">
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/coin/:id" element={<CoinDetail />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
