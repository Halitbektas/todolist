import { useState } from 'react';
import './App.css';
import ToDos from './components/ToDos';
import AdToDo from './components/AdToDo';
import Filter from './components/Filter';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [filterCategory, setFilterCategory] = useState("hepsi");

  const handleAddToDo = (newToDo) => {
    setToDoList([
      ...toDoList,
      { ...newToDo, category: "", completed: false }
    ]);
  };

  const handleDelete = (index) => {
    const updatedList = [...toDoList];
    updatedList.splice(index, 1);
    setToDoList(updatedList);
  };

  const handleComplete = (index) => {
    const updatedList = [...toDoList];
    updatedList[index].completed = true;
    setToDoList(updatedList);
  };

  const handleCategoryChange = (index, category) => {
    const updatedList = [...toDoList];
    updatedList[index].category = category;
    setToDoList(updatedList);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  const filteredToDoList = filterCategory === "hepsi"
    ? toDoList
    : toDoList.filter((item) => item.category === filterCategory);

  return (
    <div>
      <AdToDo onAddToDo={handleAddToDo} />
      <Filter onFilter={handleFilter} />
      <hr />
      <ToDos
        toDoarray={filteredToDoList}
        onDelete={handleDelete}
        onComplete={handleComplete}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;
