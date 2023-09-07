import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchData } from 'components/API';
import Spinner from 'components/Spinner';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const wayDetails = `/movie/${movieId}`;

    setTimeout(async () => {
      try {
        const movieInfo = await fetchData(wayDetails);
        setInfo(movieInfo);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      } finally {
        toast.success('Success!');
      }
    }, 300);
  }, [movieId]);

  if (info === null) {
    return <Spinner />;
  }

  const {
    title,
    original_title,
    poster_path,
    budget,
    genres,
    homepage,
    release_date,
    vote_average,
    overview,
  } = info;

  const poster = poster_path && `http://image.tmdb.org/t/p/w342${poster_path}`;
  const release = release_date && release_date.slice(0, 4);
  const rating = vote_average && Math.round(vote_average * 10);
  const tags =
    genres &&
    genres.map(tag => (
      <li key={tag.id}>
        <p>{tag.name}</p>
      </li>
    ));

  return (
    <>
      {info && (
        <main>
          <Link to={backLocationRef.current}>
            <button>Back</button>
          </Link>
          <hr />
          <section>
            <img src={poster} alt={original_title} width="220" height="340" />
            <div>
              <h2>
                {title} ({release})
              </h2>
              {budget ? (
                <p>
                  The budget($): <b>{budget}</b>
                </p>
              ) : null}
              <p>
                User Score: <b>{rating}%</b>
              </p>
              <h3>Overview</h3>
              <p>{overview} </p>
              <h4>Genres</h4>
              <ul>{tags}</ul>
              {homepage && (
                <div>
                  <p>Homepage: </p>
                  <a href={homepage} target="_blank" rel="noreferrer">
                    {homepage}
                  </a>
                </div>
              )}
            </div>
          </section>
          <hr />
          <section>
            <h5>Additional information</h5>
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
          </section>
          <hr />
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
      )}
    </>
  );
};

export default MovieDetails;
