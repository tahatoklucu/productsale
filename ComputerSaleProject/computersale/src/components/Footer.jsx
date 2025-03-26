import React from 'react'
import '../styles/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialIcon'>
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
        </div>
        <p>© Taha Toklucu. All rights reserved.</p>
    </div>
  )
}

export default Footer