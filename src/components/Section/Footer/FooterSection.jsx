import { Link } from "react-router-dom";
import './footer.css'
const FooterSection = () => {
    return (
        <footer className="footer bg-dark text-white">
    <div className="container medium-2 large-5 gap-2 py-1 medium-py-4">
      {/* Footer logo and contact info  */}
      <div className="contact-info large-span-2">
        <Link to="/" className="logo">
          <img img="/logo-header.png" alt="Real Estate Logo" />
        </Link>

        <p>
          We connect buyers and sellers with trusted real estate solutions.
          From dream homes to investment properties, we make every transaction simple and transparent.
        </p>

        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

      </div>

       {/* Quick navigation links  */}
      <div>
        <h5>Quick Links</h5>
        <ul className="footer-links">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/properties">All Properties</Link>
          </li>
          <li>
            <Link to="">Our Agents</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

       {/* Support / Resources  */}
      <div>
        <h5>Resources</h5>
        <ul className="footer-links">
          <li>
            <Link to="">Buyer’s Guide</Link>
          </li>
          <li>
            <Link to="">Seller’s Guide</Link>
          </li>
          <li>
            <Link to="">FAQ</Link>
          </li>
          <li>
            <Link to="">Privacy Policy</Link>
          </li>
          <li>
            <Link to="">Terms & Conditions</Link>
          </li>
        </ul>
      </div>

       {/* Newsletter section  */}
      <div className="newsletter">
        <h5>Newsletter</h5>
        <p>
          Subscribe to get the latest property updates, offers, and real estate insights.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit"><i className="fa-solid fa-paper-plane"></i>Subscribe</button>
        </form>
      </div>
    </div>

     {/* Footer bottom copyright  */}
    <div className="footer-bottom">
      <p>{ new Date().getFullYear() } &copy; All rights reserved by RealEstate, Bangladesh
      </p>
    </div>
  </footer>
    );
};

export default FooterSection;