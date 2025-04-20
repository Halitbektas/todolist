import "./ToDos.css";

const ToDos = ({ toDoarray, onDelete, onComplete, onCategoryChange }) => {
  return (
    <div>
      {toDoarray.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "20px",
            border: "1px solid black",
            margin: "20px 0",
            borderRadius: "8px",
          }}
        >
          <p><strong>İş:</strong> {item.name}</p>

          {item.completed && (
            <p style={{ color: "green" }}>✅ Tamamlandı</p>
          )}

          {item.category && (
            <p style={{ fontStyle: "italic", marginTop: "5px" }}>
              Kategori: {item.category}
            </p>
          )}

          <div style={{ marginTop: "10px" }}>
            <button onClick={() => onDelete(index)}>Sil</button>
            <button onClick={() => onComplete(index)} style={{ marginLeft: "10px" }}>
              Tamamla
            </button>

            <select
              value={item.category || ""}
              onChange={(e) => onCategoryChange(index, e.target.value)}
              style={{ marginLeft: "10px" }}
            >
              <option value="">Kategori Seç</option>
              <option value="ev">Ev</option>
              <option value="okul">Okul</option>
              <option value="iş">İş</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDos;
