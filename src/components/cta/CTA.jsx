import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './CTA.css';
import { ClipLoader } from 'react-spinners';

const CTA = ({ jokesData, setJokes, setSelectedCategory }) => {
  const [jokesCategories, setJokesCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios(`https://api.chucknorris.io/jokes/categories`);
      setJokesCategories(['All', ...data]);
    };
    const TimeoutId = setTimeout(() => {
      getCategories();
    }, 200);

    return () => {
      clearTimeout(TimeoutId);
    };
  }, []);

  const handleOnSelect = (jokeCategory) => {
    jokesCategories.length &&
      jokesData.length &&
      setJokes(jokesData.filter((joke) => joke.categories.includes(jokeCategory)));
    jokesCategories.length &&
      jokesData.length &&
      jokeCategory === 'All' &&
      setJokes(jokesData);
    setSelectedCategory(jokeCategory);
  };

  return (
    <div className="cta-container">
      {!jokesCategories.length ? (
        <div className="loading">
          <ClipLoader color="green" size={250} cssOverride={{ fontWeight: 600 }} />
        </div>
      ) : (
        jokesCategories.map((jokeCategory, index) => (
          <div key={index}>
            <button
              className={`cta-btn category-bg `}
              id={jokeCategory}
              onClick={() => handleOnSelect(jokeCategory)}
            >
              {jokeCategory} Jokes
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CTA;
