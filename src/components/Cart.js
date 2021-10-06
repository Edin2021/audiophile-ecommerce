import { BsCart3 } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Cart() {
  return (
    <>
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
        <div className="cart-items">
          <article className="cart-item">
            <div className="img-wrapper">
              <img src="" alt="" />
            </div>
            <div className="details">
              <h5 className="name">zx99</h5>
              <span className="price"></span>
            </div>
            <div className="quantity-btns">
              <button type="button" className="change-quantity">
                <IoIosArrowUp />
              </button>
              <span className="quantity">0</span>
              <button type="button" className="change-quantity">
                <IoIosArrowDown />
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Cart;
