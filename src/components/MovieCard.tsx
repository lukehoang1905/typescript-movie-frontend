import { MovieItem } from "../interfaces";
import "./MovieCard.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MovieCard = (movie: MovieItem) => {
  const navigate = useNavigate();
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
    >
      <AnimatePresence>
        <img
          src={movie.posterImage}
          key={movie.posterImage}
          alt={movie.title}
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default MovieCard;
