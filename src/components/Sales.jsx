import React from 'react'
import '../styles/Sales.css'
import OfferCarousel from './OfferCarousel';
import banner from "../assets/images/img-slider/banner.jpg"
import banner2 from "../assets/images/img-slider/banner2.webp"
import { Link } from 'react-router-dom';

function Sales() {
  return (
    <div className="wrapper mt-4 container-banner ">
      <div className="row-one rounded bb">
        <OfferCarousel/>
      </div>
      {/* <div className="row-two rounded">
        <OfferCarousel/>
      </div> */}
      <div className='banner-container'>
        {/* <h1>Aqui iria una imagen</h1> */}
        {/* <OfferCarousel/> */}
        <Link to="products/64d80909ac95a9aa7c386961">
          <img  className='banner my-2' src={banner} alt="banner de guantes" />
        </Link>
        <Link to="products/64d80751ac95a9aa7c386951">
          <img  className='banner my-2' src={banner2} alt="banner de camperas" />
        </Link>
      </div>
    </div>
  );
}

export default Sales;

