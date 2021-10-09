import { useParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

function Products() {
  const currCategory = useParams("category").category;
  console.log(currCategory);
  return (
    <>
      <Header flag={"category"} />
      {/* dinamically add products */}
      <main className="products">
        <Product />
      </main>
      <Footer />
    </>
  );
}

export default Products;
