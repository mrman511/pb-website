import React from "react";
import importImages from '../../../helpers/importImages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCircleI } from '@fortawesome/fontawesome-free-brands';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import useVisualMode from '../../../hooks/useVisualMode'

import ProjectItemInfo from "./ProjectItemInfo";

export default function ProjectItem(props) {
  const images = importImages(require.context('../../../images', false, /\.(png|jpe?g|svg)$/))

  const { mode, transition } = useVisualMode('DEFAULT');

  const {
     title, 
     link, 
     image, 
     github, 
     description, 
     technologies, 
     deployment, 
     primaryMedia 
    } = props;

  const background = {
    background: 'url('+ images[image] +')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }


  return (
    <div className='project'>
      <div className='project-header'>
        <a href={ link } target="_blank" title="Deployed Site">
          <h2>{ title }</h2>
        </a>
      </div>
      { mode === "DEFAULT" && <div className="project-body" >
        <div className="project-info">
          <a href={ github } target="_blank" rel="noreferrer" title="View Github Code">
            <FontAwesomeIcon icon={ faGithub } className='icon' />
          </a>
          <a title="Project Info" onClick={ () => { transition("INFO") } }>
            <FontAwesomeIcon icon={ faCircleInfo } className='icon'/>
          </a>
        </div>
        <img src= { images[image] } /> 
      </div>}
      { mode === "INFO" && < ProjectItemInfo 
      deployment={ deployment } 
      technologies={ technologies } 
      transition={ transition } 
      description={ description }
      images={ images } /> }
    </div>
  );
}