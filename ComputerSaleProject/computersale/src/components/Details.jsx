import React, { useEffect, useState } from 'react'
import '../styles/Details.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function Details() {
  const { id } = useParams(); // URL'den ID'yi al
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Ürün detayı alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className='loading-container'>
      <span className='loading-span'>
          {[
          'light',
          ].map((variant) => (
          <Alert key={variant} variant={variant}>
              Loading...
          </Alert>
          ))}
      </span>
    </div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="error">Product not found.</div>;

  return (
    <div className='detailsMain'>
      <h1 className='details-title'>Details</h1>
      <div className='details-left'>
        <img src={product.images} alt={product.title} />
      </div>
      <div className='details-right'>
        <h4 className='details-head'>{product.title}</h4>
        <h6 className='details-desc'>{product.description}</h6>
        <p>{product.price} $</p>
      </div>
    </div>
  )
}

export default Details