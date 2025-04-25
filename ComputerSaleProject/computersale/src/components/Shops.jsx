import React, { useEffect, useState } from 'react'
import ShopItem from './ShopItem';
import '../styles/Shops.css';
import axios from 'axios';
import { Alert } from 'react-bootstrap';


function Shops({setBasketCount}) {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get("https://api.escuelajs.co/api/v1/products?offset=3&limit=12")
        .then(response => {
            setProducts(response.data);
            setFilteredProducts(response.data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error);
        })
    },[]);

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try{
            let response;
            if(searchTerm.trim() === '') {
                response = await axios.get("https://api.escuelajs.co/api/v1/products?offset=3&limit=12");
            } else {
                response = await axios.get(`https://api.escuelajs.co/api/v1/products/?offset=3&limit=12&title=${searchTerm}`)
            }
            setFilteredProducts(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

   
  return (
    <div className='computers'>
        <h1 className='computerTitle'>Our Products for Sale</h1>
        <form onSubmit={handleSearch}>
                <input 
                    type='text' 
                    placeholder='Search products by title...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type='submit'>Search</button>
        </form>
        <div className='computerList'>

             {isLoading ? (
                <>
                {[
                  'light',
                ].map((variant) => (
                  <Alert key={variant} variant={variant}>
                    Loading...
                  </Alert>
                ))}
              </>
            ) : (
                <>
                    {filteredProducts.map(item => (
                        <ShopItem
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            desc={item.description}
                            image={item.images}
                            category={item.category}
                            onAddToCart={() => setBasketCount(prev => prev + 1)}
                        />
                    ))}
                </>
            )}
        </div>
    </div>
  )
}

export default Shops