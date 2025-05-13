import React, { useEffect, useState } from 'react'
import '../styles/UserDetails.css';
import { motion } from 'framer-motion';

function UserDetails({loggedIn}) {

  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUsername(currentUser.username);
      setUserEmail(currentUser.email);
    }
  })

  return (
    <>
      {loggedIn ?
        <motion.div className='user-main' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
          <div className='user-title'>User Details</div>
          <div className='details-container'>
            <div className='details-item'>
              <label className='label-item'>Name: </label>
              <span className='detail-exp'>{username}</span>
            </div>
            <div className='details-item'>
              <label className='label-item'>Email: </label>
              <span className='detail-exp'>{userEmail}</span>
              <button className='btn btn-primary'>Change your email</button>
            </div>
            <div className='details-item'>
              <label className='label-item'>Password: </label>
              <input type='password' className='details-input' value={userPassword}></input>
              <button className='btn btn-primary'>Change your password</button>
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