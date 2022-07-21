import React, { useState } from 'react';
import JokeCard from './JokeCard';
import './jokesList.css';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const JokesList = ({ jokes, selectedCategory }) => {
  const [numberOfJokes, setNumberOfJokes] = useState(6);
  return (
    <div className="jokes-list">
      <h2 id={selectedCategory} className={`category category-bg `}>
        {selectedCategory}
      </h2>
      <div className="jokes">
        {!jokes.length ? (
          <h1>no jokes for this category</h1>
        ) : (
          jokes
            .slice(0, numberOfJokes)
            .map((joke) => <JokeCard key={joke.id} joke={joke} />)
        )}
      </div>
      <div className="btns">
        <button
          className="btn-primary"
          onClick={() => setNumberOfJokes((prev) => prev + 6)}
        >
          <span className="btn-title">show more</span>
          <span className="btn-icon">
            <AiOutlineArrowDown />
          </span>
        </button>
        {numberOfJokes > 10 && (
          <button
            className="btn-primary"
            onClick={() => numberOfJokes > 10 && setNumberOfJokes((prev) => prev - 6)}
          >
            <span className="btn-title">show less</span>
            <span className="btn-icon">
              <AiOutlineArrowUp />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default JokesList;
