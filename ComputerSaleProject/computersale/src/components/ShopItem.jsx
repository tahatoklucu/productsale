import React from 'react'
import '../styles/Shops.css'
import { Link } from 'react-router-dom'

function ShopItem({image, title, desc, price, onAddToCart}) {

  return (
    <div className='computerItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h4>{title}</h4>
        <p>{price} $</p>
        <div className='buttons'>
          <button className='addCart' onClick={onAddToCart}>Add to cart</button>
          <Link className='details' to="/details">Details</Link>
        </div>
    </div>
  )
}

export default ShopItem