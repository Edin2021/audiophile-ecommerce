import { BsCart3 } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import tempImage from "../images/xx99-mark-II.png";
function Cart() {
  return (
    <div className="cart-wrapper">
      <button type="button" className="cart-btn">
        <BsCart3 />
      </button>
      <section className="cart">
        <h4>
          <span>CART (0)</span>
          <button type="button" className="remove-all-btn">
            Remove all
          </button>
        </h4>
        <div className="items">
          <article className="item">
            <div className="img-wrapper">
              <img src={tempImage} alt="" />
            </div>
            <div className="details">
              <h5 className="name">
                zx99 Lorem ipsum dolor sit amet, consectetur
              </h5>
              <span className="price">$399</span>
              <button type="button" className="remove-item-btn">
                remove
              </button>
            </div>
            <div className="quantity-btns">
              <button type="button">
                <IoIosArrowUp />
              </button>
              <span className="quantity">0</span>
              <button type="button">
                <IoIosArrowDown />
              </button>
            </div>
          </article>
        </div>
        <div className="total">
          TOTAL <span>$399</span>
        </div>
        <button type="button" className="checkout-btn">
          <Link to="/checkout">checkout</Link>
        </button>
      </section>
    </div>
  );
}

export default Cart;
