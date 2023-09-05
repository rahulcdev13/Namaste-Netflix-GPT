import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailerVideo:null,
    nowPlayingMovies: null,
    nowPopularMovies: null,
    nowTopRatedMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addNowTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addMoviesTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies,addMoviesTrailer,addNowPopularMovies,addNowTopRatedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
