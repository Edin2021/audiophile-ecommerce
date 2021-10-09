import { Link } from "react-router-dom";
import { GrDeliver } from "react-icons/gr";

function FormCheckout() {
  return (
    <form className="form-checkout">
      <Link className="go-back-btn" to="/">
        go back
      </Link>
      <div className="form-wrapper">
        <h1>checkout</h1>
        <section className="billing-details">
          <h3>billing details</h3>
          <div className="input-fields">
            <label>
              name
              <input type="text" />
            </label>
            <label>
              email address
              <input type="email" />
            </label>
            <label>
              phone number
              <input type="tel" />
            </label>
          </div>
        </section>
        <section className="shipping-info">
          <h3>shipping info</h3>
          <div className="input-fields">
            <label>
              address
              <input type="text" />
            </label>
            <label>
              ZIP Code
              <input type="number" />
            </label>
            <label>
              city
              <input type="text" />
            </label>
            <label>
              country
              <input type="text" />
            </label>
          </div>
        </section>
        <section className="payment-details">
          <h3>payment details</h3>
          <div className="input-fields">
            <label>
              <span>payment method</span>
              <div className="input-radios">
                <label>
                  <input type="radio" name="paymentMethod" defaultChecked />
                  <span> e-Money</span>
                </label>
                <label>
                  <input type="radio" name="paymentMethod" />
                  Cash on Delivery
                </label>
              </div>
            </label>
            <label>
              e-Money Number
              <input type="number" />
            </label>
            <label>
              e-Money PIN
              <input type="number" />
            </label>
            <div className="delivery-info">
              <span className="icon">
                <GrDeliver />
              </span>
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}

export default FormCheckout;
