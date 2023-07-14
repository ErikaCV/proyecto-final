import { getData } from "../Utils/Function"
import { API_PRACTICE } from "../Utils/Constants"
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ShopPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=motos');
          const data = await response.json();
          setProducts(data.results);
          console.log(data.results)
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  

    return(
        <>
        <h1>Soy la Tienda.</h1>
        <hr />
        <div>
        <h2>Lista de productos:</h2>
        <div className="d-flex flex-wrap">
          {products.map((product) => (
            <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src={product.thumbnail} alt={product.title}  />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
              {product.id}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          ))}
        </div>
        <hr />
      </div>
      </>
    )
}