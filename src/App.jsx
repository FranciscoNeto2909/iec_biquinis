import { useEffect, useRef, useState } from "react"
import Search from "./components/search/Search"
import Card from "./components/card/Card"
import Cart from "./components/cart/Cart"
import Footer from "./components/footer/Footer"
import { bikinis } from "./data/bikinis"
import Modal from "./components/modal/Modal"
import { BiShoppingBag } from "react-icons/bi"
import logo from "./assets/logo.png"
import banner from "./assets/banner.png"
import bannerDesk from "./assets/bannerDesk.png"
import { categoriasMap, categories } from "./data/categories"
import "./app.css"

export default function App() {
  const cart = JSON.parse(localStorage.getItem('cart')) || []

  const onSaleBikinis = bikinis.sort((a, b) => {
    const aHasOffer = a.onSale === true;
    const bHasOffer = b.onSale === true;

    if (aHasOffer && !bHasOffer) return -1;
    if (!aHasOffer && bHasOffer) return 1;
    return 0;
  });

  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isCartOpened, setIsCartOpened] = useState(false)
  const [modalItem, setModalItem] = useState([])
  const [msg, setMsg] = useState("")
  const [msgVisib, setMsgVisib] = useState(false)
  const [selectedCat, setSelectedCat] = useState(0)
  const [bikinisCategorie, setBikinisCategorie] = useState(onSaleBikinis)
  const [filteredBikinis, setFilteredBikinis] = useState(bikinisCategorie)
  const bodyRef = useRef(document.body)

  function handleSearch(text) {
    if (text === "") {
      setFilteredBikinis(bikinisCategorie)
    } else {
      setFilteredBikinis(bikinis.filter(bik => bik.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(text)))
    }
  }

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function handleSetCategorie(text, i) {
    handleScrollTop()
    if (selectedCat === i) {
      setSelectedCat(0);
      setBikinisCategorie(bikinis);
    } else {
      setSelectedCat(i);
      if (text.toLowerCase() === "pronta-entrega") {
        window.location.href = "https://wa.me/c/558596585581";
        setSelectedCat(0);
      } else {
        const filteredBikinis = categoriasMap[text.toLowerCase()](bikinis);
        setBikinisCategorie(filteredBikinis);
        handleScrollTop();
      }
    }

  }

  function handleOpenModal(item) {
    setIsModalOpened(true)
    setModalItem(item)
    bodyRef.current.style.overflow = 'hidden';
  }

  function handleCloseModal() {
    setTimeout(() => {
      setIsModalOpened(false)
      setModalItem([])
      bodyRef.current.style.overflow = 'auto';
    }, 850);
  }

  function handleOpenCart() {
    setIsCartOpened(true)
    bodyRef.current.style.overflow = 'hidden';
  }

  function handleCloseCart() {
    setTimeout(() => {
      setIsCartOpened(false)
      bodyRef.current.style.overflow = 'auto';
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
            </div>
          </div>
        </div>
      </header>
      {window.innerWidth < 525 &&
        <>
          <div className="app_banner">
            <img src={banner} alt="" className="app_banner_img" />
          </div>
          <div className="app_header_categories">
            {categories.map((cat, i) => (
              <button className={`app_header_categories_button ${i === selectedCat && "categories_button_selected"}`} onClick={() => handleSetCategorie(cat, i)} key={i}>{cat.toUpperCase()}
              </button>
            ))}
          </div>
        </>
      }
      {window.innerWidth > 525 &&
        <>
          <section className="app_banner">
            <img src={bannerDesk} style={{ height: "auto", width: "100vw" }} alt="" className="app_banner_img" />
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
      <Footer />
    </div>
  )
}

