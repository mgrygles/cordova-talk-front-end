import React, { Component } from 'react';
import Balance from './balance';
import Store from './store';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to Super Cell Carrier!</h1>
      <Balance />
      <Store />

      </div>
    );
  }
}

export default App;
