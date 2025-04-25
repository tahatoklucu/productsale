import React from 'react'
import '../styles/Shops.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ShopItem({id, image, title, desc, price, onAddToCart}) {
  const navigate = useNavigate();
  console.log(id);

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      console.log(response.data);
      navigate(`/products/${id}`);
    } catch(error) {
      console.error("Error fetching product details:", error);
    }
    
  }

  return (
    <div className='computerItem'>
        <img className='image' src={image}></img>
        <h4>{title}</h4>
        <p>{price} $</p>
        <div className='buttons'>
          <button className='btn btn-warning' onClick={onAddToCart}>Add to cart</button>
          <button className='btn btn-info' onClick={handleSubmit}>Details</button>
        </div>
    </div>
  )
}

export default ShopItem