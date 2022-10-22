import React from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
// import { nanoid } from 'nanoid';

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
    console.log(contact);

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

    // this.setState(prevState => ({
    //   contacts: prevState.contacts.map(contact =>
    //     contact.id !== id ? [contact, ...prevState.contacts] : alert(`fck`)

    //   ),
    // }));
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
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

  render() {
    const { contacts, filter } = this.state;

    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1 className="titlePhonebook">Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter filter={filter} changeFilter={this.changeFilter} />
        <h2 className="contactList">Contacts</h2>
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}
