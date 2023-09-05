import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
// import trailerSlice from "./trailerSlice";
// import movieRahul from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    // trailer:trailerSlice
    // movies:movieRahul,
  },
});
export default appStore;
