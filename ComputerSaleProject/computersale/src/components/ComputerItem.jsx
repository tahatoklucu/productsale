import React from 'react'
import '../styles/Computers.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function ComputerItem({image, name, content, price, onAddToCart}) {

  return (
    <div className='computerItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <h6>{content}</h6>
        <p>{price}</p>
        <div className='buttons'>
          <button className='addCart' onClick={onAddToCart}>Add to cart</button>
          <Link className='details' to="/details">Details</Link>
        </div>
    </div>
  )
}

export default ComputerItem