import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './navbar.css'

const NavbarSection = () => {
  return (
    <header className="bg-white py-1">
      <nav className="container flex gap-1 align-center justify-between">
        <h1 className="hero-itle">SnapMart</h1>
        <ul className="flex gap-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/flash-sale">Flash Sale</Link>
          </li>
        </ul>
        <div className="flex gap-1">
          <button>
            <FaSearch />
          </button>
          <Link to="/">
            <FaCartShopping />
          </Link>
          <Link to="/">
            <FaUser />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavbarSection;
