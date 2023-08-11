import React, { useState, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCartPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';

export const ProductDetail = ({ product: { id, image, title, description, stock, price } }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const newQuantity = quantity + 1;
    if (newQuantity > stock) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La cantidad seleccionada supera el stock disponible.',
      });
    } else {
      addToCart({ id, title, description, image, price, quantity: newQuantity, stock });
      setQuantity(newQuantity);
    }
  };
  
  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(1, quantity + amount);
    setQuantity(newQuantity);
  };

  return (
    <Card key={id} className="product-detail shadow-lg">
      <Row>
        <Col md={6} className="product-image-col">
          <Card.Img variant="top" src={image} alt={title} className="product-image" />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title className="product-title">{title}</Card.Title>
            <Card.Text className="product-description">{description}</Card.Text>
            <div className="product-price text-start">
              <p className="price-label">Precio</p>
              <h3 className="product-price-value">${price}</h3>
            </div>
            <div className="product-quantity mt-4 d-flex align-items-center">
              <button className="quantity-button" onClick={() => handleQuantityChange(-1)}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input type="text" className="form-control quantity-input mx-2" value={quantity} readOnly />
              <button className="quantity-button" onClick={() => handleQuantityChange(1)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="product-buttons mt-4">
              <Button className="btn btn-cart bg-warning me-2" onClick={handleAddToCart}>
                <FontAwesomeIcon icon={faCartPlus} /> Agregar al Carrito
              </Button>
              <Button className="btn btn-buy bg-success">
                <FontAwesomeIcon icon={faShoppingCart} /> Comprar
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
