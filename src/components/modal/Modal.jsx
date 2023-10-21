/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"
import Select from "../Select/Select"
import Carousel from "../carousel/Carousel"
import "./modal.css"

export default function Modal({ item, handleCloseModal, handleSetMsg }) {
    const [itemQuant, setItemQuant] = useState(1)
    const [size, setSize] = useState(item.sizes[0] || {})
    const [color, setColor] = useState(item.colors[0])
    const [price, setPrice] = useState(item.sizes[0].price)
    const [closing, setClosing] = useState(false)

    const text = `Olá%20gostaria%20de%20fazer%20um%20pedido:%0A•%20${item.name},%20cor:%20${color.name},%20tam:%20${size.name.toString().toUpperCase()},%20qnt:${itemQuant}`

    const soldOfftext = `Olá%20gostei%20do%20item%20${item.name}%20vocês%20poderiam%20me%20notificar%20quando%20ele%20chegar%20no%20estoque?`

    function handleIncreaseQuant() {
        if (itemQuant < 100) {
            setItemQuant(itemQuant + 1)
        }
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
        setPrice(item.sizes[i].price)
        setSize(op)
    }

    function handleCartBtn() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const hasItem = cart.filter(i => i.name === item.name).length > 0

        if ((hasItem && color.inStock === true) && (hasItem && size.inStock === true)) {
            handleSetMsg("Item já adicionado!")
        } else if (color.inStock === false || size.inStock === false) {
            handleSetMsg("Item esgotado!")
        } else {
            setClosing(true)
            handleCloseModal()
            handleSetMsg("Adicionado ao carrinho")
            cart.push({
                name: item.name,
                size: size.name,
                color: color.name,
                image: item.images[0],
                quant: itemQuant,
                price: item.sizes[0].price
            });

            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    function handleCloseBtn() {
        handleCloseModal()
        setClosing(true)
    }

    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault();
            handleCloseModal();
            setClosing(true)
        };

        window.history.pushState(null, null, window.location.href);
        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [handleCloseModal]);

    return (
        <div className={`modal_container ${closing && "close_modal"}`}>
            <div className={`modal`}>
                <div className="modal_close">
                    <button type="button" onClick={handleCloseBtn}>
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <div className="modal_image">
                    <Carousel images={item.images} />
                </div>
                <div className="modal_info">
                    <h2 className="modal_info_name">{item.name}</h2>
                    <div className="modal_info_quant">
                        <span>Quantidade: </span>
                        <div className="modal_info_quant_buttons">
                            <button className="modal_info_quant-btn1" onClick={handleDecreaseQuant}>
                                <AiOutlineMinus size={20} />
                            </button>
                            <span className="modal_info_quant_num">{itemQuant}</span>
                            <button className="modal_info_quant-btn2" onClick={handleIncreaseQuant}>
                                <AiOutlinePlus size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="modal_info_selects">
                        <div className="modal_info_colors">
                            <Select ops={item.colors} text={"Cores"} onClick={handleSetColor} />
                        </div>
                        <div className="modal_info_sizes">
                            <Select ops={item.sizes} text={"Tamanhos"} onClick={handleSetSize} />
                        </div>
                    </div>
                    <div className="modal_info_value">
                        <span className="modal_info_value_text">Valor total: </span><span className="modal_info_value_price">R$ {(price * itemQuant) - 1},99</span>
                    </div>
                    {color.inStock === true ?
                        <div className="modal_info_buttons">
                            <button type="button" className="modal_info_button modal_info_button_cart" onClick={handleCartBtn}>Adicionar ao carrinho</button>
                            <a className="modal_info_button" href={`https://wa.me/5585996585581?text=${text}`}>Finalizar pedido</a>
                        </div> :
                        <div className="modal_soldOff_card">
                            <div>
                                <p className="modal_soldOff_card_text ">Ops! Acabou o estoque</p>
                            </div>
                            <div>
                            <a className="modal_soldOff_card_button" href={`https://wa.me/5585996585581?text=${soldOfftext}`}>Avise-me quando chegar</a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}