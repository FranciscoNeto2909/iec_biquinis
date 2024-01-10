import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { bikinis } from "./data/bikinis";
import Footer from "./components/footer/Footer";
import Message from "./components/message/Message";

export default function App() {
  const onSaleBikinis = bikinis.sort((a, b) => {
    const aHasOffer = a.onSale === true;
    const bHasOffer = b.onSale === true;

    if (aHasOffer && !bHasOffer) return -1;
    if (!aHasOffer && bHasOffer) return 1;
    return 0;
  });

  const [bikinisCategorie, setBikinisCategorie] = useState(onSaleBikinis)
  const [filteredBikinis, setFilteredBikinis] = useState(bikinisCategorie)
  const [msg, setMsg] = useState("")
  const [msgVisib, setMsgVisib] = useState(false)

  function handleSearch(text) {
    if (text === "") {
      setFilteredBikinis(bikinisCategorie)
    } else {
      setFilteredBikinis(bikinis.filter(bik => bik.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(text)))
    }
  }

  function handleSetMsg(text) {
    setMsgVisib(true)
    setMsg(text)
    setTimeout(() => {
      setMsgVisib(false)
      setMsg("")
    }, 1200);
  }

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart === null) {
      localStorage.setItem('cart', JSON.stringify([]))
    }

  }, [])

  useEffect(() => {
    setFilteredBikinis(bikinisCategorie)
  }, [bikinisCategorie])

  return(
    <div className="app">
      <Header handleSearch={handleSearch}/>
      {msgVisib && <Message msg={msg}/>}
      <Routes>
        <Route path="/" element={<Home bikinisCategorie={bikinisCategorie} setBikinisCategorie={setBikinisCategorie} filteredBikinis={filteredBikinis} setFilteredBikinis={setFilteredBikinis}/>}/>
        <Route path="/produto/:productName" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  )
}