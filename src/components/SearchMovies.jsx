import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <img
              src={
                film.poster_path &&
                `https://image.tmdb.org/t/p/w500${film.poster_path}`
              }
              alt={film.original_title}
              width="200"
            />
            {film.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default SearchMovies;