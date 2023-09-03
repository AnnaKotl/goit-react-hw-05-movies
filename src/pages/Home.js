import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { fetchData } from '../API';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const way = '/trending/all/day'; //movie/day
    setTimeout(async () => {
      try {
        const { results } = await fetchData(way);
        setMovies([...results]);
      } catch (error) {
        console.error(error);
        toast.error('Error fetch data!');
      } finally {
        toast.success('Success!'); //delite in build project
      }
    }, 100);
  }, []);

  return (
    <main>
      <h2>Trending movies today</h2>
      <ul>
        <MoviesList movies={movies} />
      </ul>
    </main>
  );
};

export default Home;
