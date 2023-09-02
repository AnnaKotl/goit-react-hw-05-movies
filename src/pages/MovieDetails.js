import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { getMovieDetails } from '../API';

import MovieCard from 'components/MovieCard';
import MovieLinks from 'components/MovieLinks';


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieInfo = await getMovieDetails(id);
        setMovie(movieInfo);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button>Go back</button>
      <MovieCard movie={movie} />
      <MovieLinks id={id} />
      <Outlet />
    </div>
  );
}

export default MovieDetails;