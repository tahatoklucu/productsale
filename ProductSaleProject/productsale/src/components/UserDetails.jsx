import React, { useEffect, useState } from 'react'
import '../styles/UserDetails.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
              <label className='label-item'>Username: </label>
              <input type='text' className='details-input' value={username} style={{textTransform: 'uppercase'}}></input>
            </div>
            <div className='details-item'>
              <label className='label-item'>Email: </label>
              <input type='email' className='details-input' value={userEmail}></input>
            </div>
            <div className='details-item'>
              <label className='label-item'>Password: </label>
              <input type='password' className='details-input' value={userPassword}></input>
            </div>
            <div className='button-container'>
              <button className='btn btn-success detail-button'>Update your profile</button>
              <p>
                <Link to="/" className='back-button'>Back to the Main Page</Link>
              </p>  
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