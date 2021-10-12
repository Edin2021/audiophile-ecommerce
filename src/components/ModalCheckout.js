import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const itemPlaceholder = {
  img: "",
  name: "",
  price: "",
  quantity: "",
};

function ModalCheckout() {
  const { showModal, setShowModal, cartItems, grandTotal } = useGlobalContext();
  const [modalItem, setModalItem] = useState(itemPlaceholder);
  console.log(cartItems);

  useEffect(() => {
    if (cartItems.length > 0) {
      setModalItem(cartItems[0]);
    }
  }, [cartItems]);

  const { img, name, price, quantity } = modalItem;
  // console.log(modalItem);

  return (
    <section className={`modal-bcg ${showModal && "show"}`}>
      <div className="modal">
        <span className="icon">
          <FaCheck />
        </span>
        <h2>
          thank you <br></br> for your order
        </h2>
        <p>You will receive and email confirmation shortly</p>
        <article className="cards">
          <div className="order">
            <div className="item">
              <div className="img-wrapper">
                <img src={img} alt="" />
              </div>
              <div className="details">
                <h3 className="name">{name}</h3>
                <span className="price">$ {price}</span>
              </div>
              <div className="quantity">{quantity}x</div>
            </div>
            {cartItems.length > 1 && (
              <span className="other-items">
                and {cartItems.length - 1} more items
              </span>
            )}
          </div>
          <div className="order-total">
            grand total
            <span>$ {grandTotal}</span>
          </div>
        </article>
        <Link onClick={() => setShowModal(false)} className="home-btn" to="/">
          back to home
        </Link>
      </div>
    </section>
  );
}

export default ModalCheckout;
