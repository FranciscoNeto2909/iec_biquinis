/* eslint-disable react/prop-types */

import { AiOutlineArrowRight } from "react-icons/ai"
import "./cart.css"
import { useEffect, useState } from "react";
import CartCard from "../cartCard/CartCard";

export default function Cart({ handleCloseCart, handleSetMsg }) {
    const [closing, setClosing] = useState(false)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [cupom, setCupom] = useState("")
    const validCupom = "INDICAÇÃO5";

    const text = cart.map(item => (
        `•%20${item.name},%20cor:%20${item.color},%20tam:%20${item.size.toString().toUpperCase()},%20qnt:${item.quant}%0A${item.address}`
    )).join("%0A");

    function handleCloseBtn() {
        setClosing(true)
        handleCloseCart()
    }

    function handleRemoveItem(name) {
        const newCart = cart.filter(i => i.name !== name)
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart)
        handleSetMsg("Item removido")
        if (cart.length == 1) {
            setClosing(true)
            handleCloseCart()
        }
    }

    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault();
            handleCloseCart();
        };

        window.history.pushState(null, null, window.location.href);
        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [handleCloseCart]);

    return (
        <div className="cart_container">
            <div className={`cart ${closing && "cart_close"}`}>
                <div className="cart_header">
                    <button title="header_btn" type="button" className="cart_header_btn" onClick={handleCloseBtn}>
                        <AiOutlineArrowRight size={20} />
                    </button>
                </div>
                <div className="cart_body">
                    {
                        cart.length > 0 ?
                            <>
                                <div className="cart_body_cards">
                                    {cart.map((item, i) => (
                                        <CartCard cart={cart} setCart={setCart} item={item} handleRemoveItem={handleRemoveItem} key={i} />
                                    ))}
                                </div>
                                <div className="cart_body_footer">
                                    <div className="cart_body_cupom">
                                        <input value={cupom} onChange={e => setCupom(e.target.value.toUpperCase())} type="text" placeholder="cupom de desconto" autoComplete="none" />
                                    </div>
                                    <a href={`https://wa.me/5585996585581?text=Olá%20gostaria%20de%20fazer%20um%20pedido:%0A${text}%0A%0ACupom:${cupom === validCupom ? cupom : ""}`} className="cart_body_button">Finalizar compra</a>
                                </div>
                            </> :
                            <>
                                <div className="card_body_notice">
                                    Nenhum item adicionado ainda
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}