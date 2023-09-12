import { createSlice } from "@reduxjs/toolkit";

const gptMovies = createSlice({
  name: "gptmovie",
  initialState: {
    // GPTMoviesResult:null,
    tmdbMovieResult:null,
    gptResultName:null,
  },
  reducers: {
    addGPTMoviesResult: (state, action) => {
      const {tmdbMovieResult,gptResultName} = action.payload
      state.gptResultName = gptResultName
      state.tmdbMovieResult = tmdbMovieResult


    },
  },
});
export const { addGPTMoviesResult } = gptMovies.actions;
export default gptMovies.reducer;
