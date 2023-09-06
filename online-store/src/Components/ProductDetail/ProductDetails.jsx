import "./ProductDetails.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ProductsContext } from "../../Context/Context";


function ProductDetails(){
    const {product, openIsDetailOpen, closeIsDetailOpen, isDetailOpen,nextProductImage
        ,previousProductImage} = useContext(ProductsContext);   
    return (
        <aside className={ `${isDetailOpen ? `flex`:`hidden`}  product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center px-6 py-3">
                <h2 className="font-medium text-xl">Details</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={closeIsDetailOpen} />
                </div>            
            </div>
            <div className="flex justify-between h-full">
                <div className="hidden absolute left-0 bg-red-400 w-1/2" onClick={()=>previousProductImage()}>
                    {`<`}
                </div>
                <figure className="w-full p-6">                    
                    <img className="rounded-lg" src={product.currentImage} alt={product.title} />
                </figure>
                <div className="hidden absolute right-0 bg-red-400 w-1/2"  onClick={()=>nextProductImage()}>
                    {`>`}
                </div>
            
            </div>
            <p className="flex flex-col p-6 h-full">
                <span className="font-medium text-3xl">${product.price}</span>
                <span className="font-medium text-md" >{product.title}</span>                
                <span className="font-medium text-md">{product.description}</span>
            </p>
        </aside>
    )
}
export default ProductDetails;