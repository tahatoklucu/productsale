import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ComputerLogo from '../assets/computerLogo.png';
import '../styles/Navbar.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Navbar() {

  const [basketCount, setBasketCount] = useState(0);

  return (
    <div className='navbar'>
        <div className='main'>
            <img src={ComputerLogo} alt='computerLogo'/>
            <h2 className='computerText'>Computer Sale</h2>
            <div className='LinkMain'>
                <NavLink className="navbar-item" to="/">Computers</NavLink>
                <NavLink className="navbar-item" to="/about">About Us</NavLink>
                <NavLink className="navbar-item" to="/contact">Contact Us</NavLink>
            </div>
            <span className='basketCount'>{basketCount}</span>
            <ShoppingBasketIcon style={{fontSize:"24px", marginRight: "20px", color:"#dee0ea"}} />
            <Link className='login-register' to="/login">Log In / Register</Link>
        </div>
    </div>
  )
}

export default Navbar