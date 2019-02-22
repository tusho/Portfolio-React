import React, { Component } from 'react'


class Projects extends Component {

  render() {
    const {website} = this.props

    return (
      <section className="projects" key={website.name} onMouseEnter={this.props.mouseHover} onMouseLeave={this.props.mouseHover}>
        <a href={website.websiteURL} target="_blank">
          <img src={require(`../../img/${website.image}.jpg`)} className="project_image"/>
        </a>
        <h3 className="project_name">{website.name}</h3>
        <a className="project_links" href={website.websiteURL} target="_blank">{website.websiteURL}</a>
      </section>
    )
  }
}

export default Projects;
