import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>Demo
              </div>
            </a>
            )}
            {project.github&& (
              <a className="project-link" href={project.github}>
                <div className="link-button">
                <i class="devicon-github-original colored"></i>Github
              </div>
            </a>
            )}
        </div>
        <p>{project.about}
              {project.title === "Neocities" && (
                <div className="project-about-link">
                  <a href="https://https://nyariathotep.neocities.org/" target="_blank">nyariathotep.neocities.org</a><br/>
                  <a href="https://thecoolzone777.neocities.org/" target="_blank">thecoolzone777.neocities.org</a><br/>
                  <a href="https://https://kemonomimi.neocities.org/" target="_blank">kemonomimi.neocities.org</a><br/>
                  <a href="https://doomfufu.neocities.org/" target="_blank">doomfufu.neocities.org</a>
                </div>
              )}
        </p>
        <div className="project-tags">
          {project.tags.map((tag)=> {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;