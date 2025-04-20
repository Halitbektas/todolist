const Filter = ({ onFilter }) => {
  const handleSelectChange = (e) => {
    const selectedCategory = e.target.value;
    onFilter(selectedCategory);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <label>FİLTRELE: </label>
      <select onChange={handleSelectChange}>
        <option value="hepsi">Hepsi</option>
        <option value="ev">Ev</option>
        <option value="okul">Okul</option>
        <option value="iş">İş</option>
      </select>
    </div>
  );
};

export default Filter;
