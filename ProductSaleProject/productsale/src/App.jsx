import './App.css'
import {Route, Routes} from 'react-router-dom';
import Shops from './components/Shops';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Details from './components/Details';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cart from './components/Cart';
import UserDetails from './components/UserDetails';
import Settings from './components/Settings';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './contexts/ThemeContext';
function App() {

  const [basketCount, setBasketCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const { theme } = useTheme();

  return (
    <div className='mainHome' data-theme={theme}>
      <ThemeProvider>
      <AnimatePresence>
      <Navbar basketCount={basketCount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/' exact element={<Shops setBasketCount={setBasketCount} />}  />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<ContactUs />} />
        <Route path='/login' exact element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/products/:id' exact element={<Details />} />
        <Route path='/mycart' exact element={<Cart />} />
        <Route path='/user-details' exact element={<UserDetails loggedIn={loggedIn} />} />
        <Route path='/user-settings' exact element={<Settings loggedIn={loggedIn} />} />
      </Routes>
      <Footer />
      </AnimatePresence>
      </ThemeProvider>
    </div>
  )
}

export default App
