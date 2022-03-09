import { MovieState } from "../layouts/PublicLayout";
import "./MovieStrip.scss";
const MovieStrip = (data: MovieState) => {
  const [key, value] = Object.entries(data)[0];
  return (
    <div className="movie__strip">
      <h2 className="movie__strip--title">{key}</h2>
      <div className="movie__strip--wrapper">
        {value.map((movie) => (
          <img
            src={movie.posterImage}
            key={movie.posterImage}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieStrip;
