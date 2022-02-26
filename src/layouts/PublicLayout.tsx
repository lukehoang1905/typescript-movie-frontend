import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import tmdbApi, { collection } from "../api/tmdb";
import apiConfig from "../api/apiConfig";
import Header from "../components/Header";

import type { MovieItem } from "../interfaces";

const PublicLayout = () => {
  const [movies, setMovies] = useState<Array<MovieItem> | []>([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const data = await tmdbApi.getMoviesList(collection.now_playing, {
          params,
        });
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <Header />
      <Outlet context={{ movies }} />
    </div>
  );
};

export const useMovies = () => {
  return useOutletContext<MovieItem>();
};

export default PublicLayout;
