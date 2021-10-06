import Cart from "./Cart";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="header-center">
        <span className="company-name">audiophile</span>
        <Nav />
        <Cart />
      </div>
    </header>
  );
}

export default Header;
