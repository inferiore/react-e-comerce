import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../Context/Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Nav(){
    const classUnderline = "underline underline-offset-2";
    const {products,openIsShoppingCartOpen,setSearchProductByCategory,productFilterByCategory} = useContext(ProductsContext);
    const handleFilterByCatgory = (category) =>{
        setSearchProductByCategory(category)
        
    }
    return (
        <nav className="flex justify-between items-center top-0 fixed z-1 w-full py-1 px-5 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Shopi</NavLink>
                </li>
                <li>
                    
                    <NavLink to="/"
                    onClick={()=>handleFilterByCatgory("all")}
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    >All</NavLink>
                </li>
                <li>
                    <NavLink 
                     onClick={()=>handleFilterByCatgory("clothes")}
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    to="/clothes">Clothes</NavLink>
                </li>
                <li>
                    <NavLink
                     onClick={()=>handleFilterByCatgory("electronics")}
                    className={({ isActive }) => isActive ? classUnderline : ""} 
                    to="/electronics">Electronics</NavLink>
                </li>
                <li>
                    <NavLink
                     onClick={()=>handleFilterByCatgory("furniture")}
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    to="/furnitures">Furnitures</NavLink>
                </li>
                <li>
                    <NavLink 
                     onClick={()=>handleFilterByCatgory("toy")}
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    to="/toys">Toys</NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={()=>handleFilterByCatgory("others")}
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    to="/others">Other</NavLink>
                </li>                
            </ul>
            <ul className="flex gap-3 items-center">
                <li className="text-black/60">eder@online.com</li>
                <li> <NavLink 
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    to="my-orders"
                    >My Orders
                    </NavLink>
                    </li>
                <li>
                <NavLink 
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    to="my-account"
                    >
                    My Account
                </NavLink></li>
                <li>Sign In</li>
                <li className="flex items-center" onClick={()=>openIsShoppingCartOpen()}> 
                    <ShoppingCartIcon className="h-6 w-6 text-black-500"/>
                    {products.length}
                </li>
            </ul>
        </nav>
    )
}
 export default Nav;