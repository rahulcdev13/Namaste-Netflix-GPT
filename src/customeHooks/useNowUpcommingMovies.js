import { useEffect } from "react";
import { UPCOMMING_MOVIE_API } from "../constant/Constant";
import { useDispatch } from "react-redux";
import { addNowUpcommingMovies } from "../redux/moviesSlice";

const useNowUpcommingMovies = () => {

  // Fetch data from TMDB and update the store
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowUpcommingMovies = async () => {
      const data = await fetch(UPCOMMING_MOVIE_API); 
      const json = await data.json();
      dispatch(addNowUpcommingMovies(json.results));
    };
    getNowUpcommingMovies();
  }, []);
};

export default useNowUpcommingMovies;