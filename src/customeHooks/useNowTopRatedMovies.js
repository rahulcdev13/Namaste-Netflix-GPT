import { useEffect } from "react";
import { POPULAR_MOVIE_API } from "../constant/Constant";
import { useDispatch } from "react-redux";
import {addNowTopRatedMovies} from "../redux/moviesSlice"

const useNowTopRatedMovies = () => {

  // Fetch data from TMDB and update the store
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowTopratedMovies = async () => {
      const data = await fetch(POPULAR_MOVIE_API); 
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowTopRatedMovies(json.results));
    };
    getNowTopratedMovies();
  }, []);
};

export default useNowTopRatedMovies;