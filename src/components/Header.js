import Cart from "./Cart";
import Nav from "./Nav";

function Header({ flag }) {
  return (
    <header className={`${flag && "bcg-black"}`}>
      <div className="header-center">
        <span className="company-name">audiophile</span>
        <Nav />
        <Cart />
      </div>
      {flag === "category" && <h1>Current Category</h1>}
    </header>
  );
}

export default Header;
