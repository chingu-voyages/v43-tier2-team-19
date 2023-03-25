import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CoinDetail from "./pages/CoinDetail"
import Watchlist from "./pages/Watchlist"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
