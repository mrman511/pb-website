import React from "react";

import KnowledgeItem from "./KnowledgeItem";

import "./styles/knowledgeList.scss"
import "./styles/knowledgeMedia.scss"

export default function KnowledgeList({ knowledge }) {

  const parsedKnowledge = knowledge.map((language) => < KnowledgeItem
    key={ language.id }
    id={ language.id }
    name={ language.name } 
    url={ language.icon_url } 
    frameworks={ language.frameworks }
    />)

  return (
    <article className="knowledge">
      { parsedKnowledge }
    </article>
  );
}