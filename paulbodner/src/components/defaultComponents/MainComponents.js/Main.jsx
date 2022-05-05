import React from "react";
import { useEffect, useState } from "react";

import Contact from "./Contact";
import KnowledgeList from "./KnowledgeList";
import ProjectsList from "./ProjectsList";

import { organizeKnowledge, getFrameworks, getLanguages } from "../../../helpers/getknowledge"
import { getProjects, getTechnologies, getDeploys, organizeProjects } from "../../../helpers/getProjects"

import './main.scss'

export default function Main(props) {
  const { mode } = props;

  const [knowledge , setKnowledge] = useState([]);
  const [finishedProjects, setFinishedProjects] = useState([]);

  useEffect(() => {
    async function fetchknowledge() {
      const languages = await getLanguages();
      const frameworks = await getFrameworks(languages);
      setKnowledge(organizeKnowledge(languages, frameworks));
    }

    async function fetchProjects () {
      const projects = await getProjects();
      const technologies = await getTechnologies(projects);
      const deploys = await getDeploys(projects);
      setFinishedProjects(organizeProjects(projects, technologies, deploys))
    }

    fetchknowledge();
    fetchProjects();
  }, []);
  

  return (
    <section className='main'>
      { mode === "CONTACT" && < Contact /> }
      { mode === "KNOWLEDGE" && < KnowledgeList knowledge={ knowledge } />}
      { mode === "PROJECTS" && < ProjectsList projects={ finishedProjects } /> }
    </section>
  );
}