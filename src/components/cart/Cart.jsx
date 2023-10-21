/* eslint-disable react/prop-types */

import { AiOutlineArrowRight } from "react-icons/ai"
import "./cart.css"
import { useEffect, useState } from "react";
import CartCard from "../cartCard/CartCard";

export default function Cart({ handleCloseCart, handleSetMsg }) {
    const [closing, setClosing] = useState(false)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    function handleCloseBtn() {
        setClosing(true)
        handleCloseCart()
    }

    function handleRemoveItem(name) {
        const newCart = cart.filter(i => i.name !== name)
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart)
        handleSetMsg("Item removido")
        if (cart.length == 1 ) {
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
                    <button className="cart_header_btn" onClick={handleCloseBtn}>
                        <AiOutlineArrowRight size={20} />
                    </button>
                </div>
                <div className="cart_body">
                    {
                        cart.length > 0 ?
                            <>
                                <div className="cart_body_cards">
                                    {cart.map((item, i) => (
                                        <CartCard item={item} handleRemoveItem={handleRemoveItem} key={i} />
                                    ))}
                                </div>
                                <button className="cart_body_button">Finalizar compra</button>
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