
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/User/Layout/Layout'
import Home from './Components/User/Pages/Home'
import Login from './Components/User/Pages/Login'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
