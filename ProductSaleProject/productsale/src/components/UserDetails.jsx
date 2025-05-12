import React from 'react'
import '../styles/UserDetails.css';
import { motion } from 'framer-motion';

function UserDetails({loggedIn, setLoggedIn}) {
  return (
    <>
      {loggedIn ?
        <motion.div className='user-main' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
          <div className='user-title'>User Details</div>
          <div className='details-container'>
            <div className='details-item'>
              <label className='label-item'>Name: </label>
              <span className='detail-exp'>A</span>
            </div>
          </div>
        </motion.div>
        : 
        <>
          <span>You're not logged in yet!</span>
        </>
      }
      
    </>
  )
}

export default UserDetails