import React from 'react'
import ComputerBanner from '../assets/computerBanner.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${ComputerBanner})`}}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quibusdam natus ad modi nisi asperiores impedit quaerat cum qui omnis laudantium odit, incidunt suscipit quos sint sunt amet quae commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique aspernatur, nisi error, rerum soluta cupiditate vel quos quidem est nam necessitatibus itaque veniam voluptas et natus facilis sequi nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quibusdam natus ad modi nisi asperiores impedit quaerat cum qui omnis laudantium odit, incidunt suscipit quos sint sunt amet quae commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique aspernatur, nisi error, rerum soluta cupiditate vel quos quidem est nam necessitatibus itaque veniam voluptas et natus facilis sequi nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quibusdam natus ad modi nisi asperiores impedit quaerat cum qui omnis laudantium odit, incidunt suscipit quos sint sunt amet quae commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus similique aspernatur, nisi error, rerum soluta cupiditate vel quos quidem est nam necessitatibus itaque veniam voluptas et natus facilis sequi nostrum.</p>
      </div>
    </div>
  )
}

export default About