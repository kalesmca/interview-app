import React,{useState, useEffect,useContext} from "react";
import {Outlet} from 'react-router-dom';
import { myContext } from "../../components/layout/Layout";
const Dashboard = () =>{
    const {name, myFunction} = useContext(myContext);
    console.log("Dashboard");
    console.log("name=", name);
    return(
        <div>
            Dashboard
            <div>
                <button onClick={()=>{myFunction()}}>Context Function trigger</button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;