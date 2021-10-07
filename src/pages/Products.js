import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

function Products() {
  return (
    <>
      <Header flag={"category"} />
      {/* dinamically add products */}
      <main className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </main>
      <Footer />
    </>
  );
}

export default Products;
