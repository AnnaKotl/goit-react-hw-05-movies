import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FcClapperboard } from "react-icons/fc";

import { fetchData } from '../API';
import MoviesList from 'components/MoviesList';
import { TitleFilm, IconContainer, MainContainer } from 'styles/MoviesList.styled';

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
    <MainContainer>
      <TitleFilm>Trending movies today</TitleFilm>
      <IconContainer>
        <FcClapperboard style={{ width: '30px', height: '30px' }} />
      </IconContainer>
      <ul>
        <MoviesList movies={movies} />
      </ul>
      <hr/>
    </MainContainer>
  );
};

export default Home;
