import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api';

export default function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  console.log(movieReviews);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieReviews() {
     
      try {
        const reviews = await getMovieReviews(movieId);
        setMovieReviews(reviews);
      } catch(error) {
     console.error(error)
      }
    }
    fetchMovieReviews();
  }, [movieId]);
  return (
    <div>
            <>
        {movieReviews.length ? (
          <ul>
            {movieReviews.map(item => {
              return (
                <li key={item.id} >
                  <>
                    <h3>Author: {item.author}</h3>
                    <p>{item.content}</p>
                  </>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </>
    </div>
  );
}
