import { createSlice } from "@reduxjs/toolkit";

const aapSlice = createSlice({
    name:"aap",
    initialState:{
        isMenuOpen :true,
    },
    reducers :{
        toggleMenu :(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu :(state)=>{
            state.isMenuOpen = false;
        },

    },

});
export const {toggleMenu,closeMenu}=aapSlice.actions;
export default aapSlice.reducer;
