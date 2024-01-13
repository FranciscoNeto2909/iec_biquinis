import { BiShoppingBag } from "react-icons/bi";
import logo from "../.././assets/logo.png"
import { Link, useNavigate } from "react-router-dom";
import Search from "../.././components/search/Search"
import "./header.css"
import { IoIosArrowBack } from "react-icons/io";

export default function Header({ handleSearch, handleOpenCart, productOpened, handleBackButton}) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    return (
        <header className="header">
        <div className="header_container">
          {!productOpened && 
            <div className="header_cart">
                <div className="header_cartbtn" >
                  <button onClick={() => handleOpenCart()} name="cart_btn" title="carrinho">
                    {cart.length > 0 && <span>{cart.length}</span>}
                    <BiShoppingBag size={32} style={{ color: "#00CED1" }} />
                  </button>
                </div>
            </div>
          }
          <div className="header_logoAndSearch">
            { !productOpened && <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link> }
              <div className={`header_search ${productOpened && "header_search_mobile"}`}>
                    { productOpened &&
                        <div className>
                            <button className="header_back_button" onClick={() =>{handleBackButton()}}>
                                <IoIosArrowBack size={36} />
                            </button>
                        </div>
                    }
                <Search handleSearch={handleSearch} />
              </div>
            </div>
        </div>
      </header>
    )
}