import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import CardComponent from "../../components/Card/cardComponent";

import { myContext } from "../../components/layout/Layout";
const menuList = [
  {
    name: "Briyani",
    price: 200,
    rating: 3,
  },
  {
    name: "Purota",
    price: 60,
    rating: 4,
  },
  {
    name: "Panner",
    price: 300,
    rating: 5,
  },
  {
    name: "Gril",
    price: 220,
    rating: 4,
  },
];
const Dashboard = () => {
  const { name, myFunction } = useContext(myContext);
  console.log("Dashboard");
  console.log("name=", name);
  return (
    <div>
      Menu
      <div>
        {menuList.map((data, index) => {
          return <CardComponent item={data} />;
        })}
        Dashboard
        <div>
          <button
            onClick={() => {
              myFunction();
            }}
          >
            Context Function trigger
          </button>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
