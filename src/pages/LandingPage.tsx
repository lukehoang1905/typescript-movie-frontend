import MovieCarousel from "../components/MovieCarousel";
import MovieStrip from "../components/MovieStrip";
import { useMovies } from "../layouts/PublicLayout";
import "./LandingPage.scss";
const LandingPage = () => {
  const movieState = useMovies();

  return (
    <div>
      <MovieCarousel now={movieState.now} />
      <MovieStrip upcoming={movieState.upcoming} />

      <MovieStrip popular={movieState.popular} />
      <MovieStrip toprated={movieState.toprated} />
    </div>
  );
};

export default LandingPage;
