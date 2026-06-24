import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./Components/Admin/Layout/AdminLayout";
import Users from "./Components/Admin/Users/Users";
import Home from "./Components/Admin/Home/Home";

import Layout from "./Components/Customer/Layout/Layout";
import CustomerHome from "./Components/Customer/Home/CustomerHome";
import Cart from "./Components/Customer/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<CustomerHome />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<Home />}></Route>
            <Route path="/admin/Users" element={<Users />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
