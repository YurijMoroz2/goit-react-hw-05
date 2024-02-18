import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api';
import { MoviesList } from '../components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const fetchedMovies = await getPopularMovies({
          abortController: controller,
        });

        setMovies(fetchedMovies);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {error && <h1>Oooops,error!!!!!</h1>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
