import { Link } from "react-router-dom";
import tempImage from "../images/xx99-mark-I.png";

function Product() {
  return (
    <section className="product">
      <div className="img-wrapper">
        <img src={tempImage} alt="" />
      </div>
      <article className="details">
        <h2 className="name">xx99 mark ii headphones</h2>
        <p className="desc">
          The new xx99 MARK II headphones is the pinacle of pristine audio. It
          redefines your premium headphone experience by reducing the balanced
          depth and presure of studio-quality sound.
        </p>
        <button type="button" className="product-btn">
          <Link to="/single-product"> see product</Link>
        </button>
      </article>
    </section>
  );
}

export default Product;
