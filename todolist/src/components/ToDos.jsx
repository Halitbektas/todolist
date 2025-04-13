import React, { useState } from "react";
import "./ToDos.css";

const ToDos = ({ toDoarray, onDelete, onComplete, onEdit }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  return (
    <div>
      {toDoarray.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "20px",
            border: "1px solid black",
            margin: "20px",
            backgroundColor: item.completed ? "#d3f9d8" : "white",
          }}
        >
          {editIndex === index ? (
            <>
              <input
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button
                onClick={() => {
                  onEdit(index, editedText); // Görevi güncelle
                  setEditIndex(null);       // Düzenleme modunu kapat
                }}
              >
                Kaydet
              </button>
            </>
          ) : (
            <>
              <p style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                İş: {item.name}
              </p>
              <div style={{ marginTop: "10px" }}>
                <button onClick={() => onDelete(index)}>Sil</button>
                <button onClick={() => onComplete(index)}>
                  {item.completed ? "Geri Al" : "Tamamla"}
                </button>
                <button
                  onClick={() => {
                    setEditIndex(index);
                    setEditedText(item.name);
                  }}
                >
                  Düzenle
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToDos;
