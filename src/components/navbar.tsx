import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo"><img src={Logo} alt="" /></div>

        <ul className="nav-links">
          <li><NavLink to="/">About us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/use-cases">Use Cases</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>

        <Link to="/contact" className="nav-button">
          Request a quote
        </Link>
      </nav>
    </header>
  );
}