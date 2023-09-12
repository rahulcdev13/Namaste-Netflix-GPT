import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import languageSlice from "./languageSlice";
import gptMovies from "./gptMovies";
import movieDetailsSlice from "./movieDetailsSlice";
// import trailerSlice from "./trailerSlice";
// import movieRahul from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gpt: gptSlice,
    language:languageSlice,
    gptmovie:gptMovies,
    movieInfo:movieDetailsSlice,
    // trailer:trailerSlice
    // movies:movieRahul,
  },
});
export default appStore;
