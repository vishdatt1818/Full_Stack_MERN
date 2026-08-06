import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Components/Pages/Counter";
import Form from "./Components/Pages/Form";
import Layout from "./Components/Customer/Layout/Layout";
import FormHook from "./Components/Pages/FormHook";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/counter" element = {<Counter/>} />
        <Route path="/formhook" element = {<FormHook/>} />
        <Route path="/form" element = {<Form/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;