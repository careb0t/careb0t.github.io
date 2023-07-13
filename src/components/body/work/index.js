import React from "react";
import "./work.css";
import Separator from "../../common/separator";
import {WorkData} from "../../data/work";
import WorkCard from "./work-card";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
      <div className="resume-button-container">
        <a href={process.env.PUBLIC_URL + 'resume.pdf'} download={process.env.PUBLIC_URL + '/img/logo.png'} className="resume-button">Download Resume</a>
      </div>
    </div>
  );  
}

export default Work;