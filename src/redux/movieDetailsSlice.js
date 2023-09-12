import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name:"movieInfo",
    initialState:{
        showMovieInfo:false,
    },
    reducers:{
        toggleMovieInfo:(state,action)=>{
            state.showMovieInfo = !state.showMovieInfo
        }
    }
    
})
export const {toggleMovieInfo} = movieDetailsSlice.actions
export default movieDetailsSlice.reducer