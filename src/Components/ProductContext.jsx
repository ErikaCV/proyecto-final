import React, { createContext, useState, useEffect } from 'react';
import { getData } from '../Utils/Function';
import { API_PRACTICE } from '../Utils/Constants';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
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

  return (
    <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
  );
};
