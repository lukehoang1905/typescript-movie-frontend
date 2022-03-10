import { motion } from "framer-motion";
import MovieCard from "./MovieCard";
import "./MovieGallery.scss";

const MovieGallery = ({ movies, filter }: any) => {
  return (
    <div className="movie__gallery">
      <motion.div className="movie__gallery--wrapper">
        {movies.map((movie: any) =>
          filter !== "all" ? (
            movie.genre_name.includes(filter) ? (
              <MovieCard {...movie} />
            ) : (
              ""
            )
          ) : (
            <MovieCard {...movie} />
          )
        )}
      </motion.div>
    </div>
  );
};

export default MovieGallery;
