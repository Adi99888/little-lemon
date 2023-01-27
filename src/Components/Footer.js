import React from "react";
import Img7 from "../assets/footer1.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-img">
          <img src={Img7} alt="error" />
        </div>

        <div className="footer-nav">
        <ul>
          <h2>Navigate to:</h2>
          
          <li><Link to='/'className="footer-link">Home-Page</Link></li>
          <li><Link to='/about'className="footer-link">About-Us</Link></li>
          <li><Link to='/menu'className="footer-link">Menu</Link></li>
          <li><Link to='/reservation'className="footer-link">Reservation</Link></li>
          <li><Link to='/order-online' className="footer-link">Order Online</Link> </li>
          <li><Link to='/login' className="footer-link">Login</Link> </li>
        </ul>
        </div>

        <div className="contact">
        <ul>
          <h2>Contact Us :</h2>
          
          <li> Address: </li>
          <li>Email:</li>
          <li> Phone Number:</li>
        </ul>
        </div>

       <div className="social-links">
       <ul>
          <h2>Social Media Links :</h2>
          
          <li><a href="https://www.facebook.com" className="footer-link">Facebook</a></li>
          <li><a href="https://www.instagram.com" className="footer-link">Instagram</a></li>
          <li><a href="https://www.youtube.com"  className="footer-link">Youtube</a></li>
        </ul>
       </div>
      </div>
    </>
  );
}

export default Footer;
