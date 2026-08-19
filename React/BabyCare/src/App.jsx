
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Customer/Layout/Layout'
import Home from './Components/Customer/Pages/Home'
import About from './Components/Customer/Pages/About'
import Services from './Components/Customer/Pages/Services'
import Program from './Components/Customer/Pages/Program'
import Events from './Components/Customer/Pages/Events'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/program' element={<Program/>}></Route>
      <Route path='/events' element={<Events/>}></Route>
      

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
