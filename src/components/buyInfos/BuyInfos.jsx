import { AiOutlineSafety } from "react-icons/ai"
import { CiDiscount1 } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import "./buyInfos.css"
import { useEffect, useState } from "react";

export default function BuyInfos() {
    const [iconSize,setIconSize] = useState(50)

    useEffect(() => {
        if (window.innerWidth < 500) {
            setIconSize(30)
        }
    },[window.innerWidth])
    return(
        <div className="buyInfos">
            <div className="buyInfo_item">
                <AiOutlineSafety size={iconSize} color="#4A8996" />
                <div className="buyInfo_item_texts">
                    <span className="buyInfo_item_text">compra</span> 
                    <span className="buyInfo_item_text">segura</span>
                </div>
            </div>
            <div className="buyInfo_item">
                <CiDiscount1 size={iconSize} color="#4A8996" />
                <div className="buyInfo_item_texts">
                    <span className="buyInfo_item_text">5% de desconto</span> 
                    <span className="buyInfo_item_text">primeira compra</span>
                </div>
            </div>
            <div className="buyInfo_item">
                <BsTruck size={iconSize} color="#4A8996" />
                <div className="buyInfo_item_texts">
                    <span className="buyInfo_item_text">frete grátis</span> 
                    <span className="buyInfo_item_text">para uruaú</span>
                </div>
            </div>
        </div>
    )
}