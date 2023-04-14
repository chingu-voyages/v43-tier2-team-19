import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Navbar } from '../Navbar';
import Footer from '../Footer';
import { Main } from './App.styled';

const HomePage = lazy(() => import('../../pages/Home'));
const CoinDetailPage = lazy(() => import('../../pages/CoinDetail'));
const WatchListPage = lazy(() => import('../../pages/Watchlist'));

export function App() {
  return (
    <Suspense>
      <div className="app">
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coin/:id" element={<CoinDetailPage />} />
            <Route path="/watchlist" element={<WatchListPage />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Suspense>
  );
}
