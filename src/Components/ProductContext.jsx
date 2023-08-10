import React, { createContext, useState, useEffect } from 'react';
import { getData } from '../Utils/Function';
import { API_PRACTICE } from '../Utils/Constants';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  console.log("contextProducts", products)

 // const URL = API_PRACTICE.FAKESTOREAPI_PRODUCTS;
  const URL = 'http://localhost:5000/api';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getData(`${URL}/products`);
        const data = response.getProducts;
        console.log("data", data)
        const transformedProducts = data.map(product => ({
          id: product._id, // 
          title: product.title,
          category: product.category,
          description: product.description,
          price: product.price,
          stock: product.stock,
          image:product.photo,
          
        }));

        setProducts(transformedProducts);
        console.log("api response",data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      const res = await fetch(`${URL}/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.ok) {
        
        setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
        console.log('Producto eliminado correctamente.');
      } else {
        console.error('Error al eliminar el producto:', res.statusText);
      }
    } catch (error) {
      console.error('Error en la petición de eliminación:', error);
    }
  };


  const editProduct = async (productId, updatedProduct) => {
    try {
      const res = await fetch(`${URL}/products/edit-product/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
      });
  
      if (res.ok) {
  
        console.log('Producto actualizado:', updatedProduct);
      } else {
      
        console.error('Error al actualizar el producto:', res.statusText);
      }
    } catch (error) {
      console.error('Error en la petición de actualización:', error);
    }
  };
  
  const addProduct = async (formData) => {

    console.log("GREKÑKA", formData)
    try {
      const res = await fetch(`${URL}/products/create-product`, {
        method: 'POST',
        body: formData, 
      });
  
      if (res.ok) {
        console.log('Producto creado correctamente');
      } else {
        console.error('Error al crear el producto:', res.statusText);
      }
    } catch (error) {
      console.error('Error en la petición de creación:', error);
    }
  };
  
  const getProductContextValue = () => ({
    products,
    deleteProduct,
    editProduct,
    addProduct
  });

  return (
    <ProductContext.Provider value={getProductContextValue}>
      {children}
    </ProductContext.Provider>
  );
};
