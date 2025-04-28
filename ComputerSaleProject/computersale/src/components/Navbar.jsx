import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import productLogo from '../assets/productLogo.png';
import '../styles/Navbar.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';


function Navbar({loggedIn, setLoggedIn}) {
  
  const [basketCount, setBasketCount] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const updateBasketCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
      setBasketCount(totalQuantity);
    };

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUsername(currentUser.username);
      setLoggedIn(true);
    }

    updateBasketCount();
    window.addEventListener("basketUpdated", updateBasketCount);

    return () => {
      window.removeEventListener("basketUpdated", updateBasketCount);
    }
  }, [setLoggedIn]);

  const logOut = () => {  
    localStorage.removeItem('currentUser');
    setLoggedIn(false);
    setUsername('');
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
            {loggedIn ? 
             <>
              <div className='loggedIn'>
                <Link to="/user-details">
                  <PersonIcon style={{color: "rgba(255, 222, 173, 0.867)", fontSize: "24px"}} /> 
                </Link>
                <span className='loggedIn-person'>{username}</span>
              </div>
              <Link to="/login" onClick={logOut} className='btn logOut'>Log Out</Link>
              </>
              : 
              <Link className='btn btn-secondary btn-login' to="/login">Login</Link>}
        </div>
    </div>
  )
}

export default Navbar