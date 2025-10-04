import React,{useState, useEffect} from "react";
import {Outlet} from 'react-router-dom';
import CardComponent from "../../components/Card/cardComponent";
const menuList = [
    {
        name:"Briyani",
        price:200,
        rating:3
    },
    {
        name:"Purota",
        price:60,
        rating:4
    },
    {
        name:"Panner",
        price:300,
        rating:5
    },
    {
        name:"Gril",
        price:220,
        rating:4
    }

]

const Dashboard = () =>{
    console.log("Dashboard");
    return(
        <div>
            Menu 
            <div>
                {menuList.map((data, index)=>{
                   return <CardComponent item={data}/>
                })}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;