import { useSelector } from "react-redux";
import GptSearch from "../GPT/GptSearch";
import useNowPlayingMovies from "../customeHooks/useNowPlayingMovies";
import useNowPopularMovies from "../customeHooks/useNowPopularMovies";
import useNowTopRatedMovies from "../customeHooks/useNowTopRatedMovies";
import useNowUpcommingMovies from "../customeHooks/useNowUpcommingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Custome hook is here
  const showGtpPage = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTopRatedMovies();
  useNowUpcommingMovies();
  return (
    <div>
      <Header />
      {showGtpPage ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
