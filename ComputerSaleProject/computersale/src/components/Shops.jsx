import React, { useEffect, useState } from 'react'
import ShopItem from './ShopItem';
import '../styles/Shops.css';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { motion } from 'framer-motion';


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
                response = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`)
            }
            setFilteredProducts(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

   
  return (
    <motion.div className='computers' initial={{opacity: 0.7}} animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}} >
        <h1 className='computerTitle'>Our Products for Sale</h1>
        <form onSubmit={handleSearch} className='searchForm'>
                <Form.Control 
                    type='search' 
                    placeholder='Search products by title...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='btn btn-info' type='submit'>Search</button>
        </form>
             {isLoading ? (
                <div className='loading-container'>
                    <span className='loading-span'>
                        {[
                        'light',
                        ].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            Loading...
                        </Alert>
                        ))}
                    </span>
              </div>
            ) : (
                <div className='computerList'>
                    {filteredProducts.map(item => (
                        <ShopItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            desc={item.description}
                            image={item.images}
                            category={item.category}
                            onAddToCart={() => setBasketCount(prev => prev + 1)}
                        />
                    ))}
                </div>
            )}
    </motion.div>
  )
}

export default Shops