import React, { Component } from 'react'
import MyWebsites from '../projects/MyWebsites'
import MyApps from '../projects/MyApps'
import './App.css'
import logo from '../../img/logo.png'
import heroSmall from '../../img/desksmall.jpg'
import heroLarge from '../../img/desklarge.jpg'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="header_inner">
            <img src={logo} className="header_logo rotateIn" alt="logo" />
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
        <MyApps />
        <div className="footer">
          <a href="https://www.linkedin.com/in/kuhestani" target="_blank" className="footer-link">
            <h3>Linkedin</h3>
          </a>
          <a href="https://www.github.com/tusho" target="_blank" className="footer-link">
            <h3>Github</h3>
          </a>
          <a href="mailto:armin.kuhestani@gmail.com" target="_blank" className="footer-link">
            <h3>Contact</h3>
          </a>
          <a href="#top" className="footer-link">
            <h3>Back to Top</h3>
          </a>
        </div>
      </div>

    );
  }
}

export default App;
