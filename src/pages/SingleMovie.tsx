import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../api/tmdb";
import { useMovies } from "../layouts/PublicLayout";

const SingleMovie = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<any>({});

  useEffect(() => {
    setLoading(true);
    const getMovie = async () => {
      const params = { page: 1 };
      try {
        const data = await tmdbApi.detail(movieId, {
          params,
        });
        setMovie(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [movieId]);

  return <>{!loading ? <div>{movie.title}</div> : <h1>loading</h1>}</>;
};
export default SingleMovie;
