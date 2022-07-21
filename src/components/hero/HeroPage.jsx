import React, { useState } from 'react';
import './HeroPage.css';
import { BiSearch } from 'react-icons/bi';

const HeroPage = ({ setQuery }) => {
  const [searchInput, setSearchInput] = useState('');
  
  const handleOnSearch = (e) => {
    e.preventDefault();
    !searchInput ? setQuery('all') : setQuery(searchInput);
  };

  return (
    <div className="hero">
      <div className="hero-title">
        <h1>The Jokes Bible</h1>
        <p>Daily Laughs for you and yours</p>
      </div>
      <form className="search-bar" onSubmit={handleOnSearch}>
        <input
          className="search-input"
          type="search"
          autoComplete="true"
          placeholder="how can we make you laugh today"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <span className="search-icon" onClick={handleOnSearch}>
          <BiSearch />
        </span>
      </form>
    </div>
  );
};

export default HeroPage;
