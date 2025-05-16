import React, { useEffect, useRef, useState } from 'react'
import '../styles/UserDetails.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

function UserDetails({ loggedIn }) {

  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    if (currentUser) {
      setUsername(currentUser.username) || '';
      setUserEmail(currentUser.email) || '';
      setUserPassword(currentUser.password) || '';
      setAvatarPreview(currentUser.avatar) || '';
    }
  }, [])

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleUpdateProfile = () => {
    const updatedUser = {
      username,
      email: userEmail,
      password: userPassword,
      avatar: avatarPreview
    };

    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = allUsers.findIndex(user => user.email === userEmail);

    if(userIndex !== -1) {
      allUsers[userIndex] = updatedUser;
      localStorage.setItem('users', JSON.stringify(allUsers));
    }
  }

  return (
    <>
      {loggedIn ?
        <motion.div className='user-main' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
          <div className='user-title'>User Details</div>
          <div className='userPage'>
            <div className='userAvatar'>
              <div className='avatar-preview' onClick={() => fileInputRef.current.click()} style={{backgroundImage: `url(${avatarPreview || PersonIcon})`, cursor: 'pointer', borderRadius: '10px'}}>
                {avatarPreview ? 
                  <div className='image-container'>
                    <img src={avatarPreview} className='image-avatar'></img>
                  </div>
                  :
                  <div className='icon'>
                    <PersonIcon />
                  </div>
                }
              </div>
              <input className='file-upload' type='file' ref={fileInputRef} onChange={handleAvatarChange} accept='image/*'></input>
            </div>
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