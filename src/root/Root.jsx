import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/home/Navbar";


const Root = () => {
    useEffect(() => {
        initFlowbite();
    })
    return (
        
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;