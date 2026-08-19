import React from 'react'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
   <>
        <AdminHeader></AdminHeader>

        <Outlet></Outlet>
        <AdminFooter></AdminFooter>
        </>
  )
}

export default AdminLayout
