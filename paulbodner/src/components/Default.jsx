import React from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group'

import './default.scss';
import './defaultMedia.scss';
import './status.scss';

import Header from './defaultComponents/Header';
import DropMenu from './defaultComponents/DropMenu';
import Main from './defaultComponents/MainComponents.js/Main';
import Footer from './defaultComponents/Footer';

import useVisualMode from '../hooks/useVisualMode';

export default function Default() {
  const [showMenu, setShowMenu] = useState(false);
  const { mode, transition } = useVisualMode('NONE', toggleMenu);

  function toggleMenu() {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }

  return (
    <main>
      <Header toggleMenu={ toggleMenu } showMenu={ showMenu } />
      <CSSTransition
      in={ showMenu }
      classNames='show-drop-menu'
      timeout={ 500 }>
        <DropMenu transition={ transition } />
      </CSSTransition>
      < Main mode={ mode } />
      < Footer />
    </main>
  );
}