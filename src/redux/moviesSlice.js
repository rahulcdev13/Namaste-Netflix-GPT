import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailerVideo: null,
    nowPlayingMovies: null,
    nowPopularMovies: null,
    nowTopRatedMovies: null,
    nowUpcommingMovies: null,
  },
  reducers: {
    addMoviesTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addNowTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addNowUpcommingMovies: (state, action) => {
      state.nowUpcommingMovies = action.payload;
    },
  },
});

export const {
  addMoviesTrailer,
  addNowPlayingMovies,
  addNowPopularMovies,
  addNowTopRatedMovies,
  addNowUpcommingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
