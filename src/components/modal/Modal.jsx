/* eslint-disable react/prop-types */
import { useState } from "react"
import "./modal.css"

export default function Modal({ item, handleCloseModal }) {
    const [itemQuant, setItemQuant] = useState(1)
    function handleIncreaseQuant() {
        setItemQuant(itemQuant + 1)
    }

    function handleDecreaseQuant() {
        if (itemQuant > 1) {
            setItemQuant(itemQuant - 1)
        }
    }

    return (
        <div className="modal_container">
            <div className="modal">
                <div className="modal_close">
                    <button onClick={handleCloseModal}>x</button>
                </div>
                <div className="modal_image">
                    <img src={item.image} alt="" />
                </div>
                <div className="modal_info">
                    <h2 className="modal_info_name">{item.name}</h2>
                    <div className="modal_info_quant">
                        <span>Quantidade: </span>
                        <button className="modal_info_quant-btn1" onClick={handleDecreaseQuant}>-</button>
                        <span>{itemQuant}</span>
                        <button className="modal_info_quant-btn2" onClick={handleIncreaseQuant}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}