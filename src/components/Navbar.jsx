import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

function Navbar() {
  const { cartCount } = useContext(Context);
  return (
    <header className="navbar">
      <nav className="nav-container">
        <Link to="/home" id="logo">BACK2K</Link>

        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/new">NEW</Link>
            <ul className="submenu">
              <li>Últimos drops</li>
              <li>Trending</li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/tops">TOPS</Link>
            <ul className="submenu">
              <li>Crop tops</li>
              <li>Baby tees</li>
              <li>Mesh tops</li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/bottoms">BOTTOMS</Link>
            <ul className="submenu">
              <li>Low rise jeans</li>
              <li>Cargo pants</li>
              <li>Wide leg pants</li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/hoodies">HOODIES</Link>
            <ul className="submenu">
              <li>Cropped</li>
              <li>Oversized</li>
            </ul>
          </li>
        </ul>

        {/* ICONO + CONTADOR */}
        <div className="cart-wrapper">
      <Link to="/cartcontent">
        <span className="ic--baseline-checkroom cart-icon"></span>
      </Link>

      {cartCount > 0 && (
        <span className="cart-count">{cartCount}</span>
      )}
    </div>
      </nav>
    </header>
  );
}

export default Navbar;
