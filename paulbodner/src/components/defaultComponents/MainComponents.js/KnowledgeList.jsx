import React from "react";

import KnowledgeItem from "./KnowledgeItem";


export default function KnowledgeList({ knowledge }) {

  const parsedKnowledge = knowledge.map((language) => < KnowledgeItem
    key={ language.id }
    id={ language.id }
    name={ language.name } 
    url={ language.icon_url } 
    frameworks={ language.frameworks }
    />)

  return (
    <article>
      { parsedKnowledge }
    </article>
  );
}