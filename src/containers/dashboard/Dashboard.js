import React,{useState, useEffect} from "react";
import {Outlet} from 'react-router-dom';

const Dashboard = () =>{
    return(
        <div>
            Dashboard 
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;