import apiConfig from "../api/apiConfig";
import { MovieItem } from "../interfaces";
import type { MovieState } from "../layouts/PublicLayout";
import "./MovieCarousel.scss";

const MovieCarousel = ({ movies }: MovieState) => {
  const topMovies = movies.slice(4, 5);
  return (
    <div className="carousel">
      {topMovies.map((movie: MovieItem) => (
        <SingleCarousel {...movie} key={movie.id} />
      ))}
    </div>
  );
};
const SingleCarousel = (movie: MovieItem) => {
  const backgroundImage = apiConfig.originalImage(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );
  console.log(backgroundImage);
  return (
    <div
      className="carousel__single--background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* <h1>{movie.title}</h1> */}
    </div>
  );
};

export default MovieCarousel;
