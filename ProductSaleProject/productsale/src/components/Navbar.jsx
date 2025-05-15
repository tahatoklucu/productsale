import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import productLogo from '../assets/productLogo.png';
import '../styles/Navbar.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert } from 'react-bootstrap';

function Navbar({loggedIn, setLoggedIn}) {
  
  const [basketCount, setBasketCount] = useState(0);
  const [username, setUsername] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

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
    setShowAlert(true);
    setTimeout(() => {
      const alertElement = document.querySelector('.fade-alert');
      if(alertElement) {
        alertElement.classList.add('hiding');
        setTimeout(() => setShowAlert(false), 500);
      }
    }, 3000)
    setTimeout(() => {
      navigate('/login');
    }, 3000)
  }

  return (
    <div className='navbar'>
        <div className='main'>
            <Link to='/'>
              <img src={productLogo} alt='productLogo' style={{height: '90px', marginLeft: '50px'}}/>
            </Link>
            <h2 className='productText'>Product Sale</h2>
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
                    <img className='dropdown-image' src={currentUser.avatar || <PersonIcon />}></img>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.ItemText style={{textTransform: "uppercase"}}>{username}</Dropdown.ItemText>
                  <hr style={{marginTop: "2px", marginBottom: "2px"}} />
                  <Dropdown.Item href="/user-details">User Details</Dropdown.Item>
                  <Dropdown.Item href="/user-settings">Settings</Dropdown.Item>
                  <Dropdown.Item onClick={logOut} >Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </>
              : 
              <>
                <Link className='btn btn-secondary btn-login' to="/login">Login</Link>
                {showAlert && (
                  <Alert 
                      variant="success" 
                      onClose={() => setShowAlert(false)} 
                      dismissible
                      className={showAlert ? "fade-alert" : "fade-alert hiding"}
                      style={{
                          position: 'fixed',
                          top: '20px',
                          right: '20px',
                          zIndex: 9999,
                          width: 'auto',
                          minWidth: '200px'
                      }}
                  >
                      You made a successful exit.
                </Alert>
              )}
              </>
            }
        </div>
    </div>
  )
}

export default Navbar