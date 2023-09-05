import useNowPlayingMovies from "../customeHooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Custome hook is here
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      mainContainer
        - Videobackground
        - VideoTitle
      SecondaryContainer
        - Movielist * n
        -  cards * n   
      */}
    </div>
  );
};

export default Browse;
