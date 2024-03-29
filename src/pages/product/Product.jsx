import { useNavigate, useParams } from "react-router-dom"
import {bikinis} from "../../data/bikinis"
import { useEffect, useState } from "react"
import Modal from "../../components/modal/Modal"
import "./product.css"

export default function Product({handleSetMsg, handleOpenedProduct}) {
    const {productName} = useParams()
    const [item, setItem] = useState(bikinis.filter(bik => bik.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(productName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())))
    const navigate = useNavigate()

    function handleCloseModal() {
        navigate("/")
    }

    useEffect(() => {
        window.scrollTo({
          top: 0,
        });
        handleOpenedProduct()
      },[])
    

    return (
        <div className="product">
            {item.length > 0 ?
            <Modal item={item[0]} handleCloseModal={handleCloseModal} handleSetMsg={handleSetMsg}/> :
            <div className="product_notfound">
                <p className="product_notfound_text">Item não encontrado</p>
                <a className="product_notfound_button" href="/">Voltar</a>
                </div>
            }            
        </div>
    )
}