import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ComputerLogo from '../assets/computerLogo.png';
import '../styles/Navbar.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';

function Navbar({basketCount, loggedIn}) {
  const logOut = () => {
      JSON.parse(localStorage.setItem("loggedIn", false));
  }

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
            <Link to="/mycart"> 
              <ShoppingBasketIcon style={{fontSize:"24px", marginRight: "20px", color:"#dee0ea"}} />
            </Link>
            {JSON.parse(localStorage.getItem("loggedIn")) ? 
              <div className='loggedIn'>
                <PersonIcon style={{color: "rgba(255, 222, 173, 0.867)", fontSize: "24px"}} /> 
                <span className='loggedIn-person'>{localStorage.getItem("username")}</span>
                <div className='logOut'>
                  <Link to="/login" onClick={logOut}>Log Out</Link>
                </div>
              </div>
              : 
              <Link className='login-register' to="/login">Log In / Register</Link>}
        </div>
    </div>
  )
}

export default Navbar