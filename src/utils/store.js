
import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import chatSlice from './ChatSlice';


const store= configureStore({
reducer:{
    aap : appSlice ,
    search: searchSlice,
    chat : chatSlice,  
},
});



export default store;
