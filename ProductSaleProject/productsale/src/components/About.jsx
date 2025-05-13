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
        <span className='about-dev'>Technologies I'm Using</span>
        <ul className='tech'>
          <li className='tech-item'>React.js for high-performance, dynamic user interfaces</li>
          <li className='tech-item'>React Bootstrap + custom CSS solutions for responsive, accessible design</li>
          <li className='tech-item'>Mobile-First Approach delivering flawless UX across all devices</li>
          <li className='tech-item'>Vercel for continuous integration and instant deployment (CI/CD)</li>
          <li className='tech-item'>Optimized Performance with fast loading speeds and SEO-friendly architecture</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default About