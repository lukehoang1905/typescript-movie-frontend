import { Play } from "styled-icons/boxicons-regular";
import apiConfig from "../api/apiConfig";
import { MovieItem } from "../interfaces";
import type { MovieState } from "../layouts/PublicLayout";
import { motion } from "framer-motion";
import "./MovieCarousel.scss";

const MovieCarousel = ({ movies }: MovieState) => {
  const topMovies = movies;
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
      <motion.div
        className="carousel__single--info"
        animate={{ y: `-5em`, x: `5em` }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <h1>{movie.title}</h1>
        <br />
        <div className="btn-group">
          <div className="button">
            <Play
              size={40}
              onClick={() => {
                console.log("s");
              }}
            />
            <span>Watch now </span>
          </div>
          <div className="button">
            <Play
              size={40}
              onClick={() => {
                console.log("s");
              }}
            />
            <span>See more</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MovieCarousel;
