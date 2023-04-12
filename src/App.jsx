import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/Home'));
const CoinDetailPage = lazy(() => import('./pages/CoinDetail'));
const WatchListPage = lazy(() => import('./pages/Watchlist'));

function App() {
  return (
    <Suspense>
      <div className="app">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coin/:id" element={<CoinDetailPage />} />
            <Route path="/watchlist" element={<WatchListPage />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
