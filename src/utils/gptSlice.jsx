import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptPage: true,
    },
    reducers: {
        setShowGptPage : (state, action) =>{
            state.showGptPage = action.payload;
        },
    }
})

export const{setShowGptPage} = gptSlice.actions; 
export default gptSlice.reducer;