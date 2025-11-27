import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo-white.png';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  return (
      <footer className="main-footer bg-black text-white p-5 mt-5">

      <div className="container">
        <div className="row footer-top">
          <div className="col-md-6 col-lg-3 footer-section about">
            <img src={logo} alt="AchieversIT" className="footer-logo" />
            <p>
              AchieversIT - Provides a wide group of opportunities for freshers and
              experienced candidates who can develop their skills and build their
              career opportunities across multiple Companies.
            </p>
          </div>

          <div className="col-md-6 col-lg-2 footer-section links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Placements</a></li>
              <li><a href="#">Corporate Training</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 footer-section links">
            <h4>Trending Courses</h4>
            <ul>
              <li><a href="#">UI Development Course</a></li>
              <li><a href="#">Angular JS Course</a></li>
              <li><a href="#">React JS Course</a></li>
              <li><a href="#">Digital Marketing Course</a></li>
              <li><a href="#">Python Course</a></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-4 footer-section contact">
            <h4>Contact Info</h4>
            <p><FaMapMarkerAlt /> #63, 1st Floor, 16th Main, 8th Cross, BTM Stage, Bangalore, India - 560029</p>
            <p><FaPhoneAlt /> +91 8431-040-457</p>
            <p><FaEnvelope /> info@achieversit.com</p>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="social-icons d-flex justify-content-center mb-2">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
            <FaPinterestP />
            <FaYoutube />
          </div>

          <div className="footer-links d-flex justify-content-center gap-3 mb-2">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Refund Policy</span>
          </div>

          <p className="text-center">© 2025 AchieversIT. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
