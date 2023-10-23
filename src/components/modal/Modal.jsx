/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"
import Select from "../Select/Select"
import Carousel from "../carousel/Carousel"
import "./modal.css"

export default function Modal({ item, handleCloseModal, handleSetMsg }) {
    const addressAvailables = [{ name: "Uruaú", price: 0 }, { name: "Sucatinga", price: 10 }, { name: "Beberibe", price: 12 }, { name: "Outros", price: undefined }]

    const [itemQuant, setItemQuant] = useState(1)
    const [size, setSize] = useState(item.colors[0].sizes[0] || [])
    const [color, setColor] = useState(item.colors[0] || [])
    const [price, setPrice] = useState(item.colors[0].sizes[0].price || 0)
    const [closing, setClosing] = useState(false)
    const [address, setAddress] = useState(addressAvailables[0])
    const text = `Olá%20gostaria%20de%20fazer%20um%20pedido:%0A•%20${item.name},%20cor:%20${color.name},%20tam:%20${size.name.toString().toUpperCase()},%20qnt:${itemQuant}`

    const soldOfftext = `Olá%20gostei%20do%20item%20${item.name}%20vocês%20poderiam%20me%20notificar%20quando%20ele%20chegar%20no%20estoque%20?`


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

    function handleSetColor(op) {
        setColor(op)
    }

    function handleSetSize(op) {
        setPrice(op.price)
        setSize(op)
    }

    function handleSetAddress(op) {
        setAddress(op)
    }

    function handleFreight() {
        if (address.price === 0) {
            return "gratis"
        } else if (address.price === undefined) {
            return "A consultar"
        } else {
            return `R$: ${address.price}`
        }
    }

    function finalPrice() {
        if (address.price === 0) {
            return `R$: ${(price * itemQuant) - 1},90`
        } else if (address.price === undefined) {
            return `R$: ${(price * itemQuant) - 1},90 - frete a consultar`
        } else {
            return `R$: ${((price * itemQuant) - 1) + address.price},90`
        }
    }

    function handleCartBtn() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const hasItem = cart.filter(i => i.name === item.name).length > 0

        if (hasItem && (size.inStock === true || color.inStock === true)) {
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
                price
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
                    <button type="button" title="close_btn" onClick={handleCloseBtn}>
                        <AiOutlineClose size={22} />
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
                            <button type="button" title="decrease_btn" className="modal_info_quant-btn1" onClick={handleDecreaseQuant}>
                                <AiOutlineMinus size={20} />
                            </button>
                            <span className="modal_info_quant_num">{itemQuant}</span>
                            <button type="button" title="increase_btn" className="modal_info_quant-btn2" onClick={handleIncreaseQuant}>
                                <AiOutlinePlus size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="modal_info_selects">
                        <div className="modal_info_colors">
                            <Select ops={item.colors} text={"Cores Disponiveis"} onClick={handleSetColor} />
                        </div>
                        <div className="modal_info_sizes">
                            <Select ops={color.sizes} text={"Tamanhos"} onClick={handleSetSize} />
                        </div>
                        <div className="modal_info_address">
                            <Select ops={addressAvailables} text={"Endereço"} onClick={handleSetAddress} />
                        </div>
                    </div>
                    <div className="modal_info_value">
                        <div className="modal_info_value_prod">
                            <p className="modal_info_value_text">
                                Produto:
                                <span className="modal_info_value_price"> R$ {(price * itemQuant) - 1},90</span>
                            </p>
                            <p className="modal_info_value_text">
                                frete:
                                <span className="modal_info_value_price"> {handleFreight()}</span>
                            </p>
                        </div>

                        <span className="modal_info_value_finalPrice">Valor total: <span className="modal_info_value_price">{finalPrice()}</span></span>
                    </div>
                    {color.inStock === true ?
                        <div className="modal_info_buttons">
                            <button type="button" title="addCart_btn" className="modal_info_button modal_info_button_cart" onClick={handleCartBtn}>Adicionar ao carrinho</button>
                            <a className="modal_info_button" href={`https://wa.me/5585996585581?text=${text}`}>Finalizar pedido</a>
                        </div> :
                        <div>
                            <a className="modal_soldOff_button" href={`https://wa.me/5585996585581?text=${soldOfftext}`}>Avise-me quando chegar</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}