import { Link } from 'react-router-dom';

function MovieLinks({ id }) {
  return (
    <ul>
      <li>
        <Link to={`/movies/${id}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${id}/reviews`}>Reviews</Link>
      </li>
    </ul>
  );
}

export default MovieLinks;