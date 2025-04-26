import React, { useEffect, useState } from 'react'
import '../styles/Details.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className='detailsMain'>
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
            <button className='btn btn-warning'>Add to cart</button>
            <Link to="/" className='btn btn-danger'>Back to the main page</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details