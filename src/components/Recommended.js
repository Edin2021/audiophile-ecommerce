import tempImage from "../images/xx99-mark-I.png";

function Recommended() {
  return (
    <section className="recommended">
      <h2>you may also like</h2>
      <div className="recommended-items">
        <article className="item">
          <div className="img-wrapper">
            <img src={tempImage} alt="" />
          </div>
          <h3 className="name">x99 mark i</h3>
          <button type="button" className="product-btn">
            see product
          </button>
        </article>
        <article className="item">
          <div className="img-wrapper">
            <img src={tempImage} alt="" />
          </div>
          <h3 className="name">x99 mark i</h3>
          <button type="button" className="product-btn">
            see product
          </button>
        </article>
        <article className="item">
          <div className="img-wrapper">
            <img src={tempImage} alt="" />
          </div>
          <h3 className="name">x99 mark i</h3>
          <button type="button" className="product-btn">
            see product
          </button>
        </article>
      </div>
    </section>
  );
}

export default Recommended;
