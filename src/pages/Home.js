import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { fetchData } from '../API';
import MoviesList from 'components/MoviesList';
import { TitleFilm } from 'styles/MoviesList.styled';

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
      <TitleFilm>Trending movies today</TitleFilm>
      <ul>
        <MoviesList movies={movies} />
      </ul>
      <hr/>
    </main>
  );
};

export default Home;
