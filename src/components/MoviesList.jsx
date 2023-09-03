import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (movies.length === 0) {
    return <p>The list of popular films is missing</p>; //переробити на спінер!!!
  }

  return (
    <>
      {movies.map(({ id, poster_path, original_title, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path && `https://image.tmdb.org/t/p/w92${poster_path}`
              }
              alt={original_title}
              width="80"
            />
            {title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default MoviesList;
