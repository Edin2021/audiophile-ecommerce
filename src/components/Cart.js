import { BsCart3 } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function Cart({ setCartOpen, cartOpen }) {
  const {
    cartItems,
    addCartItemAmount,
    subtractCartItemAmount,
    calcCartTotal,
    calcTotalItemAmount,
    removeCartItem,
    clearCart,
  } = useGlobalContext();
  return (
    <>
      <div className="cart-wrapper">
        <button
          type="button"
          className="cart-btn"
          onClick={() => setCartOpen(!cartOpen)}
        >
          {cartItems.length ? (
            <span className="cart-amount-icon">{calcTotalItemAmount()}</span>
          ) : null}
          <span className="visually-hidden">open cart button</span>
          <BsCart3 />
        </button>
        <section className="cart">
          <h4>
            <span>cart ({calcTotalItemAmount()})</span>
            <button
              type="button"
              className="remove-all-btn"
              onClick={clearCart}
            >
              Remove all
            </button>
          </h4>
          <div className="items">
            {cartItems.map((cartItem) => {
              const { id, img, name, price, quantity } = cartItem;

              return (
                <article key={id} className="item">
                  <div className="img-wrapper">
                    <img src={img} alt="" />
                  </div>
                  <div className="details">
                    <h5 className="name" title="name of item">
                      {name}
                    </h5>
                    <span className="price">${price}</span>
                    <button
                      type="button"
                      className="remove-item-btn"
                      onClick={() => removeCartItem(id)}
                    >
                      remove
                    </button>
                  </div>
                  <div className="quantity-btns">
                    <button type="button" onClick={() => addCartItemAmount(id)}>
                      <span className="visually-hidden">
                        increase item amount by one
                      </span>
                      <IoIosArrowUp />
                    </button>
                    <span className="quantity">{quantity}</span>

                    <button
                      type="button"
                      onClick={() => subtractCartItemAmount(id)}
                    >
                      <span className="visually-hidden">
                        subtract item amount by one
                      </span>
                      <IoIosArrowDown />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="total">
            TOTAL <span>${calcCartTotal()}</span>
          </div>
          <button type="button" className="checkout-btn">
            <Link to="/checkout">checkout</Link>
          </button>
        </section>
      </div>
    </>
  );
}

export default Cart;
