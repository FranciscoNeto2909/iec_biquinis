import logo from "./assets/logo.png"
import Card from "./components/card/Card"
import Cart from "./components/cart/Cart"
import { bikinis } from "./data/bikinis"
import "./app.css"
import Modal from "./components/modal/Modal"
import { useState } from "react"
import { BiShoppingBag } from "react-icons/bi"

export default function App() {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isCartOpened, setIsCartOpened] = useState(false)
  const [modalItem, setModalItem] = useState([])
  const [cartItems, setCartItems] = useState([])


  function handleOpenModal(item) {
    setIsModalOpened(true)
    setModalItem(item)
    document.body.style.overflow = 'hidden';
  }


  function handleCloseModal() {
    setIsModalOpened(false)
    setModalItem([])
    document.body.style.overflow = 'auto';
  }

  function handleOpenCart() {
    setIsCartOpened(true)
    document.body.style.overflow = 'hidden';
  }

  function handleCloseCart() {
    setTimeout(() => {
      setIsCartOpened(false)
      document.body.style.overflow = 'auto';
    }, 1600);
  }

  function handleSetItemToCart(item) {
    setCartItems([...cartItems, item])
  }

  return (
    <div className="app">
      <header className="app_header">
        <img src={logo} alt="logo" className="app_logo" />
        {!isCartOpened &&
          <button className="app_header_cartbtn" onClick={handleOpenCart}>
            <BiShoppingBag size={32} />
          </button>
        }
      </header>
      <section className="app_banner">
        <p className="app_banner_text">
          <span className="app_banner_num">10% </span>
          de desconto no pix !</p>
      </section>
      <section className="app_container">
        {
          bikinis.map((bik, i) => (
            <Card bik={bik} key={i} handleOpenModal={handleOpenModal} />
          ))
        }
      </section>
      {isModalOpened && <Modal item={modalItem} handleCloseModal={handleCloseModal} handleSetItemToCart={handleSetItemToCart} />}
      {isCartOpened &&
        <Cart handleCloseCart={handleCloseCart} items={cartItems} />
      }
    </div>
  )
}

