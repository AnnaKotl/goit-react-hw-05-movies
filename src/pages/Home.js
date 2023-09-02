import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../API';
import { TrendItems } from 'components/TrendItems';


function Home() {
  const [trendingMovies, setTrendingMovies]= useState([]);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const data = await fetchTrendingMovies();
        console.log(data);
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    }

    fetchTrending();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <TrendItems items={trendingMovies} />
    </div>
  );
}

export default Home;
