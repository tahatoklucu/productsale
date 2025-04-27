import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import productLogo from '../assets/productLogo.png';
import '../styles/Navbar.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';


function Navbar({loggedIn}) {
  
  const [basketCount, setBasketCount] = useState(0);

  useEffect(() => {
    const updateBasketCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
      setBasketCount(totalQuantity);
    };

    updateBasketCount();

    window.addEventListener("basketUpdated", updateBasketCount);

    return () => {
      window.removeEventListener("basketUpdated", updateBasketCount);
    }
  }, []);

  const logOut = () => {  
    localStorage.setItem("loggedIn", false);
    loggedIn = false;
  }

  return (
    <div className='navbar'>
        <div className='main'>
            <img src={productLogo} alt='computerLogo'/>
            <h2 className='computerText'>Product Sale</h2>
            <div className='LinkMain'>
                <NavLink className="navbar-item" to="/">Products</NavLink>
                <NavLink className="navbar-item" to="/about">About Us</NavLink>
                <NavLink className="navbar-item" to="/contact">Contact</NavLink>
            </div>
            {basketCount > -1 && (
                <span className='basketCount'>{basketCount}</span>
            )}
            <Link to="/mycart" className='shopIcon'> 
              <ShoppingBasketIcon />
            </Link>
            {JSON.parse(localStorage.getItem("loggedIn")) ? 
             <>
              <div className='loggedIn'>
                <Link to="/user-details">
                  <PersonIcon style={{color: "rgba(255, 222, 173, 0.867)", fontSize: "24px"}} /> 
                </Link>
                <span className='loggedIn-person'>{localStorage.getItem("username")}</span>
              </div>
              <Link to="/login" onClick={logOut} className='btn logOut'>Log Out</Link>
              </>
              : 
              <Link className='btn btn-secondary' to="/login">Login</Link>}
        </div>
    </div>
  )
}

export default Navbar