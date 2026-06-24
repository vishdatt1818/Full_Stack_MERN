import AdminFooter from "./AdminFooter"
import AdminHeader from "./AdminHeader"
import { Outlet } from "react-router-dom"


export default function AdminLayout(){
    return(
        <>
        <AdminHeader></AdminHeader>

        <Outlet></Outlet>


        <AdminFooter></AdminFooter>
        </>
    )
}