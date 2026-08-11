import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Components/Pages/Counter";
import Form from "./Components/Pages/Form";
import Layout from "./Components/Customer/Layout/Layout";
import FormHook from "./Components/Pages/FormHook";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import TicToe from "./Components/Pages/TicToe";
import User from "./Components/Pages/User";
import Count from "./Components/Pages/Count";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element = {<Home/>} />
        <Route path="/counter" element = {<Counter/>} />
        <Route path="/formhook" element = {<FormHook/>} />
        <Route path="/form" element = {<Form/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/TicToe" element = {<TicToe/>} />
        <Route path="/User" element = {<User/>} />
        <Route path="/count" element = {<Count/>} />
        
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;