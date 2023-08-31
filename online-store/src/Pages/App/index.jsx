import {BrowserRouter, useRoutes} from "react-router-dom"
import './App.css'
import Home from "../Home"
import MyAccount from "../MyAccount";

const AppRoutes = ()=>{
    
  let routes = useRoutes([
    {
        path:"/",
        element:<Home/>    
    },
    {
        path:"my-account",
        element:<MyAccount/>
    }
  ]);  
  return routes;
}

function App() {

  return (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
