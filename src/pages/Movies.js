import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from 'API';

import { FormSearch } from 'components/FormSearch';
import MovieList from 'components/MovieList';


const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [loading, setLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await searchMovies(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <div>
      <FormSearch value={movieName} onChange={updateQueryString} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <MovieList movies={searchResults} />
      )}
    </div>
  );
};

export default Movies;
