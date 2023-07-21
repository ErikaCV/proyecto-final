import { ItemProduct } from "./ItemProduct";

export const ListProduct = (props) =>{
const {products} = props
console.log("lista de productos", props)

    return(
        <>
        <h1>Lista de Productos</h1>
        <div className="d-flex justify-content-center row">
        {products.map((product, index) => {
                
                return (
                   
                    <ItemProduct key={index} product={product}/>
                );
            })}
        </div>
        </>
    )
}