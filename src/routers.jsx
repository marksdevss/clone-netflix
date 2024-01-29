import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
        
    },
    {
        path:"/login",
        element:<Login/>

    }
])