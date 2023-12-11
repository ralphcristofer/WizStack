import React from 'react';
import { Link } from "react-router-dom";
import { SideBar } from "./../../../components/Sidebar/Sidebar.jsx";

export const AdminDashboard = (...props) => {
    return (
        <div>
            <SideBar />
        </div>
    );
}

export default AdminDashboard;