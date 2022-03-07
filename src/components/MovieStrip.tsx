import { MovieState } from "../layouts/PublicLayout";
import "./MovieStrip.scss";
const MovieStrip = ({ upcoming }: MovieState) => {
  return (
    <div className="movie__strip">
      <h2 className="movie__strip--title">Upcoming</h2>
      <div className="movie__strip--wrapper">
        {upcoming.map((movie) => (
          <img src={movie.backgroundImage} />
        ))}
      </div>
    </div>
  );
};

export default MovieStrip;
