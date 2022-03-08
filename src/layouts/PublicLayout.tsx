import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import tmdbApi, { collection } from "../api/tmdb";
import Header from "../components/Header";

import type { MovieItem } from "../interfaces";
import Loader from "../components/Loader";
import apiConfig from "../api/apiConfig";
const useFetch = (type: string) => {
  const [movie, setMovie] = useState<Array<MovieItem> | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    setLoading(true);
    const getMovie = async () => {
      const params = { page: 1 };
      try {
        const data = await tmdbApi.getMoviesList(collection[type], {
          params,
        });
        const movie = data.results.map((movie) => {
          const backgroundImage = apiConfig.originalImage(
            movie.backdrop_path ? movie.backdrop_path : movie.poster_path
          );
          movie.backgroundImage = backgroundImage;
          return movie;
        });

        setMovie(movie);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [type]);

  return [movie, loading];
};

const PublicLayout = () => {
  const [now, nowLoading] = useFetch("now_playing");
  const [upcoming, upcomingLoading] = useFetch("upcoming");
  const [popular, popularLoading] = useFetch("popular");
  const [toprated, topratedLoading] = useFetch("top_rated");

  return (
    <div>
      <Header />
      {nowLoading || upcomingLoading || popularLoading || topratedLoading ? (
        <Loader />
      ) : (
        <Outlet context={{ now, upcoming, popular, toprated }} />
      )}
    </div>
  );
};
export type MovieState = {
  [now: string]: Array<MovieItem>;
};
export const useMovies = () => {
  return useOutletContext<MovieState>();
};

export default PublicLayout;
