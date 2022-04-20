import React from "react";

import Contact from "./Contact";

import './main.scss'

export default function Main(props) {
  const { mode } = props;

  return (
    <section className='main'>
      { mode === "CONTACT" && < Contact /> }
    </section>
  );
}