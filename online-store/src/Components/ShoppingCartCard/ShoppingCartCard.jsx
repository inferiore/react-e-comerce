
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ProductsContext } from "../../Context/Context";

function ShoppingCartCard({product}){
    const {deleteProduct} = useContext(ProductsContext);
    return (
    <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img src={product.currentImage} alt={product.title} className=" h-full w-full rounded-lg object-cover"/>        
            </figure>
            <p className="text-sm font-light">
                 {product.title}
            </p>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-sm font-medium" >
                 {product.price} 
            </p>
        </div>
        <div className="flex justify-between items-center">
            <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={()=>deleteProduct(product.id)}  />   
        </div>
        
    </div>
    )
}
export default ShoppingCartCard;