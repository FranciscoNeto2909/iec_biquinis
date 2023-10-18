/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import "./card.css"
export default function Card({ bik, handleOpenModal }) {
    const [bikSize, setBikSize] = useState(bik.sizes.m)

    function handleSetItem() {
        handleOpenModal(bik)
    }

    useEffect(() => {
        if (bik.sizes.p != undefined) {
            setBikSize(bik.sizes.p)
        } else if (bik.sizes.m != undefined) {
            setBikSize(bik.sizes.m)
        } else if (bik.sizes.g != undefined) {
            setBikSize(bik.sizes.g)
        } else if (bik.sizes.u != undefined) {
            setBikSize(bik.sizes.u)
        }
    }, [bik.sizes])

    return (
        <div className="card">
            <div className="card_image">
                <img src={bik.image} alt="biquini" className="card_img" />
            </div>
            <div className="card_info">
                <h2 className="card_title">{bik.name}</h2>
                <div className="card_info_price">
                    <span className="card_price">R$ {bikSize - 1},99</span>
                </div>
                <p className="card_portion">2x de R$ {(bikSize / 2).toFixed(2)} sem juros</p>
                <button className="card_button" onClick={handleSetItem}>Adicionar pedido</button>
            </div>
        </div>
    )
}