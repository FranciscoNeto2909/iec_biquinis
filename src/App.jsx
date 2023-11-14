import { useEffect, useState } from "react"
import Search from "./components/search/Search"
import logo from "./assets/logo1.png"
import Card from "./components/card/Card"
import Cart from "./components/cart/Cart"
import { bikinis } from "./data/bikinis"
import Modal from "./components/modal/Modal"
import { BiShoppingBag } from "react-icons/bi"
import "./app.css"

export default function App() {
  const categories = ["Todos", "Biquínis e sungas", "maiôs", "cangas e roupas de praia", "Acessórios"]

  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isCartOpened, setIsCartOpened] = useState(false)
  const [modalItem, setModalItem] = useState([])
  const [msg, setMsg] = useState("Adicionado ao carrinho")
  const [msgVisib, setMsgVisib] = useState(false)
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const [bikinisCategorie, setBikinisCategorie] = useState(bikinis)
  const [selectedCat, setSelectedCat] = useState(0)
  const [filteredBikinis, setFilteredBikinis] = useState(bikinisCategorie)

  function handleSearch(text) {
    if (text === "") {
      setFilteredBikinis(bikinisCategorie)
    } else {
      setFilteredBikinis(bikinis.filter(bik => bik.name.toLowerCase().includes(text)))
    }
  }

  function handleSetCategorie(text, i) {
    if (selectedCat === i) {
      setSelectedCat(0)
      setBikinisCategorie(bikinis)
    } else {
      setSelectedCat(i)
      if (text.toLowerCase() === "todos") {
        setBikinisCategorie(bikinis.filter(bik => bik.name.toLowerCase().includes("")))
      } else if (text.toLowerCase() === "biquínis e sungas") {
        setBikinisCategorie(bikinis.filter(bik => bik.name.toLowerCase().includes("biquíni") || bik.name.toLowerCase().includes("sunga")))
      } else if (text.toLowerCase() === "maiôs") {
        setBikinisCategorie(bikinis.filter(bik => bik.name.toLowerCase().includes("maiô")))
      } else if (text.toLowerCase() === "cangas e roupas de praia") {
        setBikinisCategorie(bikinis.filter(bik => bik.name.toLowerCase().includes("canga") || bik.name.toLowerCase().includes("saia")))
      } else if (text.toLowerCase() === "acessórios") {
        setBikinisCategorie(bikinis.filter(bik => bik.name.toLowerCase().includes("viseira")))
      }
    }
  }

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
  }, [])

  useEffect(() => {
    setFilteredBikinis(bikinisCategorie)
  }, [bikinisCategorie])


  return (
    <div className="app">
      {msgVisib &&
        <div className="app_notice">
          <p className="app_notice_text">{msg}</p>
        </div>
      }
      <header className="app_header">
        <div className="app_header_container">
          <div className="app_header_cart">
            {!isCartOpened &&
              <div className="app_header_cartbtn" >
                <button onClick={handleOpenCart} name="cart_btn" title="carrinho">
                  {cart.length > 0 && <span>{cart.length}</span>}
                  <BiShoppingBag size={32} style={{ color: "#00CED1" }} />
                </button>
              </div>
            }
          </div>
          <div className="app_header_logoAndSearch">
            <img src={logo} alt="logo" className="app_logo" />
            <div className="app_header_search">
              <Search handleSearch={handleSearch} />
              {window.innerWidth < 525 &&
                <>
                  <p className="app_header_onSale_txt">5% DE DESCONTO NO PIX</p>
                  <div className="app_header_categories">
                    {categories.map((cat, i) => (
                      <button className={`app_header_categories_button ${i === selectedCat && "categories_button_selected"}`} onClick={() => handleSetCategorie(cat, i)} key={i}>{cat.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </header>
      {window.innerWidth > 525 &&
        <>
          <section className="app_banner">
            <p>5% DE DESCONTO NO PIX</p>
          </section>
          <section className="app_categories">
            <div className="app_header_categories">
              {categories.map((cat, i) => (
                <button className={`app_header_categories_button ${i === selectedCat && "categories_button_selected"}`} onClick={() => handleSetCategorie(cat, i)} key={i}>{cat.toUpperCase()}
                </button>
              ))}
            </div>
          </section>
        </>
      }
      <section className="app_container">
        {
          filteredBikinis.map((bik, i) => (
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

