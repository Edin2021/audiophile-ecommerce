import Nav from "./Nav";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <span className="underline"></span>
        <div className="footer-headline">
          <span className="company-name">audiophile</span>
          <Nav />
        </div>
        <article className="info">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 day a week.
          </p>
          <div className="media-links">
            <a href="#facebook">
              <span className="visually-hidden">facebook</span>
              <FaFacebookSquare />
            </a>
            <a href="#twitter">
              <span className="visually-hidden">twitter</span>
              <FaTwitter />
            </a>
            <a href="#instagram">
              <span className="visually-hidden">instagram</span>
              <FaInstagram />
            </a>
          </div>
        </article>
        <div className="copyright">
          Copyright {new Date().getFullYear()}. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
