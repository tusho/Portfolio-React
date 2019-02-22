import React, { Component } from 'react'
import sortBy from 'sort-by'
import Projects from './Projects'

class Work extends Component {

    state = {
        isHovering: false
        }

        handleMouseHover = () => {
        this.setState(this.toggleHoverState);
        }

        toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
        }

  render() {
    const websiteData = [
        { websiteURL: 'https://integratednaturalsolutions.com', image: 'integratednaturalsolutions', name: 'INS Global', type: 'website' },
        { websiteURL: 'https://json.capital', image: 'json', name: 'JSON Capital', type: 'website' },
        { websiteURL: 'https://inatureskincare.com', image: 'inatureskincare', name: 'iNature Skincare', type: 'website' },
        { websiteURL: 'https://lucaspapawdistributor.com', image: 'lucaspapaw', name: 'Lucas Papaw', type: 'website' },
        { websiteURL: 'https://ad-roller.com', image: 'adrollerau', name: 'Ad-Roller', type: 'website' }
    ];

    const appData = [
        { websiteURL: 'https://tusho.github.io/Memory-Game/index.html', image: 'memorygame', name: 'Memory Game', type: 'app' },
        { websiteURL: 'https://tusho.github.io/Arcade-Game/index.html', image: 'arcadegame', name: 'Frogger Arcade Game', type: 'app' }
    ]

    websiteData.sort(sortBy('name'))

    return (
        <div className="work">
            <h2 className="work_header">My Websites<hr className="project_divider"/></h2>
            {websiteData.map(website => (
                this.state.isHovering == false ? <Projects website={website} mouseHover={this.handleMouseHover}/> : <div><p>Test</p></div>
            ))}
            <h2 className="work_header">My Apps<hr className="project_divider"/></h2>
            {appData.map(website => (
                this.state.isHovering == false ? <Projects website={website} mouseHover={this.handleMouseHover}/> : <div><p>Test</p></div>
            ))}
        </div>
    )
  }
}

export default Work;
