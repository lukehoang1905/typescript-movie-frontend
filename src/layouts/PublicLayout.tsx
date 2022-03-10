import { useEffect, useRef, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import tmdbApi, { collection } from "../api/tmdb";
import Header from "../components/Header";

import type { GenreDict, MovieItem } from "../interfaces";
import Loader from "../components/Loader";
import apiConfig from "../api/apiConfig";
import Footer from "../components/Footer";

export type FetchType = [Array<MovieItem>, Boolean];

export const useFetch = (type: string, genreDict?: Array<GenreDict>) => {
  const [movie, setMovie] = useState<Array<MovieItem>>();
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    setLoading(true);
    const getMovie = async () => {
      const params = { page: 1 };
      const data = await tmdbApi.getMoviesList(collection[type], {
        params,
      });
      const movie = data.results.map((movie) => {
        const backgroundImage = apiConfig.originalImage(
          movie.backdrop_path ? movie.backdrop_path : movie.poster_path
        );
        movie.backgroundImage = backgroundImage;
        movie.posterImage = apiConfig.originalImage(
          movie.poster_path ? movie.poster_path : movie.backdrop_path
        );
        if (genreDict) {
          let dictionary: { [id: string]: string } = Object.assign(
            {},
            ...genreDict.map((x) => ({ [x.id]: x.name }))
          );
          movie.genre_name = movie.genre_ids.map((id) => {
            const key = id.toString();
            return dictionary[key];
          });
        }
        return movie;
      });
      setMovie(movie);
      setLoading(false);
    };
    getMovie();
  }, [type, genreDict]);
  return [movie, loading];
};

const useGenreDict = () => {
  const [genreDict, setGenreDict] = useState<Array<GenreDict>>();
  useEffect(() => {
    const getGenres = async () => {
      const data = await tmdbApi.getGenres();
      setGenreDict(data.genres);
    };
    getGenres();
  }, []);
  return [genreDict];
};

const PublicLayout = () => {
  const [genreDict] = useGenreDict();
  const [now, nowLoading] = useFetch("now_playing");
  const [upcoming, upcomingLoading] = useFetch("upcoming");
  const [popular, popularLoading] = useFetch("popular", genreDict);
  const [toprated, topratedLoading] = useFetch("top_rated");

  return (
    <div>
      <Header />
      {nowLoading || upcomingLoading || popularLoading || topratedLoading ? (
        <Loader />
      ) : (
        <Outlet context={{ now, upcoming, popular, toprated }} />
      )}
      <Footer />
    </div>
  );
};
export type MovieState = {
  [keyName: string]: Array<MovieItem>;
};
export const useMovies = () => {
  return useOutletContext<MovieState>();
};

export default PublicLayout;
