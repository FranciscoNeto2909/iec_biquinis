import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { bikinis } from "./data/bikinis";
import Footer from "./components/footer/Footer";
import Message from "./components/message/Message";

export default function App() {
  const onSaleBikinis = bikinis.sort((a, b) => {
    const aHasOffer = a.onSale === true || a.colors.filter(col => col.inStock).length > 0;
    const bHasOffer = b.onSale === true || b.colors.filter(col => col.inStock).length > 0;

    if (aHasOffer && !bHasOffer) return -1;
    if (!aHasOffer && bHasOffer) return 1;
    return 0;
  });
  const navigate = useNavigate();
  
  const [bikinisCategorie, setBikinisCategorie] = useState(onSaleBikinis)
  const [filteredBikinis, setFilteredBikinis] = useState(bikinisCategorie)
  const [msg, setMsg] = useState("")
  const [msgVisib, setMsgVisib] = useState(false)
  const [isCartOpened, setIsCartOpened] = useState(false)
  const [productOpened, setproductOpened] = useState(false)

  function handleSearch(text) {
    if (text === "") {
      setFilteredBikinis(bikinisCategorie)
    } else {
      navigate("/")
      setFilteredBikinis(bikinis.filter(bik => bik.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(text)))
    }
  }

  function handleToggleCart() {
    setIsCartOpened(!isCartOpened)
  }

  function handleOpenedProduct(){
    if(window.innerWidth < 500){
      setproductOpened(true)
    }
  }

  function handleBackButton(){
    navigate("/")
    setproductOpened(false)
  }

  function handleSetMsg(text) {
    setMsgVisib(true)
    setMsg(text)
    setTimeout(() => {
      setMsgVisib(false)
      setMsg("")
    }, 2000);
  }
  
  useEffect(() => {
    setFilteredBikinis(bikinisCategorie)
  }, [bikinisCategorie])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart === null) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('popstate', () => setproductOpened(false));
    return () => {
      window.removeEventListener('popstate', () => setproductOpened(false));
    };
  }, []);

  return(
    <div className="app">
      <Header handleSearch={handleSearch} handleOpenCart={handleToggleCart} productOpened={productOpened} handleBackButton={handleBackButton}/>
      {msgVisib && <Message msg={msg}/>}
      <Routes>
        <Route path="/" element={<Home bikinisCategorie={bikinisCategorie} setBikinisCategorie={setBikinisCategorie} filteredBikinis={filteredBikinis} setFilteredBikinis={setFilteredBikinis}/>}/>
        <Route path="/produto/:productName" element={<Product handleSetMsg={handleSetMsg} handleOpenedProduct={handleOpenedProduct}/>}/>
      </Routes>
        {isCartOpened && <Cart handleCloseCart={handleToggleCart} handleSetMsg={handleSetMsg}/>}
      <Footer />
    </div>
  )
}