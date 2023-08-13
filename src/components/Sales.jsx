import React from 'react'
import moto1 from '../assets/images/moto1.jpg';
import '../styles/Sales.css'
import OfferCarousel from './OfferCarousel';
function Sales() {
  return (
    <div className="wrapper mt-4 ">
        <div className="row-one rounded">
      <OfferCarousel/>
        </div>

      <div className="row-two rounded">
      <OfferCarousel/>
      </div>
      <div className=" rounded">
      <h1>Aqui iria una imagen</h1>
      <OfferCarousel/>
      
      </div>
    </div>
  );
}

export default Sales;

