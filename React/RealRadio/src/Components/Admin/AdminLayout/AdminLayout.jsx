import React from 'react'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'

const AdminLayout = () => {

      const nav = useNavigate();
  // Check if credentials/auth exist
  const isAuthenticated = localStorage.getItem("email") && localStorage.getItem("password") && localStorage.getItem("id");
  // If using the isAdmin flag: const isAuthenticated = localStorage.getItem("isAdmin") === "true";

  // Redirect immediately if not authenticated
  if (!isAuthenticated) {
    // return <Navigate to="/login" replace />;
    return nav("/login")
  }

  return (
    <>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </>
  )
}

export default AdminLayout