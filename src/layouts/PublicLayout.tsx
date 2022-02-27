import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import tmdbApi, { collection } from "../api/tmdb";
import Header from "../components/Header";

import type { MovieItem } from "../interfaces";
import Loader from "../components/Loader";
import { R } from "styled-icons/crypto";

const PublicLayout = () => {
  const [movies, setMovies] = useState<Array<MovieItem> | []>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [scrolling, setScrolling] = useState<Boolean>(false);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const data = await tmdbApi.getMoviesList(collection.now_playing, {
          params,
        });
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  //PAUSE here set scrolling

  return (
    <div>
      <Header />
      {loading ? <Loader /> : <Outlet context={{ movies }} />}
    </div>
  );
};
export type MovieState = {
  [movies: string]: Array<MovieItem>;
};
export const useMovies = () => {
  return useOutletContext<MovieState>();
};

export default PublicLayout;
