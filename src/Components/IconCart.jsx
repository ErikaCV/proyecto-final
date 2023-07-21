
import React, { useContext, useState } from 'react';
import { FaOpencart } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { TiDeleteOutline } from "react-icons/ti";

export const IconCart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const toggleResumen = () => {
    setMostrarResumen(!mostrarResumen);
  };

  const totalProductos = cartItems.length;

  const calcularTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity; 
    });
    return total.toFixed(2);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="link" id="dropdown-basic">
        <span className="iconCart badge rounded-pill badge-notification bg-danger">
          {totalProductos}
        </span>
        <FaOpencart className="text-light fs-1 pt-3 pe-0 border-0" onClick={toggleResumen} />
      </Dropdown.Toggle>

      <Dropdown.Menu show={mostrarResumen}>
        <div className="resumenCarrito">
          <h4>Resumen del carrito</h4>
          <hr />
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="productoCarrito d-flex mb-3">
                <img src={item.image} alt={item.title} className="productoCarrito-img" />
                <div className="productoCarrito-info p-2">
                  <p className="">{item.title}</p>
                  <span>Cantidad: {item.quantity}</span> 
                </div>
                <span className="ms-auto p-2">${item.price * item.quantity}</span> 
                <div className='d-flex align-items-start flex-column mb-5'>
                <TiDeleteOutline className="deleteIcon " onClick={() => removeFromCart(item.id)} />
                </div>
              </div>
            ))
          ) : (
            <p>El carrito está vacío.</p>
          )}
          <hr />
          <div className="d-flex justify-content-between">
            <h6>Total</h6>
            <span>${calcularTotal()}</span>
          </div>
          <div className="accionesCarrito">
            <button className="btn btn-primary">Comprar</button>
            <button  className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};
