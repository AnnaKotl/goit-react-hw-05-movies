import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { fetchData } from '../API';
import SearchMovies from 'components/SearchMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useSearchParams();
  const currentSearch = query.get('search') ?? '';

  const onSubmitSearch = e => {
    e.preventDefault();
    const newSearch = e.target.elements.search.value;

    if (newSearch === '') {
      toast.error('Enter some text');
      return;
    }
    setQuery({ search: newSearch });
  };

  useEffect(() => {
    if (currentSearch === '') {
      return;
    }

    toast.loading('Loading...', { duration: 300 });
    const querySearch = `&query=${currentSearch}`;
    const waySearch = '/search/movie';

    setTimeout(async () => {
      try {
        const { results } = await fetchData(waySearch, querySearch);
        if (results.length === 0) {
          toast('No movies');
          return;
        }
        toast.success(`Found ${results.length} movies!`);
        setMovies([...results]);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      }
    }, 500);
  }, [currentSearch]);

  return (
    <main>
      <h2>Find movies:</h2>
      <form onSubmit={onSubmitSearch}>
        <input
          type="text"
          name="search"
          defaultValue={currentSearch}
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <hr />
      {movies !== [] && (
        <section>
          <ul>
            <SearchMovies movies={movies} />
          </ul>
        </section>
      )}
    </main>
  );
};

export default Movies;