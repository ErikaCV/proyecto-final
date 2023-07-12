
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { ApiPrueba } from "./ApiPrueba";


export const SearchBar = () =>{
    const [Search, setSearch] = useState ('')
    const [ResultSearch, setResultSearch] = useState([])

    const Prueba = ApiPrueba

  
         
    const handleSearch = (event) =>{
        const value = event.target.value.toLowerCase().trim()
        setSearch(value);

        const productosFiltrados = Prueba.filter(producto =>
            producto.title.toLocaleLowerCase().includes(value)
            );

        setResultSearch(productosFiltrados)
    }

    const shouldShowResults = Search !== '';
    
return(
    <>
    <Form.Control
    onChange={handleSearch}
    type="search"
    placeholder=""
    className=" border-0 bg-light"
    aria-label="Search" 
  />
        {shouldShowResults && (
        <div className=" bg-white rounded text-center  boxSearch">
        {ResultSearch.length > 0 ? (
            <ul>
            {ResultSearch.map((product, index) => (
            <li key={index}>{product.title}</li>
          ))}
          </ul>):(
            <p>No existe</p>
          )} 
        
    
         </div>)}


</>
  
);

}