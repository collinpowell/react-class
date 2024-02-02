import "./App.css";
import HomePage from "./pages/Homepage";
import ProductPage from "./pages/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="product" element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
