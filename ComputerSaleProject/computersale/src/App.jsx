import './App.css'
import {Route, Routes} from 'react-router-dom';
import Computers from './components/Computers';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className='mainHome'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Computers />} />
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
