import React from "react";

import "./styles/aboutMe.scss";
import "./styles/aboutMeMedia.scss";

export default function AboutMe() {

  return (
    <article className="about">
      <div className="about-me">
        <p>
          Through my previous career as an electrician I got the opportunity to get familiar with Programmable
          Logic Controllers (PLC). These PLC's gave me an introduction to programming which planted the seeds for what
          would later become a passion. Through programming I have discovered a yearning to grow my knowledge
          and experience, as well as a way to express my creativity in a way I had not perviously experienced. 
        </p>
        <p>
          As a gradutate of the Lighthouse Labs Web Developement bootcamp I have the skills to create full stack
          applications, as well as read and understand current code bases to implement fully functional changes.
          Lighthouse labs has also given me the knowledge and the confidence to learn and understand unfamiliar
          frameworks and languages in a timely manner.
        </p>
      </div>
    </article>
  );
}