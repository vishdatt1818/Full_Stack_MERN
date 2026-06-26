import Layout from './Components/Customer/Layout/Layout'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Customer/Home/Home';
import About from './Components/Customer/About/About';
import Services from './Components/Customer/Services/Services';

import AdminLayout from './Components/Admin/Layout/AdminLayout';
import Pricing from './Components/Customer/Pricing/Pricing';
import Team from './Components/Customer/Team/Team';
import Portfolio from './Components/Customer/Portfolio.jsx/Portfolio';
import Contact from './Components/Customer/Contact/Contact';
import Blog from './Components/Customer/Blog/Blog';
import Single from './Components/Customer/Single/Single';

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
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/single' element={<Single/>}></Route>

      </Route>

    {/* Admin panel */}
      <Route path='/admin' element={<AdminLayout/>}>


      </Route>

      </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
