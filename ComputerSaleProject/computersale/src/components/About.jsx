import React from 'react'
import shoppingBanner from '../assets/shoppingBanner.png';
import '../styles/About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div className='about' initial={{opacity: 0.7}} transition={{duration: 0.75}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className='aboutTop' style={{backgroundImage: `url(${shoppingBanner})`}}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quibusdam natus ad modi nisi asperiores impedit quaerat cum qui omnis laudantium odit, incidunt suscipit quos sint sunt amet quae commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique aspernatur, nisi error, rerum soluta cupiditate vel quos quidem est nam necessitatibus itaque veniam voluptas et natus facilis sequi nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quibusdam natus ad modi nisi asperiores impedit quaerat cum qui omnis laudantium odit, incidunt suscipit quos sint sunt amet quae commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique aspernatur, nisi error, rerum soluta cupiditate vel quos quidem est nam necessitatibus itaque veniam voluptas et natus facilis sequi nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quibusdam natus ad modi nisi asperiores impedit quaerat cum qui omnis laudantium odit, incidunt suscipit quos sint sunt amet quae commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique aspernatur, nisi error, rerum soluta cupiditate vel quos quidem est nam necessitatibus itaque veniam voluptas et natus facilis sequi nostrum.</p>
      </div>
    </motion.div>
  )
}

export default About