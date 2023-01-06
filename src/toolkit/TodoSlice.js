import { createSlice } from '@reduxjs/toolkit'
export const toDoSlider = createSlice({
 name: 'toDo',
 initialState: {
   todoList:   [
     { id: 1, content: "Task1" ,isDone:"NOT"},
     { id: 2, content: "Task2" ,isDone:"NOT"},
     { id: 3, content: "Task3" ,isDone:"DONE"},
     { id: 4, content: "Task4" ,isDone:"DONE"}
   ]
 },
 reducers: {
   addToDo: (state, action) => {
     let newTodoList = {
       id: Math.random(),
       content: action.payload.newContent,
       isDone:action.payload.newisDone
     }
     state.todoList.push(newTodoList);
   },
   deleteToDo: (state, action) => {
     let { todoList } = state;
     state.todoList = todoList.filter((item) => 
         item.id !==action.payload.id);
   },
  searchToDo: (state, action) => {
    
    return{...state, todoList:state.todoList.filter(el=> el.isDone === action.payload)}
    
  },
   
   editTodo: (state, action) => {
     let { todoList } = state;
     state.todoList = todoList.map((item) => 
       item.id === action.payload.id ? action.payload : item);
   }
  },
})
// Action creators are generated for each case reducer function
export const { addToDo, deleteToDo, editTodo,searchToDo } = toDoSlider.actions
export default toDoSlider.reducer;