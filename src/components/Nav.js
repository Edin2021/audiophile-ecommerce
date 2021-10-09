import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Nav({ setMenuOpen }) {
  return (
    <nav>
      <button
        type="button"
        className="close-menu-btn"
        onClick={() => setMenuOpen(false)}
      >
        <span className="visually-hidden">close menu button</span>
        <FaTimes />
      </button>
      <Link to="/">home</Link>
      <Link to="/products/headphones">headphones</Link>
      <Link to="/products/speakers">speakers</Link>
      <Link to="/products/earphones">earphones</Link>
    </nav>
  );
}

export default Nav;
