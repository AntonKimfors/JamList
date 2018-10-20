import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Jam<span className="highlight">List</span></h1>
        <div className="App">
          <div className="App-playlist">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
