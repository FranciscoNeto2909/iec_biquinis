/* eslint-disable react/prop-types */
import { useMemo, useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { IoIosArrowBack } from "react-icons/io";
import Select from "../Select/Select"
import Carousel from "../carousel/Carousel"
import "./modal.css"
import { cupoms } from "../../data/cupoms"
import { addressAvailables } from "../../data/address"
import { Link } from "react-router-dom";

export default function Modal({ item, handleCloseModal, handleSetMsg }) {

    const realPrice = useMemo(() => item.colors[0].sizes[0].price, [item.colors]);
    const percent = useMemo(() => ((item.discount / 100).toFixed(2) * realPrice).toFixed(0), [item.discount, realPrice]);

    const [itemQuant, setItemQuant] = useState(1)
    const [color, setColor] = useState(item.colors.filter(item => (item.inStock === true))[0] || item.colors[0])
    const [colors] = useState(item.colors.filter(color => color.inStock))
    const [sizes, setSizes] = useState(color.sizes.filter(size => size.inStock))
    const [size, setSize] = useState(color.sizes.filter(item => (item.inStock === true))[0] || color.sizes[0])
    const [price, setPrice] = useState(item.onSale ? realPrice - percent : item.colors[0].sizes[0].price)
    const [address, setAddress] = useState(addressAvailables[0])
    const [cupom, setCupom] = useState("")

    const text = `------------------------------%0A%20%20%20%20*Novo%20Pedido*%0A------------------------------%0A%0A*${item.name}*%0A*Tamanho:*%20${size.name}%0A*Cor:*%20${color.name}%0A*Quantidade:*%20${itemQuant}%0A*Valor:*%20R$%20${(price * itemQuant) + address.price - 1 + ",90"}%0A%0A*Endereço:*%20${address.name}%0A*Frete:*%20${address.price === 0 ? "Grátis" : `R$%20${address.price}`}%0A%0A*Cupom:*%20${cupoms.filter(cup => cup === cupom.toUpperCase()).length > 0 ? cupom : "nenhum"}
    `

    const soldOfftext = `------------------------------%0A%20%20%20%20*Nova%20Encomenda*%0A------------------------------%0A%0AOlá%20gostaria%20de%20encomendar%20o%20produto%20*${item.name}*%0A
    `


    function handleIncreaseQuant() {
        if (itemQuant < 50) {
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
        setSize(op.sizes.filter(item => (item.inStock === true))[0] || color.sizes[0])
        setSizes(op.sizes.filter(size => size.inStock))
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
            return "grátis!"
        } else if (address.price === undefined) {
            return "A consultar"
        } else {
            return `R$: ${address.price}`
        }
    }

    function finalPrice() {
        if (address.price === 0) {
            return `R$: ${ (price * itemQuant) - 1},90`
        } else if (address.price === undefined) {
            return `R$: ${(price * itemQuant) - 1},90 + Frete`
        } else {
            return `R$: ${(price * itemQuant + address.price) - 1},90`
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
            handleCloseModal()
            handleSetMsg("Adicionado a sacola")
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

    return (
            <div className="modal_container">
                {
                    window.innerWidth > 600 &&
                    <div className="modal_routes">
                        <Link to="/">Voltar</Link>
                    </div>
                }
                <div className={`modal`}>
                    { window.innerWidth < 500 &&
                        <div className="modal_mobile_close">
                            <button className="" onClick={() => handleCloseModal()}>
                                <IoIosArrowBack size={36} />
                            </button>
                        </div>
                    }
                    <div className="modal_image">
                        <Carousel images={item.images} />
                    </div>
                    <div className="modal_info">
                        <h2 className="modal_info_name">{item.name}</h2>
                        {color.inStock && size.inStock &&
                        <>
                        <div className="modal_info_selects">
                            <div className="modal_info_colors">
                                <Select ops={colors} text={"Cores Disponiveis"} onClick={handleSetColor} initial={color} />
                            </div>
                            <div className="modal_info_sizes">
                                <Select ops={sizes} text={"Tamanho"} onClick={handleSetSize} initial={sizes[0]} />
                            </div>
                        </div>
                        <div className="modal_info_containerAndcupom">
                            <div className="modal_info_quantAndAddress">
                                <div className="modal_info_quant">
                                    <span className="modal_info_quant_title">Quantidade</span>
                                    <div className="modal_info_quant_buttons">
                                        <button type="button" title="Remover" className="modal_info_quant-btn1" onClick={handleDecreaseQuant}>
                                            <AiOutlineMinus size={20} />
                                        </button>
                                        <span className="modal_info_quant_num">{itemQuant}</span>
                                        <button type="button" title="Adicionar" className="modal_info_quant-btn2" onClick={handleIncreaseQuant}>
                                            <AiOutlinePlus size={20} />
                                        </button>
                                    </div>
                                </div>
                                <div className="modal_info_address">
                                    <Select ops={addressAvailables} text={"Endereço"} onClick={handleSetAddress} />
                                </div>
                            </div>
                            <div className="modal_info_cupom">
                                <label htmlFor="cupom" className="modal_info_cupom_lbl">Cupom de desconto</label>
                                <input type="text" value={cupom} onChange={e => setCupom(e.target.value.toUpperCase().trim())} className="modal_info_cupom_inpt" name="cupom_input" id="cupom" placeholder="CUPOM" />
                            </div>
                        </div>
                        </>
                        }
                        <div className="modal_info_value">
                            <div className="modal_info_value_prod">
                                <p className="modal_info_value_text">
                                    Valor:
                                    <span className={`modal_info_value_price ${item.onSale && "discount_color"}`}> R$ {item.onSale ? (price * itemQuant) - 1   : (price * itemQuant) - 1},90</span>
                                </p>
                                {color.inStock && size.inStock &&
                                <p className="modal_info_value_text">
                                    Frete:
                                    <span className="modal_info_value_price"> {handleFreight()}</span>
                                </p>
                                }
                            </div>
                            {color.inStock && size.inStock &&
                            <p className="modal_info_value_finalPrice">
                                Valor total:
                                <span className={`modal_info_value_price ${item.onSale && "discount_color"}`}>{finalPrice()}</span>
                                <span className="modal_info_value_portion">{item.onSale ? " Até 2x sem juros" : " Em até 3x sem juros"}</span>
                            </p>
                            }
                        </div>
                        {color.inStock && size.inStock &&
                            <div className="modal_info_buttons">
                                <button type="button" title="adicionar ao carrinho" className="modal_info_button modal_info_button_cart" onClick={handleCartBtn}>Adicionar a sacola</button>
                                <a className="modal_info_button" title="finalizar" href={`https://wa.me/5585996585581?text=${text}`}>Finalizar pedido</a>
                            </div>
                            }
                            <div className="modal_soldOff">
                                <p className="modal_soldOff_firsttext">Não achou o que queria ?</p>
                                <a className="modal_soldOff_button" href={`https://wa.me/5585996585581?text=${soldOfftext}`}>Avise-me</a>
                                <p className="modal_soldOff_text">Verificar disponibilidade de cor e tamanho</p>
                            </div>
                    </div>
                </div>
            </div>
    )
}