import logo from "./assets/logo.png"
import Card from "./components/card/Card"
import { bikinis } from "./data/bikinis"
import "./app.css"
import Modal from "./components/modal/Modal"
import { useState } from "react"

export default function App() {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [modalItem, setModalItem] = useState([])

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

  return (
    <div className="app">
      <header className="app_header">
        <img src={logo} alt="logo" className="app_logo" />
      </header>
      <section className="app_container">
        {
          bikinis.map((bik, i) => (
            <Card bik={bik} key={i} handleOpenModal={handleOpenModal} />
          ))
        }
      </section>
      {isModalOpened && <Modal item={modalItem} handleCloseModal={handleCloseModal} />}
    </div>
  )
}

