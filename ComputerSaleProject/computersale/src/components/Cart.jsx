import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../styles/Cart.css';

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

    const totalPrice = cartProducts.reduce(
        (sum, product) => sum + (product.price * product.quantity), 
        0
    );

  return (
    <div className='cart-container'>
        <div className='cart-title'>My Cart</div>
        {loading ? (
            <p>Loading...</p>
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
                                <img 
                                    src={product.images[0]} 
                                    alt={product.title} 
                                    style={{ width: '200px' }}
                                />
                            </td>
                            <td style={{width: '300px'}}>{product.title}</td>
                            <td style={{width: '500px',fontSize: '14px' }}>{product.description}</td>
                            <td style={{color: 'rgba(170, 240, 100, 0.974)'}}>${product.price}</td>
                            <td>
                                <button className='btn btn-primary button-adj'>-</button>
                                {product.quantity}
                                <button className='btn btn-primary button-adj'>+</button>
                            </td>
                            <td>${(product.price * product.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
        )}
    </div>
  )
}

export default Cart