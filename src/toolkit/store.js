import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './TodoSlice';
const store = configureStore({
 reducer: {// allows you create n number of sliders
     toDo: toDoReducer,
 }
});

export default store;


