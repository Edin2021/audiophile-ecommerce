import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Nav() {
  return (
    <nav>
      <button type="button" className="close-menu-btn">
        <span className="visually-hidden">close menu button</span>
        <FaTimes />
      </button>
      <Link to="/">home</Link>
      <Link to="/products">headphones</Link>
      <Link to="/products">speakers</Link>
      <Link to="/products">earphones</Link>
    </nav>
  );
}

export default Nav;
