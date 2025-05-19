import React from 'react'
import '../styles/Settings.css';
import { motion } from 'framer-motion';

function Settings({loggedIn}) {
  return (
    <>
        <motion.div className='settings-main' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
            <div className='settings-title'>Settings</div>
            <div className='change-theme-container'>
                <label className='theme-title'>Theme:</label>
                <div className='buttons-container'>
                    <button className='theme-button'></button>
                    <button className='theme-button2'></button>
                    <button className='theme-button3'></button>
                    <button className='theme-button4'></button>
                </div>
            </div>
        </motion.div>
    </>
  )
}

export default Settings