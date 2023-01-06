
import './App.css';
import AddTodo from './Component/AddToDo';
import ListTodo from './Component/ListTodo';
import SearchBar from './Component/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
  <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
