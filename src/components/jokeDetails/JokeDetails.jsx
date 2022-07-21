import React, { useState } from 'react';

import './JokeDetails.css';
import { BiLike, BiDislike } from 'react-icons/bi';
const JokeDetails = ({ joke }) => {
  const jokeCategory = !joke.categories.length ? 'random' : joke.categories[0];
  const [likeCounter, setLikeCounter] = useState(10);

  return (
    <div className="joke-details">
      <div className="joke-card">
        <div className="joke-info">
          <h1 style={{padding:"0.2rem 3rem"}} id={jokeCategory} className={`joke-category category-bg`}>
            {jokeCategory}
          </h1>
          <h3 className="joke-content">{joke.value} </h3>
        </div>
      </div>

      <div className="btns-opinion">
        <span className="like-btn" onClick={() => setLikeCounter((prev) => prev + 1)}>
          <BiLike />
        </span>
        <span style={{ fontSize: '2.5rem', fontWeight: 700 }}> {likeCounter} </span>
        <span className="dislike-btn" onClick={() => setLikeCounter((prev) => prev - 1)}>
          <BiDislike />
        </span>
      </div>
    </div>
  );
};

export default JokeDetails;
