import React, { useState, useEffect } from 'react';
import { startTransition } from 'react';

import { fetchTrendingMovies } from '../API';
import { TrendItems } from 'components/TrendItems';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Додав стейт для відстеження завантаження

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        await startTransition(() => {
          const fetchData = async () => {
            const data = await fetchTrendingMovies();
            setTrendingMovies(data.results);
            setIsLoading(false); // Змінив isLoading на false, коли дані завантажені
          };
          fetchData();
        });
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setIsLoading(false); // Обробив помилку та встановив isLoading в false
      }
    };

    fetchTrending();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {isLoading ? (
        <p>Loading...</p> // Відображаємо текст "Loading..." під час завантаження
      ) : (
        <TrendItems items={trendingMovies} /> // Показуємо TrendItems після завантаження
      )}
    </div>
  );
}

export default Home;
