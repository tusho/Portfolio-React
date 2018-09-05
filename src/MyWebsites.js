import React, { Component } from 'react'
import sortBy from 'sort-by'
import alift from './img/alift.jpg'

class MyWebsites extends Component {
  render() {
    return (
      <div className="work">
        <h2 class="work_header">Featured Work</h2>
        <section className="projects">
          <img src={alift} className="project_image" alt="alift" />
          <h3 className="project_name">A-Lift</h3>
          <a className="project_links" href="https://github.com/tusho" target="_blank">https://github.com/tusho</a>
        </section>
      </div>
    )
  }
}

export default MyWebsites;
