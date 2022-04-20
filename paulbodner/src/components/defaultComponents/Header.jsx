import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin  } from '@fortawesome/fontawesome-free-brands';


export default function Header(props){
  const { toggleMenu, showMenu } = props;

  return (
    <header className='header'>
      <div className='menu-button' onClick={ () => toggleMenu() } >
        <CSSTransition
        in={ showMenu }
        classNames='toggle-drop-menu'
        timeout={ 700 }>
          <FontAwesomeIcon icon={ faAnglesDown } className='icon' />
        </CSSTransition>
      </div>
      <h1>Paul Bodner Development</h1>
      <div className="profile-links">
        <a href="https://github.com/mrman511" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={ faGithub } className='icon' />
        </a>
        <a href="https://www.linkedin.com/in/paul-bodner-a015a7a3/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='icon' />
        </a>
      </div>
    </header>
  );
}