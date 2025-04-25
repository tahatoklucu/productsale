import React, { useEffect, useState } from 'react'
import ShopItem from './ShopItem';
import '../styles/Shops.css';
import axios from 'axios';


function Shops({setBasketCount}) {

    const [image, setImage] = useState([]);

    useEffect( async () => {
        await axios.get("https://api.escuelajs.co/api/v1/products?offset=3&limit=12")
        .then(response => {
            setImage(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    },[]);

  return (
    <div className='computers'>
        <h1 className='computerTitle'>Our Products for Sale</h1>
        <div className='computerList'>
            {image.map(item => (
                <ShopItem 
                    key={item.id}
                    title = {item.title}
                    price={item.price}
                    desc={item.description}
                    image={item.images}
                    category={item.category}
                    onAddToCart = {() => setBasketCount(prev => prev + 1)}
                />
            ))}
        </div>
    </div>
  )
}

export default Shops