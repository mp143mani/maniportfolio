import React from "react";

function Skill({skill}) {
  return (
    <div>
      <h5>{skill.title}</h5>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width:"55" }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        >
         {skill.percentage}
        </div>
      </div>
    </div>
  );
}

export default Skill;
