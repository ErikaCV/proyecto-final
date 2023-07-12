
import { FaOpencart } from "react-icons/fa";
import { useCompra } from "../Utils/Function";
import { useState } from "react";


export const IconCart = () =>{
 const {cantidadProductos } = useCompra();
 const [mostrarResumen, setMostrarResumen] = useState(false);

 const toggleResumen = () => {
    setMostrarResumen(!mostrarResumen);
  };


 
 /*<div><button className="rounded " onClick={comprar}>c</button></div>*/

    return(
        <>
    <div >
    <span className="iconCart badge  rounded-pill badge-notification bg-danger"> {cantidadProductos}</span>
        <FaOpencart className=' text-light fs-1 pt-3 pe-0 border-0  ' onClick={toggleResumen}/>
        {mostrarResumen && (
            <div className="resumenCarrito bg-light text-dark">
                <h4>Resumen del carrito</h4>
                <hr />
                <p>Nombre</p>
                <span>Precio</span>
            </div>
        )}
        
      
      </div>

     
        </>
    )
}