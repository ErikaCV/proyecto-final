import { Card, Button, Row, Col } from "react-bootstrap";

export const ProductDetail = ({ product: { id, image, title, description, colors, price } }) => {
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
            <div className="product-colors">
              <span>Colores disponibles:</span>
          
            </div>
            <div className="product-price">
              <span>Precio:</span>
              <span className="product-price-value">${price}</span>
            </div>
            <Button className="product-button">Comprar</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>

  );
};
