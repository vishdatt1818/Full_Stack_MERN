import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Components/Pages/Counter";
import Form from "./Components/Pages/Form";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/counter" element = {<Counter/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;