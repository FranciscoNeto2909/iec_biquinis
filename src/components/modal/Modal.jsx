/* eslint-disable react/prop-types */
import { useState } from "react"
import Select from "../Select/Select"
import "./modal.css"

export default function Modal({ item, handleCloseModal }) {
    const [itemQuant, setItemQuant] = useState(1)
    const [size, setSize] = useState(item.sizes[0])
    const [color, setColor] = useState(item.colors[0])
    const [price, setPrice] = useState(item.prices[0])
    function handleIncreaseQuant() {
        setItemQuant(itemQuant + 1)
    }

    function handleDecreaseQuant() {
        if (itemQuant > 1) {
            setItemQuant(itemQuant - 1)
        }
    }

    function handleSetColor(i, op) {
        setColor(op)
    }

    function handleSetSize(i, op) {
        setPrice(item.prices[i])
        setSize(op)
    }

    function handleBuy() {
        console.log({
            name:item.name,
            size,
            color,
            price
        })
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
                    <div className="modal_info_selects">
                        <div className="modal_info_colors">
                            <Select ops={item.colors} text={"Cores disponiveis"} onClick={handleSetColor} />
                        </div>
                        <div className="modal_info_sizes">
                            <Select ops={item.sizes} text={"Tamanhos disponiveis"} onClick={handleSetSize} />
                        </div>
                    </div>
                    <div className="modal_info_value">
                        <span className="modal_info_value_text">Valor total:</span> <span className="modal_info_value_price">R$ {(price * itemQuant) - 1},99</span>
                    </div>
                    <div className="modal_info_buttons">
                        <button type="button" className="modal_info_button modal_info_button_cart">Adicionar ao carrinho</button>
                        <button type="button" className="modal_info_button" onClick={handleBuy}>Finalizar pedido</button>
                    </div>
                </div>
            </div>
        </div>
    )
}