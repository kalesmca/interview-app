import React,{useState, useEffect} from "react";
import Header from "../header/HeaderComponent";
import {Outlet} from 'react-router-dom';
const Layout = () =>{
    return(
        <div>
            <Header />

            Layout 


            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;