import React from 'react'
import '../styles/Shops.css'
import { Link } from 'react-router-dom'

function ShopItem({image, title, desc, price, onAddToCart}) {

  return (
    <div className='computerItem'>
        <img className='image' src={image}></img>
        <h4>{title}</h4>
        <p>{price} $</p>
        <div className='buttons'>
          <button className='btn btn-warning' onClick={onAddToCart}>Add to cart</button>
          <Link className='btn btn-info' to="/details">Details</Link>
        </div>
    </div>
  )
}

export default ShopItem