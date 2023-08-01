import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OfferCarousel() {
  const getProductContextValue = useContext(ProductContext);
  const { products } = getProductContextValue();

  const offerProducts = products.filter((product) => product.category === 'ofertas');

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Carousel fade>
        {offerProducts.map((product) => (
          <Carousel.Item key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="d-block w-100"
                style={{ maxHeight: '150px' }}
              />
              <Carousel.Caption>
                <h3>{product.title}</h3>
        
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default OfferCarousel;
