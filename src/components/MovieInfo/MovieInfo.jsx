import css from './MovieInfo.module.css';
export const MovieInfo = ({ movie }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <>
      {movie && (
        <div className={css.box}>
          
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            height={400}
            alt={movie.title}
          />
          <div>
            <h1 >
              {movie.title} ({movie.release_date})
            </h1>
            <p >
              User Score: {Math.round(movie.vote_average * 10)}%
            </p>
            <h2 >Overview</h2>
            <p >{movie.overview}</p>
            <h3 >Genres</h3>
            <div className={css.genres}>
              {movie.genres.map(item => (
                <p key={item.id}>
                  {item.name} {item.id}%
                </p>
              ))}
            </div>
          </div>
                   
        </div>
      )}
    </>
  );
};
