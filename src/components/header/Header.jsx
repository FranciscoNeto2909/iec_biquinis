import { BiShoppingBag } from "react-icons/bi";
import logo from "../.././assets/logo.png"
import { Link } from "react-router-dom";
import Search from "../.././components/search/Search"
import "./header.css"

export default function Header({ handleSearch}) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    return (
        <header className="header">
        <div className="header_container">
          <div className="header_cart">
              <div className="header_cartbtn" >
                <Link to="/cart" name="cart_btn" title="carrinho">
                  {cart.length > 0 && <span>{cart.length}</span>}
                  <BiShoppingBag size={32} style={{ color: "#00CED1" }} />
                </Link>
              </div>
          </div>
            <div className="header_logoAndSearch">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
              <div className="header_search">
                <Search handleSearch={handleSearch} />
              </div>
            </div>
        </div>
      </header>
    )
}