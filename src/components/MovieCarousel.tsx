import { Play } from "styled-icons/boxicons-regular";

import { MovieItem } from "../interfaces";
import type { MovieState } from "../layouts/PublicLayout";
import { AnimatePresence, motion } from "framer-motion";
import "./MovieCarousel.scss";
import { useState } from "react";
import { wrap } from "popmotion";
import { StyledIconBase } from "@styled-icons/styled-icon";

import { CheveronDown, CheveronUp } from "styled-icons/zondicons";
import styled from "styled-components";
import { Heart } from "styled-icons/evil";
import { HeartFullOutline as FilledHeart } from "styled-icons/typicons";
import { useNavigate } from "react-router-dom";
import { Info } from "styled-icons/bootstrap/";

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 1000 : -1000,
      opacity: 0.5,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 1,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0.5,
    };
  },
};

const StylePagination = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  ${StyledIconBase} {
    border-radius: 50%;
    transition: color 2s, background-color ease 0.8s;
  }
  ${StyledIconBase}:hover {
    background-color: #71fadc;
    color: rgba(15, 15, 15, 0.8);
  }
  & li:nth-child(2) ${StyledIconBase}:hover {
    border: none;
    color: #71fadc;
    background-color: transparent;
    transition: color 1s;
  }
`;

const MovieCarousel = ({ now }: MovieState) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, now.length, page);

  const [likes, setLikes] = useState<Array<Number>>([]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const like = (movieId: number, yes: boolean = true) => {
    if (yes) {
      setLikes((likes) => [...likes, movieId]);
    } else {
      setLikes((likes) => likes.filter((e) => e !== movieId));
    }
  };

  return (
    <div className="carousel">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 50 },

            opacity: { duration: 2 },
          }}
        >
          <SingleCarousel {...now[imageIndex]} key={now[imageIndex].id} />
        </motion.div>
        <ul className="carousel__single--pagination">
          <StylePagination>
            <li onClick={() => paginate(1)}>
              <CheveronUp size={40} />
            </li>
            <li
              onClick={() =>
                !likes.includes(now[imageIndex].id)
                  ? like(now[imageIndex].id)
                  : like(now[imageIndex].id, false)
              }
            >
              {likes.includes(now[imageIndex].id) ? (
                <FilledHeart size={40} color={"#71fadc"} />
              ) : (
                <Heart size={40} />
              )}
            </li>
            <li onClick={() => paginate(-1)}>
              <CheveronDown size={40} />
            </li>
          </StylePagination>
        </ul>
      </AnimatePresence>
    </div>
  );
};

const SingleCarousel = (movie: MovieItem) => {
  const navigate = useNavigate();

  return (
    <div
      className="carousel__single--background"
      style={{
        backgroundImage: `url(${movie.backgroundImage})`,
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
            <Play size={40} onClick={() => {}} />
            <span>Watch now </span>
          </div>
          <div
            className="button"
            onClick={() => {
              navigate(`/browse/${movie.id}`);
            }}
          >
            <Info size={40} />
            <span>See more</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MovieCarousel;
