import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Recommended from "../components/Recommended";
import About from "../components/About";
import Categories from "../components/Categories";
import data from "../data";
import GoBackButton from "../components/GoBackButton";

const productPlaceholder = {
  id: "",
  img: "",
  name: "",
  category: "",
  newProduct: "",
  desc: "",
  price: "",
  features: {
    p1: "",
    p2: "",
  },
  boxContent: [],
};

function SingleProduct() {
  const [currProduct, setCurrProduct] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [recommendedItemIds, setRecommendedItemIds] = useState([]);
  const currProductId = useParams("id").id;

  useEffect(() => {
    setCurrProduct(data.find((product) => product.id === currProductId));
    const temp = [];
    // get three recommended products
    while (temp.length < 3) {
      const randomProduct = data[Math.floor(Math.random() * data.length)];
      if (
        randomProduct.id !== currProductId &&
        !temp.includes(randomProduct.id)
      ) {
        temp.push(randomProduct.id);
      }
    }
    setRecommendedItemIds(temp);
    setLoaded(true);
  }, [currProductId]);

  if (!loaded) {
    return <h1>Loading...</h1>;
  }
  const {
    id,
    img,
    name,
    category,
    newProduct,
    desc,
    price,
    features,
    boxContent,
  } = currProduct;
  const { p1, p2 } = features;

  const productInPerson = require(`../images/${name
    .split(" ")
    .join("-")}-in-person.png`).default;
  const productOnTabel = require(`../images/${name
    .split(" ")
    .join("-")}-on-table.png`).default;

  return (
    <>
      <Header flag={"bcg-black"} />
      <main className="single-product">
        {/* Will go to the previous page */}
        <GoBackButton />
        <section className="product">
          <div className="img-wrapper">
            <img src={img} alt="" />
          </div>
          <article className="details">
            <span className="tag">{newProduct && "new product"}</span>
            <h1 className="name">{`${name} ${category}`}</h1>
            <p className="desc">{desc}</p>
            <span className="price">$ {price}</span>
            <div className="user-input">
              <label>
                <span className="visually-hidden">product amount</span>
                <input type="number" value={1} />
              </label>
              <button type="button" className="product-btn">
                add to cart
              </button>
            </div>
          </article>
        </section>
        <section className="info">
          <article className="features">
            <h2>features</h2>
            <p>{p1}</p>
            <p>{p2}</p>
          </article>
          <article className="box-contents">
            <h2>in the box</h2>
            <ul>
              {boxContent.map((boxItem, i) => (
                <li key={i}>
                  <span>{boxItem.quantity}x</span> {boxItem.item}
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section className="gallery">
          <div className="picture-sm">
            <img src={productInPerson} alt="" />
          </div>
          <div className="picture-bg">
            <img src={img} alt="" />
          </div>
          <div className="picture-sm">
            <img src={productOnTabel} alt="" />
          </div>
        </section>
        <Recommended recommendedItemIds={recommendedItemIds} />
        <Categories />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default SingleProduct;
