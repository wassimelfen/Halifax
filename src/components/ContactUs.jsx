import React from 'react'
import ContactForm from './ContactForm'
import MapAdress from './MapAdress'
import SocialMedia from './SocialMedia'


const ContactUs = () => {
  return (
    <div className='contactcontainer'>

    <div className='row'>
            <div className='col-md-6'>
            <ContactForm/>
            </div>
            <div className='col-md-6'>
            <MapAdress/>
            </div>
    </div>
    </div>
)
}

export default ContactUs