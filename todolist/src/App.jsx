import { useState } from 'react'
import './App.css'
import ToDos from './components/ToDos'
import AdToDo from './components/AdToDo';

function App() {
  const [toDoList,setToDoList]=useState([]);

  const handleAddToDo = (newToDo) =>{
    setToDoList([...toDoList,newToDo])
    console.log(toDoList);
  }
  

  return (
    <div>
      <AdToDo onAddToDo={handleAddToDo}></AdToDo>
      <p>------------------</p>
      <ToDos toDoarray={toDoList}></ToDos>
    </div>
  );
   
  
};

export default App
