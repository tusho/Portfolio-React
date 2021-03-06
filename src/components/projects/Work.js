import React, { Component } from 'react'
import Projects from './Projects'

class Work extends Component {

    state = {
        isHovering: false,
        websiteNumber: ''
    }

    handleMouseHover = () => {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: false,
            // isHovering: !state.isHovering,
        };
    }

    componentDidUpdate() {
        this.filterWebsite();
     }

    filterWebsite() {
        let websiteNumber = this.props.projectData.filter(project => project.type === 'website').length
        let appNumber = this.props.projectData.filter(project => project.type === 'app').length
        console.log(websiteNumber + ' ' + appNumber)
    }

  render() {
      
    const projectStyle = {
        'margin-left': '4em'
    };

    return (
        <div className="work">
            <div className="work_container websites">
                <h2 className="work_header">My Websites<hr className="project_divider"/></h2>
                {this.props.projectData.filter(project => project.type === 'website').map(website => (
                    this.state.isHovering === false ? <Projects style={projectStyle} website={website} key={website.name} mouseHover={this.handleMouseHover}/> : <div><p>{website.stack}</p></div>
                ))}
            </div>
            <div className="work_container apps">
            <h2 className="work_header">My Apps<hr className="project_divider"/></h2>
                {this.props.projectData.filter(project => project.type === 'app').map(website => (
                    this.state.isHovering === false ? <Projects website={website} style={projectStyle} key={website.name} mouseHover={this.handleMouseHover}/> : <div><p>{website.stack}</p></div>
                ))}
            </div>
        </div>
    )
  }
}

export default Work;
