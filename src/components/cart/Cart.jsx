/* eslint-disable react/prop-types */

import { AiOutlineArrowRight } from "react-icons/ai"
import "./cart.css"
import { useEffect, useState } from "react";
import CartCard from "../cartCard/CartCard";
import { addressAvailables } from "../../data/address"
import Select from "../Select/Select";

export default function Cart({ handleCloseCart, handleSetMsg }) {
    const [closing, setClosing] = useState(false)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    const [address, setAddress] = useState(addressAvailables[0])
    const [cupom, setCupom] = useState("")
    const [price, setPrice] = useState(0)

    const items = cart.map(item => (
        `*${item.name}*%0A*Tamanho:*%20${item.size}%0A*Cor:*%20${item.color}%0A*Quantidade:*%20${item.quant}%0A*Valor:*%20R$%20${item.price + address.price - 1 +",90"}`
    )).join("%0A");

    const text = `------------------------------%0A%20%20%20%20*Novo%20Pedido*%0A------------------------------%0A%0A${items}%0A%0A*Endereço:*%20${address.name}%0A*Frete:*%20R$%20${address.price === 0 ? "Grátis" : address.price}*Cupom:*%20${cupom === "INDICAÇÃO5" ? "INDICAÇÃO5" : "nenhum" }%0A*Total:*%20R$%20${price - 1 + address.price},90`

    function handleCloseBtn() {
        setClosing(true)
        handleCloseCart()
    }


    function handleRemoveItem(name) {
        const newCart = cart.filter(i => i.name !== name)
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart));
        handleSetMsg("Item removido")
        if (cart.length === 1) {
            setClosing(true)
            handleCloseCart()
        }
    }

    function handleSetAddress(op) {
        setAddress(op)
    }

    function handleFreight() {
        if (address.price === 0) {
            return "grátis!"
        } else if (address.price === undefined) {
            return "A consultar"
        } else {
            return `R$: ${address.price}`
        }
    }

    function finalPrice() {
        if (address.price === 0) {
            return `R$: ${price - 1},90`
        } else if (address.price === undefined) {
            return `R$: ${price - 1},90 - frete a consultar`
        } else {
            return `R$: ${(price - 1) + address.price},90`
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

    useEffect(() => {
        if (cart.length > 0) {
            setPrice(cart.map((item) => (
                item.price * item.quant
            )).reduce((last, n) => last + n, 0))
        }
    }, [cart])

    return (
        <div className="cart_container">
            <div className={`cart ${closing && "cart_close"}`}>
                <div className="cart_header">
                    <button title="Fechar" type="button" className="cart_header_btn" onClick={handleCloseBtn}>
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
                                    <div>
                                        <div className="cart_body_footer_address">
                                            <Select ops={addressAvailables} text={"Endereço"} onClick={handleSetAddress} />
                                        </div>
                                        <p className="cart_body_footer_freight">Frete: {handleFreight()}</p>
                                        <p>
                                            Total: {finalPrice()}
                                            <span className="cart_body_footer_portion">Em até 3x sem juros</span>
                                        </p>
                                    </div>
                                    <div className="cart_body_cupom">
                                        <input value={cupom} onChange={e => setCupom(e.target.value.toUpperCase())} type="text" placeholder="cupom de desconto" autoComplete="none" />
                                    </div>
                                    <a href={`https://wa.me/5585996585581?text=${text}`} className="cart_body_button" onClick={() => console.log(text)} target="_blank">Finalizar compra</a>
                                </div>
                            </> :
                            <>
                                <div className="cart_body_notice">
                                    Nenhum item adicionado ainda
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}