import React from 'react'
import moto1 from '../assets/images/moto1.jpg';
import '../styles/Sales.css'
function Sales() {
  return (
    <div className="wrapper mt-4">
        <div className="row-one">
          <div className="img-product">
            <img src={moto1} alt="moto1" className="img-product "></img>
          </div>
          <div className="description-product">
            <p className="text-product">Moto G5 Plus</p>
          </div>
        </div>

      <div className="row-two">
        <div className="description-product">
          <p className="text-product">Moto G5 Plus</p>{" "}
        </div>
        <div className="img-product">
          <img src={moto1} alt="moto1" className="img-product"></img>
        </div>
      </div>
      <div className="col-one">
        <img src={moto1} alt="moto1" className="img-product"></img>
      </div>
    </div>
  );
}

export default Sales;

{
  /* <img src={moto1} alt='moto1' className='img-product'></img> 
                    <p className='text-product'>Moto G5 Plus</p></div> */
}
        