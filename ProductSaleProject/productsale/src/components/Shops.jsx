import React, { useEffect, useState } from 'react'
import ShopItem from './ShopItem';
import '../styles/Shops.css';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Shops({setBasketCount}) {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=12")
        .then(response => {
            const validProducts = response.data.filter(product => 
                product.images?.length > 0 && product.images[0] !== ""
            );
            setProducts(response.data);
            setFilteredProducts(response.data);
        })
        .catch(error => {
            console.error("API Error", error);
            setProducts([]);
        })
        .finally(() => setIsLoading(false));
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
    <div className='products' data-aos="fade-up" >
        <h1 className='productsTitle'>Our Products for Sale</h1>
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
                <div className='loading-container' data-aos="fade-up">
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
                <div className='productList' data-aos="fade-up">
                    {filteredProducts.map(item => (
                        <ShopItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            desc={item.description}
                            image={item.images}
                            category={item.category}
                        />
                    ))}
                </div>
            )}
    </div>
  )
}

export default Shops