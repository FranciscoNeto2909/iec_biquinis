/* eslint-disable react/prop-types */
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"
import "./cartCard.css"
import { useState } from "react"

export default function CartCard({ item, handleRemoveItem, cart, setCart }) {
    const [price, setPrice] = useState(item.price * item.quant)
    const [quant, setQuant] = useState(item.quant)

    function handleIncreasePrice() {
        setQuant(quant + 1)
        setPrice(price + item.price)
        setCart(cart.map((it) => {
            if (it.name === item.name) {
                return { ...it, quant: quant + 1 };
            }
            return it;
        }))
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    function handleDecreasePrice() {
        if (quant > 1) {
            setQuant(quant - 1)
            setPrice(price - item.price)
            setCart(cart.map((it) => {
                if (it.name === item.name) {
                    return { ...it, quant: quant - 1 };
                }
                return it;
            }))
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }

    return (
        <div className="card_cart">
            <div className="card_cart_image">
                <img src={item.image} alt="biquíni" />
            </div>
            <div className="card_cart_info">
                <div className="card_cart_titleAndBtn">
                    <h3 className="card_cart_title">{item.name}</h3>
                    <button type="button" title="remove_btn" className="card_cart_removeBtn" onClick={() => handleRemoveItem(item.name)}>
                        <AiOutlineClose size={18} />
                    </button>
                </div>
                <div className="card_cart_options">
                    <div className="card_cart_texts">
                        <span className="card_cart_size">Tam: {item.size}</span>
                        <span className="card_cart_color">Cor: {item.color}</span>
                        <span>End: {item.address}</span>
                    </div>
                    <div className="card_cart_buttonsAndPrice">
                        <div className="card_cart_buttons">
                            <button type="button" title="button_minus" className="card_cart_btn" onClick={handleDecreasePrice}>
                                <AiOutlineMinus size={18} />
                            </button>
                            <span className="card_cart_quant">{quant}</span>
                            <button type="button" title="button_plus" className="card_cart_btn" onClick={handleIncreasePrice}>
                                <AiOutlinePlus size={18} />
                            </button>
                        </div>
                        <div className="card_cart_price">
                            <span className="card_cart_price_value">R$: {(price) - 1},90</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}