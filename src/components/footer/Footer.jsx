import "./Footer.css";
import logo from "../../assets/recipe.png";
import face from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import twit from "../../assets/twitter.png";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <h3>Contact Us</h3>
        <ul className="info-list">
          <li>Call +01 123456789</li>
          <li>A St. B/C London</li>
          <li>info@recipe.com</li>
        </ul>
      </div>
      <div className="footer-logo">
        <div className="logo-header">
          <img src={logo} alt="" width={60} />
          <h3>Recipe Platform</h3>
        </div>
        <div className="logo-links">
          <ul className="social-links">
            <li>
              <img src={face} alt="" width={30} />
            </li>
            <li>
              <img src={insta} alt="" width={30} />
            </li>
            <li>
              <img src={twit} alt="" width={30} />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-recipe">
        <h3>Add Recipe</h3>
        <p>Join us and share your delicious recipes.</p>
        <button>Join Us</button>
      </div>
    </div>
  );
}
