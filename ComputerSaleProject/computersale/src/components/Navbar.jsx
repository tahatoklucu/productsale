import React from 'react'
import { NavLink } from 'react-router-dom'
import ComputerLogo from '../assets/computerLogo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={ComputerLogo} alt='computerLogo'/>
            <h2 className='computerText'>Computer Sale</h2>
            <div className='LinkMain'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/computers">Computers</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar