import React from 'react'
import BannerImage from '../assets/contactBanner.png';
import '../styles/ContactUs.css';

function ContactUs() {
  return (
    <div className='contact' data-aos="fade-up">
      <div className='left-side' style={{backgroundImage: `url(${BannerImage})`}}></div>
      <div className='right-side'>
        <h1 className='contact-header'>Contact Us</h1>
        <form className='contact-form'>
          <label className='contact-label'>Name & Surname</label>
          <input className='contact-input' type='text' name='name' placeholder='Please enter your First and Last name' />
          <label className='contact-label'>Email</label>
          <input className='contact-input' type='email' name='email' placeholder='Please enter Email' />
          <label className='contact-label'>Your Message</label>
          <textarea rows="6" name='message' placeholder='Please enter your message' />
          <button className='contact-button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs