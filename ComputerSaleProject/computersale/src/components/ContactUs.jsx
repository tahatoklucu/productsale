import React from 'react'
import BannerImage from '../assets/banner2.jpg';
import '../styles/ContactUs.css';

function ContactUs() {
  return (
    <div className='contact'>
      <div className='left-side' style={{backgroundImage: `url(${BannerImage})`}}></div>
      <div className='right-side'>
        <h1>Contact Us</h1>
        <form>
          <label>Name & Surname</label>
          <input type='text' name='name' placeholder='Please enter your First and Last name' />
          <label>Email</label>
          <input type='email' name='email' placeholder='Please enter Email' />
          <label>Your Message</label>
          <textarea rows="6" name='message' placeholder='Please enter your message' />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs