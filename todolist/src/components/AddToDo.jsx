import { useState } from 'react';
import './AddToDo.css';

const AddToDo =({onAddToDo})=>{

    const [inputValue, setInputValue] = useState('');

  const handleAddToDo =()=>{
    if (inputValue.trim() === '') {
      return;
    };
    const newToDo = {name:inputValue};
    onAddToDo(newToDo)
    setInputValue('');
  };
    return(
        <div >
            <input
        type="text"
        placeholder="Yeni görev ekle..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
       <button onClick={handleAddToDo}>Ekle</button>
        </div>
    );
};

export default AddToDo;