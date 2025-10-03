import { createSlice } from "@reduxjs/toolkit";

const loadThem = () => {
    return localStorage.getItem('them') === 'darkM' ? 'darkM' : 'lightM';
    
}

const themSlice = createSlice({
    name: 'them',
    initialState: loadThem(),
    reducers: {
        toggleThem: (state) => {
            const newState = state === 'darkM' ? 'lightM' : 'darkM';
            localStorage.setItem('them',newState);
            return newState;
        }
    }
});

export const {toggleThem} = themSlice.actions;
export default themSlice.reducer