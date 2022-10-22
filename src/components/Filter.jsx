import css from '../components/Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label htmlFor="" className={css.label__filter}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={css.input__filter}
    />
  </label>
);

export default Filter;
