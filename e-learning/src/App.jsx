
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Customer/Layout/Layout';
import Home from './Components/Customer/Home/Home';
import About from './Components/Customer/About/About';
import Courses from './Components/Customer/Courses/Courses';

function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>

         <Route path='/' element={<Layout/>}>
         <Route path="/" element={<Home />}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/courses" element={<Courses />}></Route>
         
         </Route>


        </Routes>
      </BrowserRouter>
    </>
  
  )
}

export default App
