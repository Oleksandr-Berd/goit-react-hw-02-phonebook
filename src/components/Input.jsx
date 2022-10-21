import React from 'react';
import { nanoid } from 'nanoid';

const Input = ({ onChange, onSubmit, name, number }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="">
      Name
      <input
        onChange={onChange}
        type="text"
        name="name"
        value={name}
        // value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
    <label htmlFor="">
      Phone
      <input
        onChange={onChange}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>

    <button type="submit">Add contact</button>
  </form>
);
export default Input;
