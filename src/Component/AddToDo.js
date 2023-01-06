import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../toolkit/TodoSlice';
const AddTodo = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState("");
  const [ state, setState ] = useState({
     content: '',
     contentError: null
  });

  const handleChange = (e) =>{
    setState({...state, 
          [e.target.name]: e.target.value,
          [`${e.target.name}Error`]: null });
  }
  const add = () =>{
    if(content === ''){
      setState({...state, 
         contentError: 'You must write something!'});
       return;
    }
    dispatch(addToDo({newContent: content,newisDone:select}));
  
    setState({...state, content: '',isDone:''});
  }
  const { content, contentError } = state;
  console.log(select);
 
   return <div className='form'>
      <h2>To do list</h2>
      <input type='text' value={content} 
        name='content' 
        onChange={handleChange}>
      </input>
      <select name='isDone' onChange={handleChange} onClick={(e) => setSelect(e.target.value)}>
        <option>NOT
        </option>
        <option>DONE
        </option>
      </select>
      <button type='button' className='button' 
        onClick={add}>Add
      </button>
      {contentError ? 
         <div className='error'>{contentError}</div>: null}
    </div>;
};
export default AddTodo;