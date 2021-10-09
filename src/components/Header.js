import { Link } from "react-router-dom";
import Cart from "./Cart";
import Nav from "./Nav";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

// The flag is used to add a black background color to the header when user is not on home page and to display current category when on products page
function Header({ flag }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header
      className={`${flag && "bcg-black"} ${menuOpen && "menu-open"} ${
        cartOpen && "cart-open"
      }`}
    >
      <div
        className="bcg-blur"
        onClick={() => {
          setMenuOpen(false);
          setCartOpen(false);
        }}
      ></div>
      <div className="header-center">
        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
        >
          <span className="visually-hidden">open menu button</span>
          <FaBars aria-hidden="true" />
        </button>
        <Link to="/" className="company-name">
          audiophile
        </Link>
        <Nav setMenuOpen={setMenuOpen} />
        <Cart setCartOpen={setCartOpen} cartOpen={cartOpen} />
      </div>
      {flag === "category" && <h1>Current Category</h1>}
    </header>
  );
}

export default Header;
