import React from 'react';
import { Link } from 'react-router-dom';
import './JokeCard.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Joke = ({ joke }) => {
  const jokeCategory = !joke.categories.length ? 'random' : joke.categories[0];

  return (
    <div className="joke-card">
      <div className='joke-info'>
        <h1 className="joke-category">{jokeCategory}</h1>
        <h3 className="joke-content">{joke.value} </h3>
      </div>
      <Link className="btn" to={`/joke/${joke.id}`}>
        <span className="btn-title">SEE STATS</span>
        <span className="btn-icon">
          <HiOutlineArrowNarrowRight />
        </span>
      </Link>
    </div>
  );
};

export default Joke;
