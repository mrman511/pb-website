import React from "react";
import { useEffect, useState } from "react";

import Contact from "./Contact";
import KnowledgeList from "./KnowledgeList";

import { organizeKnowledge, getFrameworks, getLanguages } from "../../../helpers/getknowledge"

import './main.scss'

export default function Main(props) {
  const { mode } = props;

  const [knowledge , setKnowledge] = useState({})

  useEffect(() => {
    async function fetchData() {
      const languages = await getLanguages();
      const frameworks = await getFrameworks(languages);
      setKnowledge(organizeKnowledge(languages, frameworks));
    }
    fetchData();
  }, []);
  

  return (
    <section className='main'>
      { mode === "CONTACT" && < Contact /> }
      { mode === "KNOWLEDGE" && < KnowledgeList knowledge={ knowledge } />}
    </section>
  );
}