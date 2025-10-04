import React, { useState, useEffect, createContext } from "react";
import Header from "../header/HeaderComponent";
import { Outlet } from 'react-router-dom';
import ErrorBoundary from "../ErrorBoundary";
export const myContext = createContext();
const Layout = () => {
    const myFunction = () =>{
        console.log("My Function called");
    }
    return (
        <div>
            <Header />
            Layout
            {/* <ErrorBoundary> */}
            <myContext.Provider value={{name:"kaleeswaran", myFunction}}>
                <div>
                    <Outlet />
                </div>
            </myContext.Provider>

            {/* </ErrorBoundary> */}
        </div>
    )
}

export default Layout;