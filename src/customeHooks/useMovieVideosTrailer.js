import { useEffect } from "react";
import { myAPIKEY } from "../constant/Constant";
import { useDispatch } from "react-redux";
import { addMoviesTrailer } from "../redux/moviesSlice";

// fetch trailer video and updating the store with trailer video data :

const useMovieVideosTrailer = (movieId) => {
  // const [traileId,setTrailerId] = useState();
  const dispatch = useDispatch();
  const MOVIE_VIDEO_API = `https://api.themoviedb.org/3/movie/${movieId}}/videos?api_key=${myAPIKEY}`;

  useEffect(() => {
    const getMovieVideo = async () => {
      const data = await fetch(MOVIE_VIDEO_API);
      const json = await data.json();
      const FilterData = json.results.filter((item) => item.type === "Trailer");
      const trailer = FilterData.length ? FilterData[0] : json.results[0];
      dispatch(addMoviesTrailer(trailer));
      //   console.log(trailer);
      //   setTrailerId(trailer.key)  : this is one way to store data in state
    };
    getMovieVideo();
  }, []);
};

export default useMovieVideosTrailer;
