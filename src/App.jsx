import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/tailwind.css";
import "./css/App.css";
import Popular from "./pages/Popular";
import TvPage from "./pages/TopRatesPage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";

function App() {
  const [searchMovie, setSearchMovie] = useState("");

  return (
    <>
      <Navbar searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              searchMovie.length > 3 ? (
                <SearchPage movieTitle={searchMovie} />
              ) : (
                <Popular movieTitle={searchMovie} />
              )
            }
          />
          <Route
            path="/tv"
            element={
              searchMovie.length > 3 ? (
                <SearchPage movieTitle={searchMovie} />
              ) : (
                <TvPage movieTitle={searchMovie} />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
