import { useSearchParams } from 'react-router-dom';

import { SearchBar } from '../components/SearchBox/SearchBox';

import { getSearchMovies } from '../api';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { MoviesList } from '../components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [movie, setMovie] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  // ------------------------------------------------------------
  useEffect(() => {
    if (movieName === '') return;

    handleSubmit(movieName);
  }, []);

  // запит на сервер при введені даних
  const handleSubmit = async newMovieName => {
    try {
      const fetchedMovie = await getSearchMovies(newMovieName);

      setMovie(fetchedMovie);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} setSearchParams={setSearchParams} />

      <Toaster />

      {movie !== null && <MoviesList movies={movie} />}
    </main>
  );
}
