import CartSummary from "../components/CartSummary";
import Footer from "../components/Footer";
import FormCheckout from "../components/FormCheckout";
import Header from "../components/Header";

function Checkout() {
  return (
    <>
      <Header flag={"bcg-black"} />
      <main className="checkout">
        <FormCheckout />
        <CartSummary />
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
