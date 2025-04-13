import { useState } from "react";
import "./ToDos.css";

const ToDos = ({toDoarray}) => {
    const [showButtons,setShowButtons]=useState(false);
    const [deleteButton,setDeleteButton]=useState(false);
    const handleSeeMore = () => {
        setShowButtons(true);
    }

    const handleDeleteButton = ()=>{
        setDeleteButton(true);
    }
  return (
    <div>
        
        {toDoarray.map((item,index) => (
            
          <div key={index} 
          onClick={handleSeeMore}
      style={{
        padding: '20px',
        border: '1px solid black',
        margin: '20px',
        cursor: 'pointer',
      }}>
            <p>iş: {item.name}</p>
            {deleteButton && (
        <div >
          silindi

        </div>
      )}
            {showButtons && (
        <div style={{ marginTop: '10px' }}>
          <button onClick={handleDeleteButton}>Sil</button>
          <button>Tamamla</button>

        </div>
      )}
          </div>
          
        ))}

    </div>
  );
};

export default ToDos;
