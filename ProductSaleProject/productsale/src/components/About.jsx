import React from 'react'
import shoppingBanner from '../assets/reactlogo.png';
import '../styles/About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div className='about' initial={{opacity: 0.7}} transition={{duration: 0.75}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className='aboutTop' style={{backgroundImage: `url(${shoppingBanner})`}}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <span className='about-dev'>About Developer</span>
        <p>Hi! I'm Taha Toklucu, a dedicated developer with a strong passion for building intuitive and efficient web applications. My goal is to combine clean code with thoughtful design to deliver engaging user experiences. This project represents my commitment to creating reliable and scalable digital solutions that not only meet today’s needs but are also ready for tomorrow’s challenges.</p>
      </div>
    </motion.div>
  )
}

export default About