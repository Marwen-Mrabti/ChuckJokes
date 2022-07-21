import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import backArrow from '../assets/assets_Homework_Front-End_01/arrow-left@3x.png';
import JokeDetails from '../components/jokeDetails/JokeDetails';

const JokeStats = ({ jokesData }) => {
  const { id } = useParams();
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    setJoke(...jokesData.filter((joke) => joke.id === id));
  }, [id, jokesData]);

  return (
    <div className="joke-stats stats-container">
      <Link className="back-home" to="/">
        <img src={backArrow} alt="back" />
      </Link>
      {joke && <JokeDetails joke={joke} />}
    </div>
  );
};

export default JokeStats;
