import React from 'react';
import Input from '../components/Input.jsx';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const name = this.state;
    const contacts = this.state;

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
        <Input
          value={name}
          onChange={this.handleInput}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
