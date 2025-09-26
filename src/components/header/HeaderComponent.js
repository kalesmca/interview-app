import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Dashboard from '../../containers/dashboard/Dashboard';

const Header = () => {
  return (
    <div>
      Header
      <div>
          <nav>
            <Link to="/">Home</Link> | <Link to="/list">User-List</Link> |{" "}
            <Link to="/dashboard">Dashboard</Link>|{" "}
            <Link to="/create">Create</Link>|{" "}
            <Link to="/counter">Counter</Link>|{" "}
            <Link to="/dashboard/profile">Profile</Link>
          </nav>
      </div>
    </div>
  );
};

export default Header;
