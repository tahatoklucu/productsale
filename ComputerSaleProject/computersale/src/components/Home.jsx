import React from 'react'
import { Link } from 'react-router-dom';
import Wallpaper from '../assets/Wallpaper.jpg';
import MainWallpaper from '../assets/wallpaperMain.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='mainPage' style={{backgroundImage: `url(${Wallpaper})`}}>
        <div className='computerMain'>
          <div className='textImage'>
            <img src={MainWallpaper} />
            <p>WELCOME TO OUR WEBSITE</p>
          </div>
            <Link to="/computers">
                <button>Browse PCs</button>
            </Link>
        </div>
    </div>
  )
}

export default Home