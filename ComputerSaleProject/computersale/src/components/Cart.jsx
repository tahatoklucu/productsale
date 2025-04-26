import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../styles/Cart.css';
import { Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Cart() {
    const [cartProducts, setCartProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedData = localStorage.getItem("cart");
        const cartItems = JSON.parse(storedData) || [];

        const fetchProducts = async () => {
            try {
                const productPromises = cartItems.map(item => 
                    axios.get(`https://api.escuelajs.co/api/v1/products/${item.id}`)
                );
                const responses = await Promise.all(productPromises);
                const products = responses.map(res => res.data);

                const mergedProducts = products.map((product, index) => ({
                    ...product,
                    quantity: cartItems[index].quantity
                }));
                setCartProducts(mergedProducts);
            } catch (error) {
                console.error("API Error", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleIncrease = (productId) => {
        const updatedProducts = cartProducts.map(product =>
            product.id === productId
                ? {...product, quantity: product.quantity + 1}
                : product
        );
        setCartProducts(updatedProducts);
        updateLocalStorage(updatedProducts);
    }

    const handleDecrease = (productId) => {
        const updatedProducts = cartProducts.map(product => 
            product.id === productId
                ? {...product, quantity: Math.max(product.quantity -1)}
                : product
        );
        setCartProducts(updatedProducts);
        updateLocalStorage(updatedProducts);
    }

    const handleDelete = (productId) => {
        const updatedProducts = cartProducts.filter(product => product.id !== productId);
        setCartProducts(updatedProducts);

        const updatedCart = JSON.parse(localStorage.getItem("cart")).filter(item => item.id !== productId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const updateLocalStorage = (products) => {
        const simplifiedCart =  products.map(({id, quantity}) => ({id, quantity}));
        localStorage.setItem("cart", JSON.stringify(simplifiedCart));
    }

    const totalPrice = cartProducts.reduce(
        (sum, product) => sum + (product.price * product.quantity), 
        0
    );

  return (
    <motion.div className='cart-container'>
        <div className='cart-title'>My Cart</div>
        {loading ? (
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
        <div className='cart-table'>
            <Table className='table'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Product Price</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <button className='btn btn-light product-delete-btn' onClick={() => handleDelete(product.id)}>X</button>
                                <img 
                                    src={product.images[0]} 
                                    alt={product.title} 
                                    style={{ width: '200px', borderRadius: '10px' }}
                                />
                            </td>
                            <td style={{width: '300px'}}>{product.title}</td>
                            <td style={{width: '500px',fontSize: '14px' }}>{product.description}</td>
                            <td style={{color: 'rgba(170, 240, 100, 0.974)'}}>${product.price}</td>
                            <td>
                                <button className='btn btn-primary button-adj' onClick={() => handleDecrease(product.id)}>-</button>
                                {product.quantity}
                                <button className='btn btn-primary button-adj' onClick={() => handleIncrease(product.id)}>+</button>
                            </td>
                            <td>${(product.price * product.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className='total-price'>
                <strong>Total: ${totalPrice.toFixed(2)}</strong>
            </div>
        </div>
        )}
    </motion.div>
  )
}

export default Cart