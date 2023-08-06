
import { ItemProduct } from "./ItemProduct";
import BreadcrumbPages from "./Breadcrumb";

export const ListProduct = (props) =>{
const {products} = props
console.log("lista de productos", props)

    return(
        <>
        <div>
            <BreadcrumbPages/>
        <h1 className="about-title">Tienda</h1>
        <div className="d-flex justify-content-center row">
        {products.map((product, index) => {
                
                return (
                   
                    <ItemProduct key={index} product={product}/>
                );
            })}
        </div>
        </div>
        </>
    )
}