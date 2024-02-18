import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../api';
import { MovieInfo } from '../components/MovieInfo/MovieInfo';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // ------------------------------------------
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovie = await getMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current ?? '/movie'}>
        <IoIosArrowRoundBack />
        Go back
      </Link>
      <MovieInfo movie={movie}></MovieInfo>
      <hr />
      <div style={{ display: 'flex', gap: 15 }}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <hr />
      <Suspense fallback={<b>Loading...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
