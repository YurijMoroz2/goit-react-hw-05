import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../api';
import { useParams } from 'react-router-dom';

export default function MovieCast() {
  const [movieCredits, setMovieCredits] = useState([]);
  console.log(movieCredits);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        const credits = await getMovieCredits(movieId);
        setMovieCredits(credits);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieCredits();
  }, [movieId]);
  return (
    <ul>
      {movieCredits.map(item => {
        return (
          <li key={item.credit_id}>
            <>
              {item.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                  alt={item.name}
                  width={200}
                />
              )}
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </>
          </li>
        );
      })}
    </ul>
  );
}
