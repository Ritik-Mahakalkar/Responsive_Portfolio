import React from "react";
import "./Projects.css";
import {assets} from '../../assets/assets.js'
  

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        {assets.map((assets) => (
          <div className="project-card" key={assets.id}>
            <img src={assets.image} alt={assets.title} />
            <div className="project-content">
              <h3>{assets.title}</h3>
              <p>{assets.description}</p>
              <p><strong>Tech Used:</strong> {assets.technology}</p>
              <div className="project-links">
                <a href={assets.live} target="_blank" rel="noopener noreferrer" className="live-btn">Live Demo</a>
                <a href={assets.github} target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
