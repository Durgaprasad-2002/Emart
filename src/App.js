import logo from "./logo.svg";
import Index from "./pages";
import ProductInfo from "./pages/ProductInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Index />} />
      <Route path="/product" element={<ProductInfo />} />
    </Routes>
  );
}

export default App;