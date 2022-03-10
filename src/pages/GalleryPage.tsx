import { useEffect, useRef, useState } from "react";
import { Set } from "typescript";
import tmdbApi from "../api/tmdb";
import { GenreDict } from "../interfaces";
import { useFetch, useMovies } from "../layouts/PublicLayout";

import "./GalleryPage.scss";

const GalleryPage = () => {
  const [filtered, setFiltered] = useState([]);
  const [genres, setGenres] = useState();
  const movies = useMovies();

  useEffect(() => {
    let genresList: any = new Set();
    movies.popular.map((e) => e.genre_name.forEach((i) => genresList.add(i)));
    genresList = Array.from(genresList);
    setGenres(genresList);
  }, [movies]);
  return <>{false ? <h1>loading...</h1> : <FilterGroup genres={genres} />}</>;
};

const FilterGroup = ({ genres }: any) => {
  const [active, setActive] = useState<string | null>(null);
  console.log(genres);
  const handleFilter = (e: string) => {
    setActive((active) => e);
  };
  const checkActive = (e: string) => {
    return e === active ? "active" : "";
  };

  return (
    <div className="filter__button--wrapper">
      {genres?.map((genre: string) => (
        <div
          className={`button ${checkActive(genre)}`}
          onClick={() => {
            handleFilter(genre);
          }}
        >
          {genre}
        </div>
      ))}
    </div>
  );
};
export default GalleryPage;
