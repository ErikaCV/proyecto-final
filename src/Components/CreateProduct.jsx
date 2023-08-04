import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from './ProductContext';
import { Button, Form } from 'react-bootstrap';

export const CreateProduct = () => {
    const getProductContextValue = useContext(ProductContext);

    const { products, addProduct } = getProductContextValue();
    console.log(addProduct, products)

  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: 0,
    image: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name, "value", value)
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  console.log(newProduct)
  const handleAddProduct = () => {
   
    addProduct(newProduct);
    setNewProduct({ title: '', description: '', price: 0, image: '', category: '' });
  };

  useEffect(() => {
    console.log("productos actualizados", products);
  }, [products]);

  return (
    <>
      <div className='container-fluid '>
      <Form className='border p-5 rounded shadow-lg row'>
      <h2 className='about-title text-start'>Agregar Nuevo Producto</h2>
        <Form.Group className="mb-3 col-6">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            placeholder="Ingrese el título"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-4">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            placeholder="Ingrese la categoría"
          />
           </Form.Group>
           <Form.Group className="mb-3 col-2">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Ingrese el precio"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-6">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder="Ingrese la descripción"
          />
        </Form.Group>
        <Form.Group className="mb-3 col-6">
          <Form.Label>URL de la imagen</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            placeholder="Ingrese la URL de la imagen"
          />
        </Form.Group>

        <Button  size='sm' className='col-6 bg-success' onClick={handleAddProduct}>Agregar Producto</Button>
      </Form>
      </div>
 
    </>
  )
};
