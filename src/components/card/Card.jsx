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
                    <span className="card_price">R$ {bik.sizes[0].price - 1},99</span>
                </div>
                <p className="card_portion">Em até 6x  sem juros</p>
                <button className="card_button">Adicionar pedido</button>
            </div>
        </div>
    )
}