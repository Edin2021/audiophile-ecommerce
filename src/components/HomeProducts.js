import { useEffect, useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";

const productPlaceholder = {
  id: "",
  img: "",
  name: "",
  desc: "",
};

const productName1 = "zx9";
const productName2 = "zx7";
const productName3 = "yx1";

const productDesc1 =
  "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.";

function HomeProducts() {
  const [homeProduct1, setHomeProduct1] = useState(productPlaceholder);
  const [homeProduct2, setHomeProduct2] = useState(productPlaceholder);
  const [homeProduct3, setHomeProduct3] = useState(productPlaceholder);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    data.filter((item) => {
      const { name } = item;
      if (name === productName1) {
        setHomeProduct1(item);
      }
      if (name === productName2) {
        setHomeProduct2(item);
      }
      if (name === productName3) {
        setHomeProduct3(item);
      }
    });
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <h2>Loading...</h2>;
  }
  const {
    img: img_1,
    name: name_1,
    category: category_1,
    id: id_1,
  } = homeProduct1;
  const {
    img: img_2,
    name: name_2,
    category: category_2,
    id: id_2,
  } = homeProduct2;
  const {
    img: img_3,
    name: name_3,
    category: category_3,
    id: id_3,
  } = homeProduct3;
  return (
    <section className="home-products">
      <div className="main-product">
        <div className="img-wrapper">
          <img src={img_1} alt="" />
          <span className="shadow-rings"></span>
        </div>
        <article className="details">
          <h2 className="name">{`${name_1} ${category_1}`}</h2>
          <p className="desc">{productDesc1}</p>
          <button type="button" className="product-btn">
            <Link to={`/single-product/${id_1}`}>see product</Link>
          </button>
        </article>
      </div>
      <div
        className="sub-product-1"
        style={{ backgroundImage: `url(${img_2})` }}
      >
        <article className="details">
          <h2 className="name">{`${name_2} ${category_2}`}</h2>
          <button type="button" className="product-btn">
            <Link to={`/single-product/${id_2}`}>see product</Link>
          </button>
        </article>
      </div>
      <div className="sub-product-2">
        <div className="img-wrapper">
          <img src={img_3} alt="" />
        </div>
        <article className="details">
          <h2 className="name">{`${name_3} ${category_3}`}</h2>
          <button type="button" className="product-btn">
            <Link to={`/single-product/${id_3}`}>see product</Link>
          </button>
        </article>
      </div>
    </section>
  );
}

export default HomeProducts;
