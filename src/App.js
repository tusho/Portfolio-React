import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="header_inner">
            <img className="header_logo" src={ require("./img/logo.png") }/>
            <section className="header_title">
              <h1 className="title_name">Armin Kuhestani</h1>
              <h2 className="title_pitch">Carefully Crafted Code</h2>
            </section>
          </div>
        </div>
        <hr />
        <div className="hero">
          <img className="hero_image_small" src={ require("./img/desksmall.jpg") }/>
          <img className="hero_image_large" src={ require("./img/desklarge.jpg") }/>
        </div>
      </div>

    );
  }
}

export default App;
