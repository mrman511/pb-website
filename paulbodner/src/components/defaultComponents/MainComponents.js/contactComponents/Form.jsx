import React from "react";

export default function Form(props) {

  return (
    <form ref={ props.form } onSubmit={ props.sendEmail } className='email'>
        <div>
          <label>Name: </label>
          <input type="text" name="user_name" className='input-area' />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="user_email" className='input-area' />
        </div>
        <div className='message'>
          <textarea name="message" className='input-area' />
        </div>
        <button type="submit" >SEND</button>
      </form>
  );
}