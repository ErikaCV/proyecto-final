import React, { createContext, useState, useEffect } from 'react';
import { getData } from '../Utils/Function';
import { API_PRACTICE } from '../Utils/Constants';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  console.log("contextProducts", products)

  const URL = API_PRACTICE.FAKESTOREAPI_PRODUCTS;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getData(URL);
        const data = response;
        setProducts(data);
        console.log("api response",data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = (productId) => {
    // const deleteProductInDatabase = (idProduct) => {}
    //fetch("http://localhost:4002/delete-product/idProduct", {
//  method: "DELETE"
// })
// }
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const editProduct = (productId, updatedProduct) => {
    // fetch("http://localhost:4002/edit-product/6c45879s54d874", {
 // method: "PUT"
// })
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  const addProduct = (newProduct) => {
    // fetch.post{}
    // fetch("http://localhost:4002/api/create-product

    console.log("agregando producto", newProduct)
    setProducts([...products, newProduct]);
    console.log("productos actualizados", products)
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
