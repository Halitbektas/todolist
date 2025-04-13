

const AddNote = ({noteArray,noteAdder,handleNoteChange,handleSave,reSave}) => {


    
    return (
        <div style={{ padding: "20px" }}>
          <button onClick={noteAdder}>Not Ekle</button>
    
          {noteArray.map((note, index) => (
            <div key={index} style={{ marginTop: "20px" }}>
              {!note.isSaved ? (
                <div>
                  <textarea
                    placeholder="Notunuzu yazın..."
                    value={note.text}
                    onChange={(e) => handleNoteChange(index, e.target.value)}
                    rows="4"
                    cols="50"
                  />
                  <br />
                  <button onClick={() => handleSave(index)}>Kaydet</button>
                </div>
              ) : (
                <div
                  style={{
                    border: "1px solid #aaa",
                    padding: "10px",
                    background: "#f5f5f5",
                  }}
                  onClick={() => reSave(index)}
                >
                  <p>{note.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    };


export default AddNote;