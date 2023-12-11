import React from 'react';
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext.jsx";
import { AdminDashboard } from "./Admin_Dashboard/index.jsx";
import { UserDashboard } from "./Student_Dashboard/index.jsx";

export const BaseDashboard = () => {
    const { user, signout } = useUser();
    const isAdmin = user?.role === 'administrator';
    const isAuthenticated = !!user;

    return (
        <>
            <div className="">
                {!isAdmin && isAuthenticated ? (
                    <UserDashboard />
                ) : (
                    <AdminDashboard />
                )}
            </div>
        </>
    );
}

export default BaseDashboard;