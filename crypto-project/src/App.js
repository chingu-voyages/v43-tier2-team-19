import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Home from "./pages/Home"
import CoinDetail from "./pages/CoinDetail"
import Watchlist from "./pages/Watchlist"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
