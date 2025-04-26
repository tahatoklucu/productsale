import React from 'react'
import BannerImage from '../assets/contactBanner.png';
import '../styles/ContactUs.css';
import { motion } from 'framer-motion';

function ContactUs() {
  return (
    <motion.div className='contact' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
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
    </motion.div>
  )
}

export default ContactUs