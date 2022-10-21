import React from 'react';
import Form from './Form';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1 className="titlePhonebook">Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
