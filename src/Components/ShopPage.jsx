import { ListProduct } from "./ListProduct";
import { ProductContext } from "./ProductContext";
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

export const ShopPage = ({ category: propCategory }) => {
  const products = useContext(ProductContext);
  const { category: urlCategory } = useParams();

  console.log("categoria", propCategory)
  const selectedCategory = propCategory || urlCategory;
  


  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory.toLowerCase())
    : products;
   

  return (
    <>
      <div className="container-fluid">
        <ListProduct products={filteredProducts} />
      </div>
    </>
  );
};
