/* eslint-disable react/prop-types */
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"
import "./cartCard.css"
import { useEffect } from "react"

export default function CartCard({ item, handleRemoveItem, cart, setCart }) {
    function handleIncreasePrice() {
        const newQuant = item.quant + 1;
        setCart((prevCart) => {
            return prevCart.map((it) => {
                if (it.name === item.name) {
                    return { ...it, quant: newQuant };
                }
                return it;
            });
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function handleDecreasePrice() {
        if (item.quant > 1) {
            const newQuant = item.quant - 1;
            setCart((prevCart) => {
                return prevCart.map((it) => {
                    if (it.name === item.name) {
                        return { ...it, quant: newQuant };
                    }
                    return it;
                });
            });
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


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
                    </div>
                    <div className="card_cart_buttonsAndPrice">
                        <div className="card_cart_buttons">
                            <button type="button" title="button_minus" className="card_cart_btn" onClick={handleDecreasePrice}>
                                <AiOutlineMinus size={18} />
                            </button>
                            <span className="card_cart_quant">{item.quant}</span>
                            <button type="button" title="button_plus" className="card_cart_btn" onClick={handleIncreasePrice}>
                                <AiOutlinePlus size={18} />
                            </button>
                        </div>
                        <div className="card_cart_price">
                            <span className="card_cart_price_value">R$: {(item.price * item.quant) - 1},90</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}