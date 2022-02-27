import MovieCarousel from "../components/MovieCarousel";
import { useMovies } from "../layouts/PublicLayout";
const LandingPage = () => {
  const { movies } = useMovies();
  return (
    <div>
      <MovieCarousel movies={movies} />
    </div>
  );
};

export default LandingPage;
