import React, { Component } from 'react'
import sortBy from 'sort-by'





class MyWebsites extends Component {

  render() {
    const websiteData = [
        { websiteURL: 'https://integratednaturalsolutions.com', image: 'integratednaturalsolutions', name: 'INS Global' },
        { websiteURL: 'https://json.capital', image: 'json', name: 'JSON Capital' },
        { websiteURL: 'https://inatureskincare.com', image: 'inatureskincare', name: 'iNature Skincare' },
        { websiteURL: 'https://lucaspapawdistributor.com', image: 'lucaspapaw', name: 'Lucas Papaw' },
        { websiteURL: 'https://ad-roller.com', image: 'adrollerau', name: 'Ad-Roller' }

    ];

    websiteData.sort(sortBy('name'))

    return (
      <div className="work">
        <h2 className="work_header">My Websites<hr class="project_divider"/></h2>
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
