import { useContext } from "react";
import { ProductsContext } from "../../Context/Context";
import Layout from "../../Components/Layout/Layout";
import OrdersCard from "../../Components/OrderCard/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";


function MyOrders(){
    const {orders} = useContext(ProductsContext);
    return (

        <Layout>
            <div className="flex relative w-80  justify-center items-center">
                <Link className="absolute left-0" to="/my-order">    
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"></ChevronLeftIcon>
                </Link>
                <p>My Orders</p>
            </div>
            {
                orders.map((order,index)=>(
                    <Link key={index} to={`/my-order/${index}`}>
                        <OrdersCard  
                            totalPrice={order.totalPrice} 
                            totalProducts={order.totalProducts}>
                        </OrdersCard>
                    </Link>
                    ))
            }
        </Layout>
    );   
}

export default MyOrders;