import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './form.css';

const SendForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8he302q', 'template_y428xsi', form.current, 'o3l-WBnSaupEOfO88')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
          Swal.fire({
            title: "Thank you!",
            text: "I will get in contact as soon as possible.",
            icon: "success"
          });
      };

  return (
    <form
        className='form-form'
        ref={form}
        onSubmit={sendEmail}
        >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder='Enter your Name'
                  name='user_name'
                  className='item'
                  required
                  />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder='Email Address'
                  name='user_email'
                  className='item'
                  required
                  />

                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  placeholder='Subject...'
                  className='item'
                  name='subject'
                  required
                  />

                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  placeholder='Your message...'
                  className='item-message'
                  name='message'
                  required
                  />
                <button type='submit'>Send</button>
          </form>
  )
}

export default SendForm;