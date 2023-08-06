import { useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductDetail } from "./ProductDetail";
import { ProductContext } from "./ProductContext";
import BreadcrumbPages from "./Breadcrumb";

export const ProductDetailContainer = () => {
  const { id } = useParams();
  const location = useLocation();
  const getProductContextValue = useContext(ProductContext);

  const { products,} = getProductContextValue();

  console.log("container", products)

 
  const filterProductById = (productId) => {
    return products.find((product) => product.id === parseInt(productId));
  };

 
  const product =
    location.state?.product || (id ? filterProductById(id) : null);

  return (
    <div className="container">
      <BreadcrumbPages/>
      <h3 className="text-start fw-light">DETALLES DEL PRODUCTO</h3>
    
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <p>El producto no se encuentra o no existe.</p>
      )}
    </div>
  );
};
