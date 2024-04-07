import React from "react";
import "../styles/dashboard.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="jumbotron jumbotron-fluid container">
      {/* <h1>Junmkamdk</h1> */}
        <div className="dashboardpic">
          <img src="/DF_logo.png" className="dflogo" alt="" />
          <h2 className=" text-dark">Welcome to DigitalFlake Admin</h2>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
