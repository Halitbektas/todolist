// src/hooks/useNotes.js
import { useState } from "react";

const useNotes = () => {
  const [noteList, setNoteList] = useState([]);

  const noteAdder = () => {
    setNoteList([...noteList, { text: "", isSaved: false }]);
  };

  const handleNoteChange = (index, value) => {
    const updatedNotes = [...noteList];
    updatedNotes[index].text = value;
    setNoteList(updatedNotes);
  };

  const handleSave = (index) => {
    const updatedNotes = [...noteList];
    updatedNotes[index].isSaved = true;
    setNoteList(updatedNotes);
  };

  const reSave = (index) => {
    const updatedNotes = [...noteList];
    updatedNotes[index].isSaved = false;
    setNoteList(updatedNotes);
  };

  return {
    noteList,
    noteAdder,
    handleNoteChange,
    handleSave,
    reSave,
  };
};

export default useNotes;
