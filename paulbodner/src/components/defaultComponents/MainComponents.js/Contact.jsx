import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Form from './contactComponents/Form';
import Status from './contactComponents/Status';

import './styles/contact.scss'

import useVisualMode from '../../../hooks/useVisualMode';

export default function Contact() {
  const { mode, transition } = useVisualMode("STATUS")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE, 
      form.current, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <article>
      { mode === "FORM" && < Form sendEmail={ sendEmail } form={ form } /> }
      { mode === "STATUS" && < Status /> }
    </article>
  );
};