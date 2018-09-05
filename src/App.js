import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_inner">
          <img className="header_logo" src={ require("./img/logo.png") }/>
        </div>
      </div>
    );
  }
}

export default App;
