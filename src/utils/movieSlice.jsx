import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        movieDetails: null,
        movieTrailer: null,
        showTrailer: false,
    },
    reducers: {
        addMovie: (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addMovieDetail: (state, action) =>{
            state.movieDetails = action.payload
        },
        addMovieTrailer: (state, action) =>{
            state.movieTrailer = action.payload;
        },
        setShowTrailer: (state, action) =>{
            state.showTrailer = action.payload
        }
    }
})

export const{addMovie, addMovieDetail, addMovieTrailer, setShowTrailer} = movieSlice.actions;
export default movieSlice.reducer;