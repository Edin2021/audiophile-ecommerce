import { useGlobalContext } from "../context";

const VAT = 0.2;
const SHIPPING = 50;

function CartSummary() {
  const { cartItems, calcCartTotal } = useGlobalContext();

  const vat_included = calcCartTotal() * VAT;
  const total = calcCartTotal() + vat_included;
  const grandTotal = total + SHIPPING;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("confirm purchase");
  };

  return (
    <section className="summary">
      <h2>
        <span>summary</span>
      </h2>
      <div className="items">
        {cartItems.map((cartItem) => {
          const { id, img, name, price, quantity } = cartItem;
          return (
            <article key={id} className="item">
              <div className="img-wrapper">
                <img src={img} alt="" />
              </div>
              <div className="details">
                <h4 className="name" title={name}>
                  {name}
                </h4>
                <span className="price">${price}</span>
              </div>
              <span className="quantity">x{quantity}</span>
            </article>
          );
        })}
      </div>
      <article className="expenses">
        <div className="expense">
          total <span>${total} </span>
        </div>
        <div className="expense">
          shipping <span>${SHIPPING} </span>
        </div>
        <div className="expense">
          vat (included) <span>${vat_included} </span>
        </div>
      </article>
      <div className="grand-total">
        grand total <span>${grandTotal} </span>
      </div>
      <button
        type="submit"
        form="formCheckout"
        className="confirm-purchase-btn"
        onClick={handleSubmit}
      >
        checkout
      </button>
    </section>
  );
}

export default CartSummary;
