const Filter = ({ filter, changeFilter }) => (
  <label htmlFor="">
    Find contacts by name
    <input type="text" value={filter} onChange={changeFilter} />
  </label>
);

export default Filter;
