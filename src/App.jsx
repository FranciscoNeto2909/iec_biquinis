import { useEffect, useState } from "react"
import logo from "./assets/logo1.png"
import Card from "./components/card/Card"
import Cart from "./components/cart/Cart"
import { bikinis } from "./data/bikinis"
import Modal from "./components/modal/Modal"
import { BiShoppingBag } from "react-icons/bi"
import "./app.css"

export default function App() {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isCartOpened, setIsCartOpened] = useState(false)
  const [modalItem, setModalItem] = useState([])
  const [msg, setMsg] = useState("Adicionado ao carrinho")
  const [msgVisib, setMsgVisib] = useState(false)
  const cart = JSON.parse(localStorage.getItem('cart')) || []

  function handleOpenModal(item) {
    setIsModalOpened(true)
    setModalItem(item)
    document.body.style.overflow = 'hidden';
  }

  function handleCloseModal() {
    setTimeout(() => {
      setIsModalOpened(false)
      setModalItem([])
      document.body.style.overflow = 'auto';
    }, 850);
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
  },[])

  return (
    <div className="app">
      {msgVisib &&
        <div className="app_notice">
          <p className="app_notice_text">{msg}</p>
        </div>
      }
      <header className="app_header">
        <div className="app_header_container">
          <img src={logo} alt="logo" className="app_logo" />
          {!isCartOpened &&
            <div className="app_header_cartbtn" >
              <button onClick={handleOpenCart} name="cart_btn" title="carrinho">
                {cart.length > 0 && <span>{cart.length}</span>}
                <BiShoppingBag size={32} style={{color:"#00CED1"}} />
              </button>
            </div>
          }
        </div>
      </header>
      <section className="app_banner">
        <p className="app_banner_text">
          <span className="app_banner_num">5% </span>
          de desconto à vista!</p>
      </section>
      <section className="app_container">
        {
          bikinis.map((bik, i) => (
            <Card bik={bik} key={i} handleOpenModal={handleOpenModal} />
          ))
        }
      </section>
        {isModalOpened && <Modal item={modalItem} handleCloseModal={handleCloseModal} handleSetMsg={handleSetMsg} />}
      {isCartOpened &&
        <Cart handleCloseCart={handleCloseCart} handleSetMsg={handleSetMsg} />
      }
    </div>
  )
}

