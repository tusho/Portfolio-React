import React, { Component } from 'react'

class Projects extends Component {

  render() {
    const {website} = this.props
    const websiteStack = website.stack.sort().map(stack => 
      <p class="project_stack">{stack}</p>
    )

    return (
      <section className="projects" key={website.name} onMouseEnter={this.props.mouseHover} onMouseLeave={this.props.mouseHover}>
        <div target="_blank" class="project_container" onClick={()=> window.open(website.websiteURL, "_blank")}>
          <img src={require(`../../img/${website.image}.jpg`)} className="project_image"/>
          <div class="project_overlay">
            <div class="project_text">
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
