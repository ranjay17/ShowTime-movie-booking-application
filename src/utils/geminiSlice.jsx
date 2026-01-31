import { createSlice } from "@reduxjs/toolkit";


const geminiSlice = createSlice({
    name: 'gemini',
    initialState: {
        showGeminiSearch: true,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        setShowGeminiSearch : (state, action) =>{
            state.showGeminiSearch = action.payload;
        },
        addGeminiMovie : (state, action) =>{
            const{movieNames, movieResults} = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames
        }
    }
})

export const{setShowGeminiSearch, addGeminiMovie} = geminiSlice.actions; 
export default geminiSlice.reducer;