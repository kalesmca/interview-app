import React, { useState, useEffect } from "react";
import Header from "../header/HeaderComponent";
import { Outlet } from 'react-router-dom';
import ErrorBoundary from "../ErrorBoundary";
const Layout = () => {
    return (
        <div>
            <Header />
            Layout
            <ErrorBoundary>
                <div>
                    <Outlet />
                </div>
            </ErrorBoundary>
        </div>
    )
}

export default Layout;