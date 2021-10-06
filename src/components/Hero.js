import { Link } from "react-router-dom";
import Header from "./Header";
import tempImage from "../images/xx99-mark-II.png";

function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="hero-center">
        <article className="product-details">
          <span className="tag">new product</span>
          <h1 className="title">xx99 mark ii headphones</h1>
          <p className="desc">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="product-btn">
            <Link to="/single-product">see product</Link>
          </button>
        </article>
        <div className="product-img">
          <img src={tempImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
