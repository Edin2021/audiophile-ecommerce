import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import data from "../data";

const heroProductPlaceholder = {
  newProduct: "",
  category: "",
  name: "",
  img: "",
  desc: "",
  id: "",
};

function Hero() {
  const [heroProduct, setHeroProduct] = useState(heroProductPlaceholder);

  const productName = "xx99 mark ii";

  useEffect(() => {
    setHeroProduct(data.filter((item) => item.name === productName)[0]);
  }, []);

  const { newProduct, category, name, img, desc, id } = heroProduct;
  return (
    <section className="hero">
      <Header />
      <div className="hero-center">
        <article className="product-details">
          <span className="tag">{newProduct && "new product"}</span>
          <h1 className="title">{`${name} ${category}`}</h1>
          <p className="desc">{desc}</p>
          <button className="product-btn">
            <Link to={`/single-product/${id}`}>see product</Link>
          </button>
        </article>
        <div className="product-img">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
