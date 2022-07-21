import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/navbar/Navbar';
import HeroPage from './components/hero/HeroPage';
import Home from './pages/Home';
import JokeStats from './pages/JokeStats';
import Footer from './components/footer/Footer';

function App() {
  const [jokesData, setJokesData] = useState([]);
  const [query, setQuery] = useState('all');

  useEffect(() => {
    const getJokes = async () => {
      const { data } = await axios(
        `https://api.chucknorris.io/jokes/search?query=${query}`
      );
      setJokesData(data.result);
    };
    const TimeoutId = setTimeout(() => {
      getJokes();
    }, 200);
    return () => {
      clearTimeout(TimeoutId);
    };
  }, [query]);

  return (
    <BrowserRouter>
      <header>
        <Navbar />
        <HeroPage setQuery={setQuery} />
      </header>
      <Routes>
        <Route exact path="/" element={<Home jokesData={jokesData} />} />
        <Route exact path="/joke/:id" element={<JokeStats jokesData={jokesData} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
