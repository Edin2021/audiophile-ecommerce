import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import data from "../data";

function Products() {
  const [currList, setCurrList] = useState([]);
  const currCategory = useParams("category").category;

  useEffect(() => {
    setCurrList(data.filter((item) => item.category === currCategory));
  }, [currCategory]);

  return (
    <>
      <Header flag={"category"} />
      {/* dinamically add products */}
      <main className="products">
        {currList.map((listItem) => (
          <Product key={listItem.id} listItem={listItem} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Products;
