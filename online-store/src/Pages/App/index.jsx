import {BrowserRouter, useRoutes} from "react-router-dom";
import { ProductsProvider, ProductsContext } from "../../Context/Context";
import './App.css'
import Home from "../Home/Home"
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import NotFound from "../NotFound/NoFound";
import SingIn from "../SignIn/SignIn";
import Nav from "../../Components/Nav/Nav";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCart";
const AppRoutes = ()=>{
    
  let routes = useRoutes([
    {   path:"/",             element:<Home/>     },    
    {   path:"/clothes",      element:<Home/>     },
    {   path:"/electronics",  element:<Home/>     },
    {   path:"/furnitures",   element:<Home/>     },
    {   path:"/toys",         element:<Home/>     },
    {   path:"/others",       element:<Home/>     },
    {   path:"my-order",      element:<MyOrder/>  },
    {   path:"my-order/*",    element:<MyOrder/>  },
    {   path:"my-orders",     element:<MyOrders/> },
    {   path:"my-order/last", element:<MyOrder/> },
    {   path:"my-account",    element:<MyAccount/>},
    {   path:"sign-in",       element:<SingIn/>   },
    {   path:"/*",            element:<NotFound/> }
  ]);  

  return routes;
}

function App() {

  return (
    <ProductsProvider>
      <BrowserRouter>        
        <AppRoutes/>
        <ShoppingCart></ShoppingCart>
        <Nav></Nav>          
      </BrowserRouter>
    </ProductsProvider>
  )
}

export default App
