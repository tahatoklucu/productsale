import React from 'react'
import '../styles/UserDetails.css';
import { motion } from 'framer-motion';

function UserDetails() {
  return (
    <motion.div className='user-main' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
        <div className='user-title'>User Details</div>
    </motion.div>
  )
}

export default UserDetails