function Filters({ filters, setFilters }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={{ marginRight: "10px" }}>Sort by:</label>
      <select
        value={filters.sortBy}
        onChange={e =>
          setFilters({ ...filters, sortBy: e.target.value })
        }
      >
        <option value="distance">Distance</option>
      </select>
    </div>
  );
}

export default Filters;
