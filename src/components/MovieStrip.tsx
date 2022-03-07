import { MovieState } from "../layouts/PublicLayout";

const MovieStrip = ({ upcoming }: MovieState) => {
  return (
    <>
      {upcoming.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </>
  );
};

export default MovieStrip;
