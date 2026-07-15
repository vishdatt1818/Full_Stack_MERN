import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import Layout from './Components/Customer/Layout/Layout'
import Home from './Components/Customer/Pages/Home';
import About from './Components/Customer/Pages/About';
import Pricing from './Components/Customer/Pricing/Pricing';
import Team from './Components/Customer/Team/Team';
import Loign from './Components/Customer/Pages/Loign';
import Contact from './Components/Customer/Pages/Contact';
import Category from './Components/Customer/Category/Category';
import Services from './Components/Customer/Category/Services';



import AdminLayout from './Components/Admin/Layout/AdminLayout';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import AddBarberServices from './Components/Admin/AddBarber/ManageBarberServices';
import AddBarber from './Components/Admin/AddBarber/AddBarber';
import AddService from './Components/Admin/AddService/AddService';
import Customer from './Components/Admin/Customer/ManageCustomer';
import AddCustomer from './Components/Admin/Customer/AddCustomer';
import EditCustomer from "./Components/Admin/Customer/EditCustomer"
import EditBarber from './Components/Admin/AddBarber/EditBarber';
import ManageService from './Components/Admin/AddService/ManageService';
import ManageCategory from './Components/Admin/AddCategory/ManageCategory';
import AddCategory from './Components/Admin/AddCategory/AddCategory';
import EditCategory from './Components/Admin/AddCategory/EditCategory';
import EditService from './Components/Admin/AddService/EditService';
import SignUp from './Components/Customer/Pages/SignUp';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/price' element={<Pricing/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Loign/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      
      </Route>

    {/* Admin panel */}
      <Route path='/admin' element={<AdminLayout/>}>
        <Route path='/admin' element={<Dashboard/>}></Route>
        <Route path='/admin/barbers' element={<AddBarberServices/>}></Route>
        <Route path='/admin/barberservice' element={<AddBarber/>}></Route>
        <Route path='/admin/service' element={<AddService/>}></Route>
        <Route path='/admin/customer' element={<Customer/>}></Route>
        <Route path='/admin/addcustomer' element={<AddCustomer/>}></Route>
        <Route path='/admin/editcustomer/:id' element={<EditCustomer/>}></Route>
        <Route path='/admin/editbarber/:id' element={<EditBarber/>}></Route>
        <Route path='/admin/manageservice' element={<ManageService/>}></Route>
        <Route path='/admin/managecategory' element={<ManageCategory/>}></Route>
        <Route path='/admin/category' element={<AddCategory/>}></Route>
        <Route path='/admin/editcategory/:id' element={<EditCategory/>}></Route>
        <Route path='/admin/editservice/:id' element={<EditService/>}></Route>


      </Route>

      </Routes>
      </BrowserRouter>

       <ToastContainer/>

    </>
  )
}

export default App
