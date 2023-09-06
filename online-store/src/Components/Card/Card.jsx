import { useContext } from "react";
import { ProductsContext } from "../../Context/Context";
import { PlusIcon } from "@heroicons/react/20/solid"
import { CheckIcon } from "@heroicons/react/20/solid"


function Card({product}){
    const {addProduct,onSetProduct, openIsDetailOpen,productIds} = useContext(ProductsContext);
   
    const onAddProduct = (product)=>{
        addProduct(product);
    }
    const renderIcon = (product)=>{
        if(productIds.indexOf(product.id) === -1){
            return (
                <div onClick={()=> onAddProduct(product) } className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-1">  
                    <PlusIcon className="h-6 w-6 text-white-500"/> 
                </div>
            );
        }else{
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-1">  
                    <CheckIcon className="h-6 w-6 text-white"/> 
                </div>
            ); 
        }
    }

    const onClickProduct = (product)=>{
        onSetProduct(product);
        openIsDetailOpen();
    }
      return (
        <div className="flex-1 bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5">
                    {product.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" 
                    onClick={()=>onClickProduct(product)}
                    src={product.images[0]} alt={product.description} />
                    {renderIcon(product)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{product.title}</span>
                <span className="text-lg font-medium">$ {product.price}</span>
            </p>
        </div>
    );
}

export default Card;