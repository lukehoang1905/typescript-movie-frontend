import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import tmdbApi, { collection } from "../api/tmdb";
import Header from "../components/Header";

import type { MovieItem } from "../interfaces";
import Loader from "../components/Loader";
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
        setMovie(data.results);
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

  return (
    <div>
      <Header />
      {nowLoading || upcomingLoading ? (
        <Loader />
      ) : (
        <Outlet context={{ now, upcoming }} />
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
