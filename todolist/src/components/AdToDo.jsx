import { useState } from "react";

const AdToDo = ({ onAddToDo }) => {
  const [newToDo, setNewToDo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newToDo.trim() === "") return;

    onAddToDo({ name: newToDo });
    setNewToDo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Yeni görev ekle"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button type="submit">Ekle</button>
    </form>
  );
};

export default AdToDo;
