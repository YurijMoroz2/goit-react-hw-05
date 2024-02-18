import { Link, useLocation } from 'react-router-dom';
import css from "./MovieList.module.css";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`} state={location} className={css.linkItem}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
