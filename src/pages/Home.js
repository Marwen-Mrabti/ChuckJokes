import React, { useEffect, useState } from 'react';

import CTA from '../components/cta/CTA';
import JokesList from '../components/jokes/JokesList';

const Home = ({ jokesData }) => {
  const [jokes, setJokes] = useState(jokesData);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    jokesData.length && setJokes(jokesData);
  }, [jokesData]);

  return (
    <main className="home">
      <CTA
        jokesData={jokesData}
        setJokes={setJokes}
        setSelectedCategory={setSelectedCategory}
      />
      <JokesList jokes={jokes} selectedCategory={selectedCategory} />
    </main>
  );
};

export default Home;
