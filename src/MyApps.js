import React, { Component } from 'react'
import sortBy from 'sort-by'





class MyWebsites extends Component {

  render() {
    const websiteData = [
        { websiteURL: 'https://tusho.github.io/Memory-Game/index.html', image: 'memorygame', name: 'Memory Game' },
        { websiteURL: 'https://tusho.github.io/Arcade-Game/index.html', image: 'arcadegame', name: 'Frogger Arcade Game' }
    ];

    websiteData.sort(sortBy('name'))

    return (
      <div className="work">
        <h2 className="work_header">My Apps<hr class="project_divider"/></h2>
        {websiteData.map(website => (
          <section className="projects" key={website.name}>
            <a href={website.websiteURL} target="_blank">
              <img src={require(`./img/${website.image}.jpg`)} className="project_image"/>
            </a>
            <h3 className="project_name">{website.name}</h3>
            <a className="project_links" href={website.websiteURL} target="_blank">{website.websiteURL}</a>
          </section>
        ))}
      </div>
    )
  }
}

export default MyWebsites;
