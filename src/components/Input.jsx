import React from 'react';

const Input = ({ name, onChange }) => (
  <form>
    <input
      type="text"
      name={name}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <button type="submit" onChange={onChange}>
      Add contact
    </button>
  </form>
);
export default Input;
