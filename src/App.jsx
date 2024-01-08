import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

export default function App() {
  return(
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/produto/:productName" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}