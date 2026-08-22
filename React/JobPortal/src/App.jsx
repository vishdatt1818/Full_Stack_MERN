import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Components/User/UserLayout/Layout"
import Home from "./Components/User/Pages/Home"
import Login from "./Components/User/Pages/Login"
import AdminLayout from "./Components/Admin/Layout/AdminLayout"
import Dashboard from "./Components/Admin/Pages/Dashboard"
import ManageCustomers from "./Components/Admin/Categories/ManageCustomers"
import SignUp from "./Components/User/Pages/SignUp"
import AddCategory from "./Components/Admin/Categories/AddCategory"
import { Toaster } from "react-hot-toast"
import UpdateCategory from "./Components/Admin/Categories/UpdateCategory"
import News from "./Components/User/Pages/News"




function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
    
      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
         <Route path='/signup' element={<SignUp/>}></Route>
         <Route path='/news' element={<News/>}></Route>

        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
         <Route path='/admin' element={<Dashboard/>}></Route>
         <Route path='/admin/managecustomers' element={<ManageCustomers/>}></Route>
         <Route path='/admin/addcate' element={<AddCategory/>}></Route>
         <Route path='/admin/updatecategory/:id' element={<UpdateCategory/>}></Route>
        </Route>
     </Routes>
     </BrowserRouter>

     <Toaster/>
    </>
  )
}

export default App
