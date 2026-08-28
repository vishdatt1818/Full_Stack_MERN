import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { clear, getIsLogin } from '../../../services/AuthServices'
import toast from "react-hot-toast";

const AdminHeader = () => {



    // const isLogin =getIsLogin()

    const nav=useNavigate()
    // const location = useLocation()
    
    
    const [isLogin, setIsLogin] = useState();

    function isLgoin(){
      setIsLogin(Boolean(getIsLogin()))
    }
    
    console.log(isLogin);
  const logoutBtn = () =>{

    clear()
    setIsLogin(false)
    // console.log("hejjj");
    // console.log(typeof isLogin);
    // console.log( isLogin);
    
     toast.success("Logout Successfully")
     nav("/login")


    
    
    // clear()
  }

  // useEffect(() => {
  //   setIsLogin(Boolean(getIsLogin()))
  // }, [location.pathname])

  useEffect(() => {
    isLgoin()
  })

  return (
    <>
      {/* START PRELOADER */}
      {/* <div className="preloaders">
        <span className="loader" />
      </div> */}
      {/* END PRELOADER */}

      {/* START NAVBAR */}
      <div id="navigation" className="navbar-light bg-faded site-navigation">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* LOGO COLUMN */}
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="site-logo">
                <Link to="/">
                  <img src="assets/img/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>

            {/* NAVIGATION MENU COLUMN */}
            <div className="col-xl-7 col-lg-9 d-flex justify-content-center">
              <nav id="main-menu">
                <ul>
                  <li className="">
                    <Link to="/admin">Dashboard</Link>
                   
                  </li>
                  {
                    isLogin ?

                  <li>
                    <button className='btn fw-bold' onClick={logoutBtn}>LOGOUT</button>
                  </li>:
                  <li>
                    <Link to="/login">Login</Link>
                  </li>

                  }
                  
                  
                  
                  <li>
                    <Link to="/admin/managecategory">Manage Category</Link>
                  </li>
                  <li>
                    <Link to="/admin/addcate">Add Category</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* BUTTONS COLUMN (FIXED & ALIGNED) */}
            <div className="col-xl-3 d-none d-xl-flex justify-content-end align-items-center gap-3">
              {!isLogin && (
                <>
                  <Link to="/login" className="header-btn">
                    Sign In
                  </Link>
                  <Link to="/signup" className="btn_one">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* END NAVBAR */}
    </>
  )
}

export default AdminHeader



// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { clear, getIsLogin } from '../../../services/AuthServices'
// import toast from "react-hot-toast";

// const Header = () => {
//   // Use React state to trigger UI re-renders on login state changes
//   const [isLogin, setIsLogin] = useState(() => Boolean(getIsLogin()));
//   const navigate = useNavigate();

//   const logoutBtn = () => {
//     clear(); // Clear storage / tokens
//     setIsLogin(false); // Update local state so UI updates immediately
//     toast.success("Logout Successfully");
//     navigate('/login'); // Redirect user to login page
//   }

//   return (
//     <>
//       <div id="navigation" className="navbar-light bg-faded site-navigation">
//         <div className="container-fluid">
//           <div className="row align-items-center">
//             {/* LOGO COLUMN */}
//             <div className="col-xl-2 col-lg-3 col-6">
//               <div className="site-logo">
//                 <Link to="/">
//                   <img src="assets/img/logo.png" alt="Logo" />
//                 </Link>
//               </div>
//             </div>

//             {/* NAVIGATION MENU COLUMN */}
//             <div className="col-xl-7 col-lg-9 d-flex justify-content-center">
//               <nav id="main-menu">
//                 <ul>
//                   <li>
//                     <Link to="/">Home</Link>
//                   </li>

//                   {isLogin ? (
//                     <li>
//                       <button className='btn' onClick={logoutBtn}>Logout</button>
//                     </li>
//                   ) : (
//                     <li>
//                       <Link to="/login">Login</Link>
//                     </li>
//                   )}
                  
//                   <li>
//                     <Link to="/contact">Contact</Link>
//                   </li>
//                   <li>
//                     <Link to="/news">News</Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             {/* BUTTONS COLUMN */}
//             <div className="col-xl-3 d-none d-xl-flex justify-content-end align-items-center gap-3">
//               {!isLogin ? (
//                 <>
//                   <Link to="/login" className="header-btn">
//                     Sign In
//                   </Link>
//                   <Link to="/signup" className="btn_one">
//                     Sign Up
//                   </Link>
//                 </>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Header