import useNowPlayingMovies from "../customeHooks/useNowPlayingMovies";
import useNowPopularMovies from "../customeHooks/useNowPopularMovies";
import useNowTopRatedMovies from "../customeHooks/useNowTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Custome hook is here
  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
