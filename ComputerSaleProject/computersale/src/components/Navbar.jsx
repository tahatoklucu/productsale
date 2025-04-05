import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ComputerLogo from '../assets/computerLogo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={ComputerLogo} alt='computerLogo'/>
            <h2 className='computerText'>Computer Sale</h2>
            <div className='LinkMain'>
                <NavLink className="navbar-item" to="/computers">Computers</NavLink>
                <NavLink className="navbar-item" to="/about">About Us</NavLink>
                <NavLink className="navbar-item" to="/contact">Contact Us</NavLink>
            </div>
            <Link className='login-register' to="/login">Log In / Register</Link>
        </div>
    </div>
  )
}

export default Navbar