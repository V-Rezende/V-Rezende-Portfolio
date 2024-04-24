import React from 'react'
import './contact.css'
import SendForm from '../components/form';

const Contact = () => {
  return (
    <div className='contact-section'>
        <div className='contact-contact'>
          <div className='top-contact'>
            <h2>Contact</h2>
            <p>If you're eager to enhance your team with my skills and expertise or even interested in working together for your business or creative project, get in touch and complete the form. I will try my best to respond within one to two business days.</p>
          </div>
          <div className='bottom-contact'>
            <p>Humm... You are not a fan of contact form?</p>
            <p>That's ok. Send me an email instead at <strong>vinnirezende@gmail.com</strong></p>
          </div>
        </div>
        <div className='form'>
          <SendForm />
        </div>

    </div>
  )
}

export default Contact;