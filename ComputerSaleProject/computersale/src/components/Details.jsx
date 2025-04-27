import React, { useEffect, useState } from 'react'
import '../styles/Details.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Product details can't reached:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({id, quantity: 1});
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setShowAlert(true);

    setTimeout(() => {
      const alertElement = document.querySelector('.fade-alert');
      if(alertElement) {
        alertElement.classList.add('hiding');
        setTimeout(() => setShowAlert(false), 500);
      }
    }, 3000)
  }

  if (loading) return (
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
      )
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="error">Product not found.</div>;

  return (
    <motion.div className='detailsMain' initial={{opacity: 0.7}}  animate={{opacity: 1}} transition={{duration: 0.75}} exit={{opacity: 0}}>
      <h1 className='details-title'>Product Details</h1>
      <div className='details-container'>
        <div className='details-left'>
          <img src={product.images} alt={product.title} />
        </div>
        <div className='details-right'>
          <label className='product-label'>Product Name:</label>
          <h4 className='details-head'>{product.title}</h4>
          <label className='product-label'>Product Description:</label>
          <p className='details-desc'>{product.description}</p>
          <label className='product-label'>Product Price:</label>
          <p className='details-price'>{product.price} $</p>
          <div className='details-bottom'>
            <button className='btn btn-warning' onClick={handleSubmit}>Add to cart</button>
            {showAlert && (
                <Alert 
                    variant="success" 
                    onClose={() => setShowAlert(false)} 
                    dismissible
                    className={showAlert ? "fade-alert" : "fade-alert hiding"}
                    style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        zIndex: 9999,
                        width: 'auto',
                        minWidth: '200px'
                    }}
                  >
                    Product added to cart!
                  </Alert>
              )}
            <Link to="/mycart" className='btn btn-info mycart'>My Cart</Link>
          </div>
          <Link to="/" className='btn btn-danger'>Back to the main page</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Details