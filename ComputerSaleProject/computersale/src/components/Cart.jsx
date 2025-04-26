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
                ? {...product, quantity: Math.max(1, product.quantity -1)}
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
    <motion.div className='cart-container' initial={{opacity: 0.7}} animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
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
            <Table className='table' responsive='sm'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th className='desc-head'>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts.map((product) => (
                        <tr key={product.id}>
                            <td className='button-main'>
                                <button className='btn btn-light product-delete-btn' onClick={() => handleDelete(product.id)}>X</button>
                                <img 
                                    className='product-img'
                                    src={product.images[0]} 
                                    alt={product.title} 
                                />
                            </td>
                            <td className='product-title'>{product.title}</td>
                            <td className='product-desc'>{product.description}</td>
                            <td className='product-price'>${product.price}</td>
                            <td className='product-quantity'>
                                <button className='btn btn-primary button-adj' onClick={() => handleDecrease(product.id)}>-</button>
                                {product.quantity}
                                <button className='btn btn-primary button-adj' onClick={() => handleIncrease(product.id)}>+</button>
                            </td>
                            <td className='product-total'>${(product.price * product.quantity).toFixed(2)}</td>
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