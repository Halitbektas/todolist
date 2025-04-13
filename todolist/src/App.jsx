import React, { useState, useEffect } from 'react';
import './App.css';
import ToDos from './components/ToDos';
import AdToDo from './components/AdToDo';

function App() {
  // localStorage'dan veri yükle
  const [toDoList, setToDoList] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  // Liste değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(toDoList));
  }, [toDoList]);

  // Yeni görev ekle
  const handleAddToDo = (newToDo) => {
    const newItem = { name: newToDo.name, completed: false };
    setToDoList([...toDoList, newItem]);
  };

  // Görev sil
  const handleDeleteToDo = (index) => {
    const updatedList = [...toDoList];
    updatedList.splice(index, 1);
    setToDoList(updatedList);
  };

  // Görevi tamamlandı olarak işaretle
  const handleCompleteToDo = (index) => {
    const updatedList = [...toDoList];
    updatedList[index].completed = !updatedList[index].completed;
    setToDoList(updatedList);
  };

  // Görev düzenle
  const handleEditToDo = (index, newName) => {
    const updatedList = [...toDoList];
    updatedList[index].name = newName;
    setToDoList(updatedList);
  };

  return (
    <div>
      <AdToDo onAddToDo={handleAddToDo} />
      <p>------------------</p>
      <ToDos
        toDoarray={toDoList}
        onDelete={handleDeleteToDo}
        onComplete={handleCompleteToDo}
        onEdit={handleEditToDo}
      />
    </div>
  );
}

export default App;
