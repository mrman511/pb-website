import React from "react";
import ProjectItem from "./ProjectItem";

import './styles/projectList.scss';
import './styles/projectMedia.scss'

import { useVisualMode } from '../../../hooks/useVisualMode'

export default function ProjectsList({ projects }) {
  const parsedProjects = projects.map(project => < ProjectItem
      key={ project.id }
      title={ project.title }
      image={ project.image_file_name }
      link={ project.link }
      github={ project.github }
      description={ project.description }
      technologies={ project.technologies }
      deployment={ project.deploys }
      primaryMedia={ project.primaryMedia }
    />
  );

  return (
    <section className="project-list">
      { parsedProjects }
    </section>
  );
}