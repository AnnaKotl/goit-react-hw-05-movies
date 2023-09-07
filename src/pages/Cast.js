import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchData } from 'components/API';
import Spinner from 'components/Spinner';

const Cast = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const wayCast = `/movie/${movieId}/credits`;

    setTimeout(async () => {
      try {
        const { cast } = await fetchData(wayCast);
        setDetails([...cast]);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      } finally {
        setLoading(false);
      }
    }, 300);
  }, [movieId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section>
      <ul>
        {details.map(info => (
          <li key={info.credit_id}>
            <img
              src={
                info.profile_path &&
                `http://image.tmdb.org/t/p/w500${info.profile_path}`
              }
              alt={info.original_name}
              width="100"
            />
            <h3>{info.name}</h3>
            <p>
              Character: <b>{info.character}</b>
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
