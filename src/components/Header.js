import { Link } from "react-router-dom";
import Cart from "./Cart";
import Nav from "./Nav";
import { FaBars } from "react-icons/fa";

function Header({ flag }) {
  // The flag is used to add a black background color to the header when user is not on home page and to display current category when on products page
  return (
    <header className={`${flag && "bcg-black"}`}>
      <div className="header-center">
        <button type="button" className="menu-btn">
          <span className="visually-hidden">open menu button</span>
          <FaBars aria-hidden="true" />
        </button>
        <Link to="/" className="company-name">
          audiophile
        </Link>
        <Nav />
        <Cart />
      </div>
      {flag === "category" && <h1>Current Category</h1>}
    </header>
  );
}

export default Header;
