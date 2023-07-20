import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemProduct = ({ product: { id, title, description, image, price } }) => {
  return (
   
    <Card className="product-card col-md-3 col-sm-4 m-3">
         <Link to={`/products/${id}`} state={{id,image,title,description,price}}>
      <Card.Img variant="top" src={image} alt={title} className="product-card-image" />
      <Card.Body>
        <Card.Title className="product-card-title">{title}</Card.Title>
        <div className="product-card-bottom">
          <div className="product-card-rating">
            <span className="product-card-rating-text">Rating:</span>
          </div>
          <div className="product-card-price">${price}</div>
        </div>
        <Button className="product-card-button">Agregar al Carrito</Button>
      </Card.Body>
      </Link>
    </Card>
   
  );
};