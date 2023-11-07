import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/home/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
    useEffect(() => {
        initFlowbite();
    })
    return (
        
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Toaster></Toaster>
        </div>
    );
};

export default Root;