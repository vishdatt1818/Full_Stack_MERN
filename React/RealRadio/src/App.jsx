
import { BrowserRouter, createContext, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/User/Layout/Layout'
import Home from './Components/User/Pages/Home'
import Login from './Components/User/Pages/Login'
import AdminLayout from './Components/Admin/AdminLayout/AdminLayout'
import Dashboard from './Components/Admin/Dashboard/Dashboard'
import AddSong from './Components/Admin/AddSong/AddSong'
import { useEffect } from 'react'

const AuthContext = createContext(null);

function App() {

//   export const AuthProvider = ({ children }) => {
//   const [userId, setUserId] = useState(() => {
//     // Read from localStorage on initial load if available
//     return localStorage.getItem('userId') || null;
//   });

//   const saveUserId = (id) => {
//     setUserId(id);
//     if (id) {
//       localStorage.setItem('userId', id);
//     } else {
//       localStorage.removeItem('userId');
//     }
//   }
// }

const randId = Math.floor(1000+Math.random()*9000)
  // localStorage.setItem("id", randId)

 

  return (
    <>
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login value={randId}/>}></Route>
      </Route>

         <Route path='/admin' element={<AdminLayout value={randId}/>}>
      <Route path='/admin' element={<Dashboard value={randId}/>}></Route>
      {/* <Route path='/admin' element={<Dashboard/>}></Route> */}
      <Route path='/admin/addsong' element={<AddSong/>}></Route>
      </Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
