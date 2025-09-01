import React, { useState } from 'react'
import '../styles/Settings.css';
import { useTheme } from '../contexts/ThemeContext';
import Alert from '@mui/material/Alert';

function Settings({loggedIn}) {
  
  const { theme, toggleTheme } = useTheme();
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    toggleTheme('dark');
    setShowAlert(true);
    setTimeout(() => {
      window.location.reload(); 
    }, 3000)
  }

  const handleDekete = () => {
    localStorage.removeItem("currentUser");
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = allUsers.findIndex(user => user.email === userEmail);
    localStorage.removeItem("users")
  }

  return (
    <div data-aos="fade-up">
      {loggedIn ? 
        <div className='settings-main'>
          <div className='settings-title'>Settings</div>
          <hr style={{color: 'var(--white)', marginTop: '30px'}} />
          <div className='change-theme-container'>
              <label className='theme-title'>Theme:</label>
              <div className='buttons-container'>
                  {theme === 'light' ? 
                    <button className='btn btn-dark theme-button' onClick={handleClick}>Dark mode</button>
                    :
                    <button className='btn btn-light theme-button' onClick={handleClick}>Light mode</button>
                  }
                  {showAlert && (
                    <Alert 
                        severity="success" 
                        onClose={() => setShowAlert(false)} 
                        dismissible
                        style={{
                            position: 'fixed',
                            top: '20px',
                            right: '20px',
                            zIndex: 9999,
                            width: 'auto',
                            minWidth: '200px'
                        }}
                    >
                      Your theme will be updated in 3 seconds!
                    </Alert>
                  )}
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
        </div>
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
        
    </div>
  )
}

export default Settings