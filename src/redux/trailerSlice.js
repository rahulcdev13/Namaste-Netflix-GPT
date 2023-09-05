import { createSlice } from "@reduxjs/toolkit";

const trailerSlice = createSlice({
  name: "trailer",
  initialState: {
    playTrailer: null,
  },
  reducers: {
    addTrailer: (state, action) => {
      state.playTrailer = action.payload;
    },
  },
});

export const { addTrailer } = trailerSlice.actions;
export default trailerSlice.reducer;
