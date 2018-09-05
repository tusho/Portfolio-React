import React, { Component } from 'react'
import sortBy from 'sort-by'

const websiteData = [
    { websiteURL: 'https://github.com/tusho', image: 'alift', name: 'A-Lift' },
    { websiteURL: 'https://hackerfirm.com', image: 'hackerfirm', name: 'Hacker Firm' },
    { websiteURL: 'https://json.capital', image: 'json', name: 'JSON Capital' }
];

class MyWebsites extends Component {
  render() {
    return (
      <div className="work">
        <h2 class="work_header">My Websites</h2>
        {websiteData.map(website => (
          <section className="projects">
            <a href={website.websiteURL} target="_blank">
              <img src={require(`./img/${website.image}.jpg`)} className="project_image" />
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
