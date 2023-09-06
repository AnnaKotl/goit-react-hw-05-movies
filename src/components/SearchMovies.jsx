import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FilmPoster, FilmCard, FilmList } from 'styles/MoviesList.styled';

const SearchMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <FilmList>
      {movies.map(film => (
        <li key={film.id}>
          <FilmCard>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              <FilmPoster
                src={
                  film.poster_path &&
                  `https://image.tmdb.org/t/p/w500${film.poster_path}`
                }
                alt={film.original_title}
                width="150"
              />
              {film.title}
            </Link>
          </FilmCard>
        </li>
      ))}
    </FilmList>
  );
};

export default SearchMovies;