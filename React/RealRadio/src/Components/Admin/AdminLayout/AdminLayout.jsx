// import React, { useEffect } from 'react'
// import AdminHeader from './AdminHeader'
// import AdminFooter from './AdminFooter'
// import { Outlet, Navigate, useNavigate } from 'react-router-dom'

// const AdminLayout = ({value}) => {

//       const nav = useNavigate();
  
//   const isAuthenticated = localStorage.getItem("email") && localStorage.getItem("password") && localStorage.getItem("id") === String(value);
  


//   useEffect(() => {
//     if (!isAuthenticated) {
//       nav("/login");
//     }
//   }, [isAuthenticated, nav]);


//   return (
//     <>
//       <AdminHeader />
//       <Outlet />
//       <AdminFooter />
//     </>
//   )
// }

// export default AdminLayout



// import React, { useEffect, useState } from 'react'
// import AdminHeader from './AdminHeader'
// import AdminFooter from './AdminFooter'
// import { Outlet, Navigate } from 'react-router-dom'

// const AdminLayout = ({ value }) => {
//   // Helper to check current authentication state
//   const checkAuth = () => {
//     const hasEmail = Boolean(localStorage.getItem("email"));
//     const hasPassword = Boolean(localStorage.getItem("password"));
//     const matchesId = localStorage.getItem("id") === String(value);

//     return hasEmail && hasPassword && matchesId;
//   };

//   const [isAuthenticated, setIsAuthenticated] = useState(checkAuth);

//   useEffect(() => {
//     // 1. Listen for changes made in OTHER tabs/windows
//     const handleStorageChange = (e) => {
//       if (e.key === 'id' || e.key === 'email' || e.key === 'password') {
//         setIsAuthenticated(checkAuth());
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);

//     // 2. Poll every 1 second to catch DevTools changes in the CURRENT tab
//     const intervalId = setInterval(() => {
//       const currentAuth = checkAuth();
//       if (!currentAuth) {
//         setIsAuthenticated(false);
//       }
//     }, 1000);

//     // 3. Re-check when user switches back to this tab
//     const handleFocus = () => {
//       setIsAuthenticated(checkAuth());
//     };
//     window.addEventListener('focus', handleFocus);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//       window.removeEventListener('focus', handleFocus);
//       clearInterval(intervalId);
//     };
//   }, [value]);

//   // Redirect to login if ID is missing or tampered with
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return (
//     <>
//       <AdminHeader />
//       <Outlet />
//       <AdminFooter />
//     </>
//   )
// }

// export default AdminLayout





import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import { Outlet, Navigate } from 'react-router-dom';

const AdminLayout = ({ value }) => {
  const checkAuth = () => {
    return (
      // Boolean(localStorage.getItem("email")) &&
      // Boolean(localStorage.getItem("password")) &&
      localStorage.getItem("id") === String(value)
    );
  };

  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(checkAuth());
    };

    
    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, [value]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </>
  );
};

export default AdminLayout;