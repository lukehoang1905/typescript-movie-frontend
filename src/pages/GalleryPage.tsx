import { useEffect, useState } from "react";

import MovieGallery from "../components/MovieGallery";
import { useMovies } from "../layouts/PublicLayout";

import "./GalleryPage.scss";

const GalleryPage = () => {
  const [filter, setFilter] = useState("all");
  const [genres, setGenres] = useState();
  const movies = useMovies().popular;

  useEffect(() => {
    let genresList: any = new Set(["all"]);
    movies.map((e) => e.genre_name.forEach((i) => genresList.add(i)));
    genresList = Array.from(genresList);
    setGenres(genresList);
  }, [movies]);

  return (
    <>
      {" "}
      <FilterGroup genres={genres} setFiltered={setFilter} />
      <MovieGallery movies={movies} filter={filter} />
    </>
  );
};

const FilterGroup = ({ genres, setFiltered }: any) => {
  const [active, setActive] = useState<string | null>(null);

  const handleFilter = (e: string) => {
    setActive((active) => e);
    setFiltered(e);
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
