import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import productLogo from '../assets/productLogo.png';
import '../styles/Navbar.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import Dropdown from 'react-bootstrap/Dropdown';


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
  }, [loggedIn]);

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
              
              <Dropdown className='dropdown'>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                      <PersonIcon style={{color: "#000", fontSize: "24px"}} /> 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.ItemText style={{textTransform: "uppercase"}}>{username}</Dropdown.ItemText>
                  <hr style={{marginTop: "2px", marginBottom: "2px"}} />
                  <Dropdown.Item href="/user-details">User Details</Dropdown.Item>
                  <Dropdown.Item href="/user-settings">Settings</Dropdown.Item>
                  <Dropdown.Item onClick={logOut} href="/login">LogOut</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </>
              : 
              <Link className='btn btn-secondary btn-login' to="/login">Login</Link>}
        </div>
    </div>
  )
}

export default Navbar