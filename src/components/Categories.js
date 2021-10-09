import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import headphones from "../images/xx99-mark-I.png";
import speakers from "../images/zx9.png";
import earphones from "../images/earphones.png";

function Categories() {
  return (
    <section className="categories">
      <Link to="/products/headphones">
        <article className="category">
          <div className="img-wrapper">
            <img src={headphones} alt="" />
          </div>
          <span className="float-shadow"></span>
          <h3 className="name">headphones</h3>
          <div>
            {" "}
            shop{" "}
            <span className="icon">
              <IoIosArrowForward />
            </span>
          </div>
        </article>
      </Link>
      <Link to="/products/speakers">
        <article className="category">
          <div className="img-wrapper">
            <img src={speakers} alt="" />
          </div>
          <span className="float-shadow"></span>
          <h3 className="name">speakers</h3>
          <div>
            {" "}
            shop{" "}
            <span className="icon">
              <IoIosArrowForward />
            </span>
          </div>
        </article>
      </Link>
      <Link to="/products/earphones">
        <article className="category">
          <div className="img-wrapper">
            <img src={earphones} alt="" />
          </div>
          <span className="float-shadow"></span>
          <h3 className="name">earphones</h3>
          <div>
            {" "}
            shop{" "}
            <span className="icon">
              <IoIosArrowForward />
            </span>
          </div>
        </article>
      </Link>
    </section>
  );
}

export default Categories;
