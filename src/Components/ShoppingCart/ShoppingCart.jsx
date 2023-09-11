import "./ShoppingCart.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ProductsContext } from "../../Context/Context";
import ShoppingCartCard from "../ShoppingCartCard/ShoppingCartCard";
import { TotalPrice } from "../../Utils";
import { Link } from "react-router-dom"

function ShoppingCart(){
    const {products,setProducts
        ,closeIsShoppingCartOpen
        ,isShoppingCartOpen
        ,orders
        ,setOrders} = useContext(ProductsContext);   
    const handleCheckout = ()=>{
        const order = {
            totalPrice:TotalPrice(products),
            totalProducts:products.length,
            date:"08/092023",            
            products:products
        }

        setOrders([...orders,order]);
        setProducts([]);
        closeIsShoppingCartOpen()

    }
    return (
        <aside className={ `${isShoppingCartOpen ? `flex`:`hidden`} shopping-cart flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center px-6 py-3">
                <h2 className="font-medium text-xl">Shopping Cart</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={closeIsShoppingCartOpen} />
                </div>            
            </div>
            <div className="px-6 overflow-y-auto flex-1">
                {
                    products?.map(item=>{
                        return (<ShoppingCartCard key={item.id} product={item} deletable={true}></ShoppingCartCard>)
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
            <div className="px-6 py-3">
                <Link to="/my-order/last">
                    <button className="w-full bg-black py-3 text-white rounded-lg" onClick={()=>handleCheckout()}>CheckOut</button>
                </Link>
            </div>
          </aside>
    )
}
export default ShoppingCart;