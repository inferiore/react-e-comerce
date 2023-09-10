import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { ProductsContext } from "../../Context/Context";
import ShoppingCartCard from "../../Components/ShoppingCartCard/ShoppingCartCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
function MyOrder(){
    const {orders} = useContext(ProductsContext);
    const currentPath =  window.location.pathname;
    const id = currentPath.substring((currentPath.lastIndexOf("/")+1),currentPath.length)
    let products = [];
    // console.log(id,!isNaN(id))
    if(isNaN(id)){
        products =  orders.slice(-1)[0].products;
    }else{
        products = orders[id]?.products;
    }
    return (
        <Layout>
             <div className="flex relative w-80  justify-center items-center">
                <Link className="absolute left-0" to="/my-orders">    
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"></ChevronLeftIcon>
                </Link>
                <p>My Order</p>
            </div>
            <div className="px-6 overflow-y-auto flex-1">
                {
                   products.map(item=>{
                        return (<ShoppingCartCard key={item.id} product={item} deletable={false}></ShoppingCartCard>)
                        }
                    )
                }
            </div>
        </Layout>
    );
}

export default  MyOrder;