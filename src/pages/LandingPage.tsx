import MovieCarousel from "../components/MovieCarousel";
import MovieStrip from "../components/MovieStrip";
import { useMovies } from "../layouts/PublicLayout";
const LandingPage = () => {
  const movieState = useMovies();
  console.log(movieState);
  return (
    <div>
      <MovieCarousel now={movieState.now} />
      <MovieStrip upcoming={movieState.upcoming} />
    </div>
  );
};

export default LandingPage;
