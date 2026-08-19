import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Components/User/UserLayout/Layout"
import Home from "./Components/User/Pages/Home"
import Login from "./Components/User/Pages/Login"
import AdminLayout from "./Components/Admin/Layout/AdminLayout"
import Dashboard from "./Components/Admin/Pages/Dashboard"
import ManageCustomers from "./Components/Admin/Pages/ManageCustomers"
import SignUp from "./Components/User/Pages/SignUp"




function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
    
      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
         <Route path='/signup' element={<SignUp/>}></Route>

        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
         <Route path='/admin' element={<Dashboard/>}></Route>
         {/* <Route path='/admin/managecustomers' element={<ManageCustomers/>}></Route> */}
        </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
