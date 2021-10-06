import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/products">headphones</Link>
      <Link to="/products">speakers</Link>
      <Link to="/products">earphones</Link>
    </nav>
  );
}

export default Nav;
