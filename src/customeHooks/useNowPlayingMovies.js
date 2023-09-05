import { useEffect } from "react";
import { MOVIE_API } from "../constant/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {

  // Fetch data from TMDB and update the store
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(MOVIE_API);
      // const data = await fetch(
      //   "https://api.themoviedb.org/3/movie/now_playing?page=1",
      //   API_OPTIONS
      // );
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    };
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;