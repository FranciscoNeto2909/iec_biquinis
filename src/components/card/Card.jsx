/* eslint-disable react/prop-types */
import "./card.css"
import icon from "../../assets/icon.png"

export default function Card({ bik, handleOpenModal }) {

    const price = bik.colors[0].sizes[0].price - 1
    const percent = ((bik.discount / 100).toFixed(2) * price).toFixed(0)

    const inStock = bik.colors.filter(col => col.inStock === true).length > 0

    function handleSetItem() {
        handleOpenModal(bik)
    }

    return (
        <div className="card" onClick={handleSetItem}>
            {inStock &&
                <div className="card_inStock" style={{ backgroundImage:`url(${icon})` }}>
                    <p>Pronta</p>
                    <p>entrega</p>
                </div>
            }
            <div className="card_image">
                <img src={bik.images[0]} alt="biquini" className="card_img" />
            </div>
            <div className="card_info">
                <h2 className="card_title">{bik.name}</h2>
                <div className="card_info_price">
                    <div className="card_price">
                        {bik.onSale ?
                            <div className="card_price_bf">
                                <div className="card_price_discount">
                                    <span>R$ {price - percent},</span><span className="card_price_decimal">90</span>
                                </div>
                                <span className="card_price card_onSale">{price},<span className="card_price_decimal">90</span>
                                </span>
                                <span className="card_price_discount_value">{bik.discount}% OFF</span>
                            </div> :
                            <>
                                <span>R$ {price},<span className="card_price_decimal">90</span></span>
                            </>
                        }
                    </div>
                </div>
                <p className="card_portion">{bik.onSale ? "Até 2x sem juros" : "Em até 3x sem juros"}</p>
                <button type="button" className="card_button">Adicionar pedido</button>
            </div>
        </div>
    )
}