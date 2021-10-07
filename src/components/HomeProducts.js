import zx9_speaker from "../images/zx9.png";
import zx7_speaker from "../images/zx7-on-table.png";
import yx1_earphones from "../images/yx1.png";

function HomeProducts() {
  return (
    <section className="home-products">
      <div className="main-product">
        <div className="img-wrapper">
          <img src={zx9_speaker} alt="" />
          <span className="shadow-rings"></span>
        </div>
        <article className="details">
          <h2 className="name">zx9 speaker</h2>
          <p className="desc">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button type="button" className="product-btn">
            see product
          </button>
        </article>
      </div>
      <div
        className="sub-product-1"
        style={{ backgroundImage: `url(${zx7_speaker})` }}
      >
        <article className="details">
          <h2 className="name">zx7 speaker</h2>
          <button type="button" className="product-btn">
            see product
          </button>
        </article>
      </div>
      <div className="sub-product-2">
        <div className="img-wrapper">
          <img src={yx1_earphones} alt="" />
        </div>
        <article className="details">
          <h2 className="name">yx1 earphones</h2>
          <button type="button" className="product-btn">
            see product
          </button>
        </article>
      </div>
    </section>
  );
}

export default HomeProducts;
