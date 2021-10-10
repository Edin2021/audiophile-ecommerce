import { Link } from "react-router-dom";
import tempImage from "../images/xx99-mark-i.png";

function CartSummary() {
  return (
    <section className="summary">
      <h2>
        <span>summary</span>
      </h2>
      <div className="items">
        <article className="item">
          <div className="img-wrapper">
            <img src={tempImage} alt="" />
          </div>
          <div className="details">
            <h4 className="name" title="zx99 mx ii">
              zx99 mx ii
            </h4>
            <span className="price">$399</span>
          </div>
          <span className="quantity">x1</span>
        </article>
      </div>
      <article className="expenses">
        <div className="expense">
          total <span>$399 </span>
        </div>
        <div className="expense">
          shipping <span>$50 </span>
        </div>
        <div className="expense">
          vat (included) <span>$449 </span>
        </div>
      </article>
      <div className="grand-total">
        grand total <span>$449 </span>
      </div>
      <button type="button" className="confirm-purchase-btn">
        <Link to="/checkout">checkout</Link>
      </button>
    </section>
  );
}

export default CartSummary;
