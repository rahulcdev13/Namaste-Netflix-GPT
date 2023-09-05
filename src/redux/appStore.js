import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import languageSlice from "./languageSlice";
// import trailerSlice from "./trailerSlice";
// import movieRahul from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gpt: gptSlice,
    language:languageSlice,
    // trailer:trailerSlice
    // movies:movieRahul,
  },
});
export default appStore;
