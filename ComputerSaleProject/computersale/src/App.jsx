import './App.css'
import {Route, Routes} from 'react-router-dom';
import Computers from './components/Computers';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';

function App() {

  const [basketCount, setBasketCount] = useState(0);

  return (
    <div className='mainHome'>
      <Navbar basketCount={basketCount} />
      <Routes>
        <Route path='/' exact element={<Computers setBasketCount={setBasketCount} />}  />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<ContactUs />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
