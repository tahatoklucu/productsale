import React, { useEffect, useState } from 'react'
import '../styles/UserDetails.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function UserDetails({ loggedIn }) {

  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    if (currentUser) {
      setUsername(currentUser.username) || '';
      setUserEmail(currentUser.email) || '';
      setUserPassword(currentUser.password) || '';
    }
  }, [])

  const handleUpdateProfile = () => {
    const updatedUser = {
      username,
      email: userEmail,
      password: userPassword
    };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  }

  return (
    <>
      {loggedIn ?
        <motion.div className='user-main' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
          <div className='user-title'>User Details</div>
          <div className='userDetails-container'>
            <div className='details-item'>
              <label className='label-item'>Username: </label>
              <input type='text' className='details-input' onChange={(e) => setUsername(e.target.value)} value={username} style={{textTransform: 'uppercase'}}></input>
            </div>
            <div className='details-item'>
              <label className='label-item'>Email: </label>
              <input type='email' className='details-input' onChange={(e) => setUserEmail(e.target.value)} value={userEmail}></input>
            </div>
            <div className='details-item'>
              <label className='label-item'>Password: </label>
              <input type='password' className='details-input' onChange={(e) => setUserPassword(e.target.value)} value={userPassword}></input>
            </div>
            <div className='button-container'>
              <button className='btn btn-success detail-button' onClick={handleUpdateProfile}>Update your profile</button>
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