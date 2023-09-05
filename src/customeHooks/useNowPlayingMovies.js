import { useEffect } from "react";
import { PLAYING_MOVIE_API } from "../constant/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {

  // Fetch data from TMDB and update the store
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(PLAYING_MOVIE_API); 
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;