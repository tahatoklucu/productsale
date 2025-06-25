import React from 'react'
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
          <div className='pages'>
            <NavLink to="/about">
              About Us
            </NavLink>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </div>
          <div className='copyright'>
            <p>© Taha Toklucu. All rights reserved.</p>
          </div>
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
        </div>
    </div>
  )
}

export default Footer