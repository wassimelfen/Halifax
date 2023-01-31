import React,{useState} from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sjemiao', 'template_zuyzk1j', form.current, 'YHCHURIn8oT8LE85z')
      .then((result) => {
          console.log(result.text);
         
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

     
  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
    <label className='label'>Name</label>
    <input className='input' type="text" name="user_name" />
    <label className='label'>Email</label>
    <input className='input' type="email" name="user_email" />
    <label className='label'>Message</label>
    <textarea className='textarea' name="message" />
    <input className='sendbutton' type="submit" value="Send" />
  </form>


  )
}

export default ContactForm