import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ProductsContext } from "../../Context/Context";

function OrdersCard({totalPrice,totalProducts}){
    const {orders} = useContext(ProductsContext);
    
    return (
    <div className="flex m-3 w-80 h-15 rounded-lg bg-white border border-black">
        <div className="flex justify-between items-center w-full">
            <div className="flex flex-col text-sm font-medium m-5" >
                <span>01.02.2023</span>
                <span>{totalProducts} Products</span> 
            </div>
            <div className="flex items-center mr-5 gap-1">
                <span className="font-medium text-xl">
                    ${totalPrice}
                </span>
                <ChevronRightIcon className="h-6 w-6 text-black"/>
            </div>
        </div>
    </div>
    )
}
export default OrdersCard;