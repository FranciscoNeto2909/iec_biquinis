/* eslint-disable react/prop-types */

import { AiOutlineClose } from "react-icons/ai"
import "./cart.css"
import { useEffect, useState } from "react";

export default function Cart({ handleCloseCart, items }) {
    const [closing, setClosing] = useState(false)

    function handleCloseBtn() {
        setClosing(true)
        handleCloseCart()
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
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <div className="cart_body">
                    {
                        items.length > 0 ?
                            <>
                                cart
                            </> :
                            <>
                                <div>
                                    Nenhum item adicionado ainda
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}