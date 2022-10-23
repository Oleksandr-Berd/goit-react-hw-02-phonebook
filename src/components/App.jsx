import React from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };

    const contactArray = Object.values(this.state.contacts);

    // this.setState(prevState => ({
    //   contacts: prevState.contacts.map(el => {
    //     el.name !== contact.name ?  contacts : [contact, ...prevState.contacts] : alert(`fck`)
    //   }),
    // }));

    // this.setState(({ contacts }) => ({
    //   contacts: contacts.map(el => {
    //     if (el.id !== contact.id) {
    //       return { contact, ...contacts };
    //     } else {
    //       alert(`FCK`);
    //     }
    //   }),
    // }));

    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`contact ${name} already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));

    // this.setState(({ contacts }) => ({
    //   contacts: contactArray.map(el => {
    //     if (el.name === contact.name) {
    //       return alert(`${contact.name} is already in contacts`);
    //     } else {
    //       return [contact, ...contacts];
    //     }
    //   }),
    // }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // toggleCompleted = contactId => {
  //   console.log(contactId);

  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.map(contact => {
  //       if (contact.id === contactId) {
  //         return {
  //           ...contact,
  //           name: !contact.name,
  //           number: !contact.number,
  //         };
  //       }
  //       return contact;
  //     }),
  //   }));
  // };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <h1 className={css.titlePhonebook}>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h2 className={css.contactList}>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
