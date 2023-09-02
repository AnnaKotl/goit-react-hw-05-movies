import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../API';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReview(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieReviews();
  }, [movieId]);

  return (
    <>
      {review.length !== 0 && (
        <div>
          <h2>Movie Reviews</h2>
          <ul>
            {review.map(review => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {review.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};

export default Reviews;