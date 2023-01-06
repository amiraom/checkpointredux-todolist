import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {searchToDo} from '../toolkit/TodoSlice'
const SearchBar = () => {

    const [search,setSearch] = useState();
    const dispatch = useDispatch() 
  return (
    <div>
        <input type='text' onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>dispatch(searchToDo(search))}> search</button>
    </div>
  )
}

export default SearchBar