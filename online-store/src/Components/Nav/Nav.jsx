import { React } from "react";
import { NavLink } from "react-router-dom";

function Nav(){
    const classUnderline = "underline underline-offset-2";
    return (
        <nav className="flex justify-between items-center top-0 fixed z-1 w-full py-1 px-5 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Shopi</NavLink>
                </li>
                <li>
                    <NavLink to="/"
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    >All</NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    to="/?clothes">Clothes</NavLink>
                </li>
                <li>
                    <NavLink
                    className={({ isActive }) => isActive ? classUnderline : ""} 
                    to="/?electronics">Electronics</NavLink>
                </li>
                <li>
                    <NavLink
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    to="/?Furnitures">Furnitures</NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    to="/toys">Toys</NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) => isActive ? classUnderline : ""}
                    to="/other">Other</NavLink>
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
                <li> Car [0] </li>
            </ul>
        </nav>
    )
}
 export default Nav;