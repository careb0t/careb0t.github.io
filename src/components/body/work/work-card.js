import React from "react";
import "./work-card.css";
function WorkCard ({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo}className="work-logo" alt="Company logo" />
      <div className="work-info">
        <label className="company-name"><b>{item.company}</b></label>
        <label className="company-position"><i>{item.designation}</i></label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;