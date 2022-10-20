import React from "react";
import Input from "../components/Input.jsx";

export class App extends React.Component  {
  state = {
  contacts: [],
  name: ''
}
  
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
        color: '#010101'
      }}
      >
      <Input value = {name} />
    </div>
  )}
};
