import React, { useState } from 'react'
import '../styles/Shops.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';


function ShopItem({id, image, title, desc, price, onAddToCart}) {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      navigate(`/products/${id}`);
    } catch(error) {
      console.error("Error fetching product details:", error);
    }
  }

  const handleSubmit = async () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({id, quantity: 1});
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  return (
    <div className='computerItem'>
        <img className='image' src={image}></img>
        <h4>{title}</h4>
        <p>{price} $</p>
        <div className='buttons'>
          <button className='btn btn-warning' onClick={handleSubmit}>Add to cart</button>
          <button className='btn btn-info' onClick={handleClick}>Details</button>
        </div>
    </div>
  )
}

export default ShopItem