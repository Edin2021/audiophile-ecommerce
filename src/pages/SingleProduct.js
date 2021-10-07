import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import tempImage from "../images/xx99-mark-II.png";
import tempImage2 from "../images/xx99-mark-II-on-table.png";
import tempImage3 from "../images/xx99-mark-II-in-person.png";
import Recommended from "../components/Recommended";
import About from "../components/About";
import Categories from "../components/Categories";

function SingleProduct() {
  return (
    <>
      <Header flag={true} />

      <main className="single-product">
        {/* Will go to the previous page */}
        <Link className="go-back-btn" to="/">
          go back
        </Link>
        <section className="product">
          <div className="img-wrapper">
            <img src={tempImage} alt="" />
          </div>
          <article className="details">
            <span className="tag">New product</span>
            <h1 className="name">xx99 mark ii headphones</h1>
            <p className="desc">
              The new xx99 MARK II headphones is the pinacle of pristine audio.
              It redefines your premium headphone experience by reducing the
              balanced depth and presure of studio-quality sound.
            </p>
            <span className="price">$ 2,999</span>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              suscipit tempora eius, eligendi quos rem impedit necessitatibus
              culpa qui repellat alias quisquam soluta, consequuntur magni quam
              nesciunt nam laudantium. Assumenda unde ad repellendus ipsa
              eligendi! Perferendis similique maxime labore. Eos alias dolore
              aperiam impedit exercitationem laborum, necessitatibus ullam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              eum iste reiciendis? Consectetur rem dolores, iure numquam
              consequuntur quas explicabo tenetur architecto deleniti eius
              reprehenderit soluta ipsum expedita? Iusto, ea. Vitae esse
              numquam, facilis, deleniti libero consequuntur debitis asperiores
              quis, corporis incidunt molestiae aspernatur. Nihil commodi in
              obcaecati blanditiis alias tenetur autem, ipsa iure ratione?
            </p>
          </article>
          <article className="box-contents">
            <h2>in the box</h2>
            <ul>
              <li>
                <span>1x</span> headphone unit
              </li>
              <li>replacement earcups</li>
              <li>user manual</li>
              <li>3.5mm 5m audio cable</li>
              <li>travel bag</li>
            </ul>
          </article>
        </section>
        <section className="gallery">
          <div className="picture-sm">
            <img src={tempImage3} alt="" />
          </div>
          <div className="picture-bg">
            <img src={tempImage} alt="" />
          </div>
          <div className="picture-sm">
            <img src={tempImage2} alt="" />
          </div>
        </section>
        <Recommended />
        <Categories />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default SingleProduct;
