import React from 'react'
import '../styles/Settings.css';

function Settings({loggedIn}) {
  return (
    <>
        <div className='settings-main'>
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
        </div>
    </>
  )
}

export default Settings