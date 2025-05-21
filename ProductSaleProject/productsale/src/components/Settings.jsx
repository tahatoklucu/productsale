import React from 'react'
import '../styles/Settings.css';
import { motion } from 'framer-motion';

function Settings({loggedIn}) {
  return (
    <>
      {loggedIn ? 
        <motion.div className='settings-main' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
          <div className='settings-title'>Settings</div>
          <hr style={{color: 'var(--white)', marginTop: '30px'}} />
          <div className='change-theme-container'>
              <label className='theme-title'>Theme:</label>
              <div className='buttons-container'>
                  <button className='theme-button'></button>
                  <button className='theme-button2'></button>
                  <button className='theme-button3'></button>
                  <button className='theme-button4'></button>
              </div>
          </div>
          <hr style={{color: 'var(--white)', marginTop: '30px'}} />
          <div className='delete-container'>
            <label className='delete-title'>Delete Account:</label>
            <label className='delete-information-title'>What Happens If You Delete Your Account?</label>
            <label className='delete-information'>All personal information, profile details, and settings will be erased.</label>
            <label className='delete-information'>Account deletion is permanent. It is not possible to retrieve or reactivate the account after deletion.</label>
            <label className='delete-information'>You can create a new account with the same email address, but the old data will not be accessible.</label>
            <button className='btn btn-danger delete-btn'>Delete Account</button>
          </div>
          <hr style={{color: 'var(--white)', marginTop: '30px'}} />
        </motion.div>
        :
        <div className='not-logged-container'>
          <div className='user-title'>User Details</div>
          <div className='not-logged'> 
              <h1 className='not-logged-message'>You're not logged in yet!</h1>
              <p>
                <button className='btn btn-success not-logged-button' onClick={() => window.location.href = "/login"}>
                      Go to the Login page
                </button>
              </p>
              <p>
                <button className='btn btn-light not-logged-button' onClick={() => window.location.href = "/"} style={{marginTop: '10px'}}>
                      Continue Shopping
                </button>
              </p>
          </div>
        </div>
    }
        
    </>
  )
}

export default Settings