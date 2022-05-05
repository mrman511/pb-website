import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

export default function ProjectItemInfo(props) {
  const parsedTech = props.technologies.map(tech => 
    <a className="link" href={ tech.link } title={ tech.name }>
      <img src={ props.images[tech.image_file_name] }/>
    </a>);

  const parsedDeploys = props.deployment.map(deploy => {
    if (deploy.type === "Front-end") {
      return (
        <a className="link" href={ deploy.link } title={ deploy.name }>
          <h6>Front End</h6>
          <img src={ props.images[deploy.image_file_name] }/>
        </a>
      )
    } else {
      return (
        <a className="link" href={ deploy.link } title={ deploy.name }>
          <h6>Back End</h6>
          <img src={ props.images[deploy.image_file_name] }/>
        </a>
      )
    }
  });


  return (
    <div className="project-info" >
      <div className="info info-main">
        < FontAwesomeIcon 
          className="icon" 
          icon={ faAngleDoubleLeft }
          onClick={() => props.transition("DEFAULT") }
          />
        <p>{ props.description }</p>
      </div>
      <div className="info tech">
        <h5>Technologies Used:</h5>
        <div className="links">
          { parsedTech }
        </div>
      </div>
      <div className="info deploy">
        <h5>Deployment:</h5>
        <div className="links">
          { parsedDeploys }
        </div>
      </div>

    </div>
  );
}