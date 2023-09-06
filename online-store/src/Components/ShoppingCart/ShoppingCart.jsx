import "./ShoppingCart.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ProductsContext } from "../../Context/Context";
import ShoppingCartCard from "../ShoppingCartCard/ShoppingCartCard";
import { TotalPrice } from "../../Utils";


function ShoppingCart(){
    const {products
        ,closeIsShoppingCartOpen
        ,isShoppingCartOpen} = useContext(ProductsContext);   
    return (
        <aside className={ `${isShoppingCartOpen ? `flex`:`hidden`} shopping-cart flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center px-6 py-3">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={closeIsShoppingCartOpen} />
                </div>            
            </div>
            <div className="px-6 overflow-y-auto">
                {
                    products?.map(item=>{
                        return (<ShoppingCartCard key={item.id} product={item}></ShoppingCartCard>)
                        }
                    )
                }
            </div>
            <div className="px-6">
                <p className="flex justify-between items-center ">
                    <span className="font-light">Total :</span>
                    <span className="font-normal text-xl">$ {TotalPrice(products)}</span>                        
                </p>
            </div>
            <div>

            </div>
          </aside>
    )
}
export default ShoppingCart;