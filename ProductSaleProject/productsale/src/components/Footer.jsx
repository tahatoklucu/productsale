import React from 'react'
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialIcon'>
            <a href='https://github.com/tahatoklucu' target='_blank'>
              <GitHubIcon />
            </a>
            <a href='https://www.instagram.com/tahatoklucu/' target='_blank'>
              <InstagramIcon />
            </a>
            <a href='mailto:tahatoklucu@hotmail.com' target='_blank'>
              <MailOutlineIcon />
            </a>
        </div>
        <p>© Taha Toklucu. All rights reserved.</p>
    </div>
  )
}

export default Footer