import React, { Component } from 'react';
import MyWebsites from './MyWebsites';
import './App.css';
import logo from './img/logo.png'
import heroSmall from './img/desksmall.jpg'
import heroLarge from './img/desklarge.jpg'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="header_inner">
            <img src={logo} className="header_logo" alt="logo" />
            <section className="header_title">
              <h1 className="title_name">Armin Kuhestani</h1>
              <h2 className="title_pitch">Carefully Crafted Code</h2>
            </section>
          </div>
        </div>
        <hr />
        <div className="hero">
          <img src={heroSmall} className="hero_image_small" alt="desk-image-small" />
          <img src={heroLarge} className="hero_image_large" alt="desk-image-large" />
        </div>
        <MyWebsites />
      </div>

    );
  }
}

export default App;
