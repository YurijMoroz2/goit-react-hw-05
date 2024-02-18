import { Route, Routes} from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

import { Suspense, lazy } from 'react';
const HomePage=lazy(()=>import('../../pages/HomePage'));
const MoviesPage=lazy(()=>import('../../pages/MoviesPage'));
const MovieCast=lazy(()=>import('../MovieCast/MovieCast'));
const MovieReviews=lazy(()=>import('../MovieReviews/MovieReviews'));
const MovieDetailsPage=lazy(()=>import('../../pages/MovieDetailsPage'));
const NotFound=lazy(()=>import('../../pages/NotFound'))


export const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<MoviesPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
