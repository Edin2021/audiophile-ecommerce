import CartSummary from "../components/CartSummary";
import Footer from "../components/Footer";
import FormCheckout from "../components/FormCheckout";
import Header from "../components/Header";
import ModalCheckout from "../components/ModalCheckout";
import { useGlobalContext } from "../context";

function Checkout() {
  const { cartItems, showModal } = useGlobalContext();
  return (
    <>
      <Header flag={"bcg-black"} />
      <main className="checkout">
        {cartItems.length > 0 ? (
          <>
            <FormCheckout />
            <CartSummary />
            <ModalCheckout />
          </>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
