import { useEffect } from "react";
import { POPULAR_MOVIE_API } from "../constant/Constant";
import { useDispatch } from "react-redux";
import { addNowPopularMovies } from "../redux/moviesSlice";

const useNowPopularMovies = () => {

  // Fetch data from TMDB and update the store
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPopularMovies = async () => {
      const data = await fetch(POPULAR_MOVIE_API); 
      const json = await data.json();
      dispatch(addNowPopularMovies(json.results));
    };
    getNowPopularMovies();
  }, []);
};

export default useNowPopularMovies;