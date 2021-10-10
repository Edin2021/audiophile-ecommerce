import { Link } from "react-router-dom";

function Product({ listItem }) {
  const { id, img, newProduct, name, desc, category } = listItem;

  return (
    <section className="product">
      <div className="img-wrapper">
        <img src={img} alt="" />
      </div>
      <article className="details">
        <span className="tag">{newProduct && "new product"}</span>
        <h2 className="name">{`${name} ${category}`}</h2>
        <p className="desc">{desc}</p>
        <button type="button" className="product-btn">
          <Link to={`/single-product/${id}`}> see product</Link>
        </button>
      </article>
    </section>
  );
}

export default Product;
