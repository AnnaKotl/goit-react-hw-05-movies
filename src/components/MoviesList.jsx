import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FilmCard, FilmList, FilmPoster } from '../styles/MoviesList.styled';


const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (movies.length === 0) {
    return <p>The list of popular films is missing</p>;
  }

  return (
    <FilmList>
      {movies.map(movie => (
        <li key={movie.id}>
          <FilmCard>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <FilmPoster
                src={
                  movie.poster_path &&
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
                alt={movie.original_title}
                width="150"
              />
              {movie.title} 
              {/* рендер назви фільму ---- !!! */}
            </Link>
          </FilmCard>
        </li>
      ))}
    </FilmList>
  );
};

export default MoviesList;

  // return (
  //   <>
  //     {movies.map(({ id, poster_path, original_title, title }) => (
  //       <li key={id}>
  //         <Link to={`/movies/${id}`} state={{ from: location }}>
  //           <img
  //             src={
  //               poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`
  //             }
  //             alt={original_title}
  //             width="160"
  //           />
  //           {title}
  //         </Link>
  //       </li>
  //     ))}
  //   </>
  // );