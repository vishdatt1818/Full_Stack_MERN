import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import Layout from './Components/Customer/Layout/Layout'
import Home from './Components/Customer/Pages/Home';
import About from './Components/Customer/Pages/About';
import Services from './Components/Customer/Services/Services';
import Pricing from './Components/Customer/Pricing/Pricing';
import Team from './Components/Customer/Team/Team';
import Loign from './Components/Customer/Pages/Loign';
import Contact from './Components/Customer/Pages/Contact';



import AdminLayout from './Components/Admin/Layout/AdminLayout';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import AddBarberServices from './Components/Admin/AddBarberServices/AddBarberServices';
import AddBarber from './Components/Admin/AddBarberServices/AddBarber';
import AddService from './Components/Admin/AddBarberServices/AddService';
import Customer from './Components/Admin/Customer/Customer';
import AddCustomer from './Components/Admin/Customer/AddCustomer';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/price' element={<Pricing/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Loign/>}></Route>
      
      </Route>

    {/* Admin panel */}
      <Route path='/admin' element={<AdminLayout/>}>
        <Route path='/admin' element={<Dashboard/>}></Route>
        <Route path='/admin/barbers' element={<AddBarberServices/>}></Route>
        <Route path='/admin/barberservice' element={<AddBarber/>}></Route>
        <Route path='/admin/service' element={<AddService/>}></Route>
        <Route path='/admin/customer' element={<Customer/>}></Route>
        <Route path='/admin/addcustomer' element={<AddCustomer/>}></Route>


      </Route>

      </Routes>
      </BrowserRouter>

       <ToastContainer/>

    </>
  )
}

export default App
