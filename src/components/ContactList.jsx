const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="contactList">
    {contacts.map(({ id, name, number }) => (
      <li className="contacts__item" key={id}>
        <p className="contacts__name">{name}</p>
        <p className="contacts__number">{number}</p>
        <button
          type="button"
          className="delete__btn"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
