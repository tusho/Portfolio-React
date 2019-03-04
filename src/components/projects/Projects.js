import React, { Component } from 'react'

class Projects extends Component {

  render() {
    const {website} = this.props
    const websiteStack = website.stack.sort().map(stack => 
      <p className="project_stack" key={stack}>{stack}</p>
    )

    return (
      <section className="projects" style={this.props.projectStyle} key={website.name} onMouseEnter={this.props.mouseHover} onMouseLeave={this.props.mouseHover}>
        <div target="_blank" className="project_container" onClick={()=> window.open(website.websiteURL, "_blank")}>
          <img src={require(`../../img/${website.image}.jpg`)} className="project_image" alt={website.name}/>
          <div className="project_overlay">
            <div className="project_text">
              {websiteStack}
            </div>
          </div>
        </div>
        <h3 className="project_name">{website.name}</h3>
        <a className="project_links" href={website.websiteURL} target="_blank">{website.websiteURL}</a>
      </section>
    )
  }
}

export default Projects;
