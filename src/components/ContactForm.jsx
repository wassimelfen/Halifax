import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_01vdvg7', 'template_wlirtno', form.current, 'z5_qDiEf4dHfcDD6d')
      .then((result) => {
          console.log(result.text);

          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
   <div className=' contact2'>
    
      
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
    <h2>Contactez Nous </h2>
 

    <label className='label'>Nom et prénom</label>
    <input className='input' type="text" name="user_name" />
    <label className='label'>Email</label>
    <input className='input' type="email" name="user_email" />
    <label className='label'>Message</label>
    <textarea className='textarea' name="message" />
    <input className='sendbutton' type="submit" value="Envoyer" />
  </form>

  </div>


  )
}

export default ContactForm