import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Computers from './components/Computers';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <div className='mainHome'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/computers' exact element={<Computers />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<ContactUs />} />
        <Route path='/login' exact element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
