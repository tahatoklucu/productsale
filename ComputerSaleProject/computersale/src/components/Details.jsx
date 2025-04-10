import React from 'react'
import '../styles/Details.css';
import Macbook from '../assets/macbook.jpeg';

function Details() {
  return (
    <div className='detailsMain'>
      <h1 className='details-title'>Details</h1>
      <div className='details-left'>
        <img className='details-image' src={Macbook} />
      </div>
    </div>
  )
}

export default Details