import React from "react"
import '../css/footer.css'
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import Logo from "../assets/Logo.png";
import { BiCopyright } from "react-icons/bi";


function Footer(){
    return(
        <>
        <footer className="footer-home">
            <div className="footer-card">
                <div className="footer-nav">
                    <img src={Logo} alt="logo" />
                      <ul className="nav-links">
          <li><NavLink to="/">About us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/use-cases">Use Cases</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>

             <a href="www.linkedin.com"><img src="linkedin" alt="" /></a>
            <a href="www.facebook.com"><img src="facebook" alt="" /></a>
            <a href="www.twitter.com"><img src="twitter" alt="" /></a>

                </div>
                <div className="footer-mid">
                <div className="footer-info">
                    <h2 className="title-footer">Contact us:</h2>
                    <p>Email:info@postivius.com</p>
                    <p>Phone:555-567-8901</p>
                    <p>Addres: 1234 Main st</p>
                    <p>Moonstone City, Stardust State 12345</p>
                </div>
                <div className="footer-sub">
                    <input type="email" placeholder="Email"/> 
                    <button>Subscribe to news</button>
                </div>
                </div>
            <hr />
            <div className="footer-foot">
                <p><BiCopyright></BiCopyright> 2023 Postivius. All Right Reserved.</p> <li><NavLink to="/">Privacy Policy</NavLink></li>
            </div>
            </div>
        </footer>
        </>
    )
}

export default Footer