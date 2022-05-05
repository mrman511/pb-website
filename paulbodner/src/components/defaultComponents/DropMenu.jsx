import React from 'react';

export default function DropMenu(props) {
  const { transition } = props;

  return (
    <div className='drop-menu'>
      <ul>
        <li>About Me</li>
        <li onClick={ () => transition("KNOWLEDGE") } >Skills and Knowledge</li>
        <li onClick={ () => transition("PROJECTS") } >Finished Projects</li>
        <li onClick={ () => transition("CONTACT") } >Contact</li>
      </ul>
    </div>
  );
}