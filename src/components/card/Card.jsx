import "./card.css"
export default function Card({ bik, handleOpenModal }) {
    function handleSetItem() {
        handleOpenModal(bik)
    }

    return (
        <div className="card" onClick={handleSetItem}>
            <div className="card_image">
                <img src={bik.images[0]} alt="biquini" className="card_img" />
            </div>
            <div className="card_info">
                <h2 className="card_title">{bik.name}</h2>
                <div className="card_info_price">
                    <span className="card_price">R$ {bik.onSale ? bik.colors[0].sizes[0].price - 11 : bik.colors[0].sizes[0].price - 1},<span className="card_price_decimal">90</span>
                        {bik.onSale && <>
                            <span className="card_price card_onSale">{bik.colors[0].sizes[0].price - 1},<span className="card_price_decimal">90</span></span>
                            <span className="card_price_offer">OFERTA</span>
                        </>
                        }
                    </span>
                </div>
                <p className="card_portion">Em até 3x  sem juros</p>
                <button type="button" className="card_button">Adicionar pedido</button>
            </div>
        </div>
    )
}