import "./App.css";
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";
import AddNote from "./components/AddNote";
import useToDos from "./hooks/useToDos";
import useNotes from "./hooks/useNotes";
import { useState } from "react";

function App() {
  const { toDoList, handleAddToDo, handleDeleteButton } = useToDos();
  const { noteList, noteAdder, handleNoteChange, handleSave, reSave } =
    useNotes();

  const [toDoButton, setToDoButton] = useState(false);
  const [noteButton, setNoteButton] = useState(false);

  const showToDoMenu = () => {
    setToDoButton(true);
    setNoteButton(false);
  };

  const showNoteMenu = () => {
    setNoteButton(true);
    setToDoButton(false);
  };

  return (
    <div>
      <div>
        <button onClick={showToDoMenu}>ToDo</button>
        <button onClick={showNoteMenu}>Note</button>
      </div>

      {toDoButton && (
        <div>
          <div>
            <h2>{noteButton ? "Notlarım" : "ToDo Listem"}</h2>
          </div>
          <AddToDo onAddToDo={handleAddToDo} />
          <ToDos
            toDoarray={toDoList}
            clickedDeleteButton={handleDeleteButton}
          />
        </div>
      )}

      {noteButton && (
        <div>
          <div>
            <h2>{noteButton ? "Notlarım" : "ToDo Listem"}</h2>
          </div>
          <AddNote
            noteArray={noteList}
            noteAdder={noteAdder}
            handleNoteChange={handleNoteChange}
            handleSave={handleSave}
            reSave={reSave}
          />
        </div>
      )}
    </div>
  );
}

export default App;
